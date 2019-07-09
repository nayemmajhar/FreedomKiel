<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Hashing\BcryptHasher;
use Tymon\JWTAuth\JWTAuth;


class UserController extends Controller
{
    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    public function showAllPersons(){
        // return json_encode(array('name'=>'nayem','email'=>'majhar'));
        return response()->json(User::all());
    }

    public function showUserByUsername($id){
        return response()->json(User::find($id));
    }

    public function register(Request $request)
    {
        $this->validate(
            $request, [
                'username'  => 'required',
                'email'     => 'required|unique:users|email',
                'password'  => 'required'
            ]
        );

        $data = [
            'username'          => $request->username,
            'email'             => $request->email,
            'activation_key'    => $request->activation_key,
            'password'          => (new BcryptHasher)->make($request->password)
        ];

        $user = User::create($data);

        $statusCode = $user ? 220:422;

        return response(
            [
                'data' => $user,
                'status' => $user ? "success":"error"
            ],
            $statusCode
        );

    }

    public function login(Request $request)
    {

        $this->validate(
            $request, [
                'username' => 'required',
                'password' => 'required'
            ]
        );

        $username = $request->username;
        $password = $request->password;
        $user = User::find($username);

        $response = [
            'data' => $user,
            'status' => 'error',
        ];

        $statusCode = $user ? 220:422;

        if($user != null){

            if ((new BcryptHasher)->check($password, $user->password)){
                $response['status'] = 'success';
            } else {
                $response['status'] = 'worng';
            }
        }

        return response($response, $statusCode);

    }


    public function postLogin(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required|email|max:255',
            'password' => 'required',
        ]);

        try {

            if (! $token = $this->jwt->attempt($request->only('username', 'password'))) {
                return response()->json(['user_not_found'], 404);
            }

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent' => $e->getMessage()], 500);

        }

        return response()->json(compact('token'));
    }

}
