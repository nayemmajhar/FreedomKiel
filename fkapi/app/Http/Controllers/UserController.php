<?php

namespace App\Http\Controllers;

use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Hashing\BcryptHasher;
use function Sodium\crypto_pwhash_str_verify;

class UserController extends Controller
{
    
    public function showAllPersons(){
        // return json_encode(array('name'=>'nayem','email'=>'majhar'));
        return response()->json(User::all());
    }

    public function showUserByUsername($username){
        return response()->json(User::find($username));
    }

    public function register(Request $request)
    {
        $this->validate(
            $request, [
                'username' => 'required',
                'email' => 'required|unique:users|email',
                'password' => 'required'
            ]
        );

        $data = [
            'username' => $request->username,
            'email' => $request->email,
            'password' => (new BcryptHasher)->make($request->password)
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


    public function verifyaccount(){

    }

}
