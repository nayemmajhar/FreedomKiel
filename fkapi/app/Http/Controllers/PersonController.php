<?php

namespace App\Http\Controllers;

use App\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    
    public function showAllPersons(){
        // return json_encode(array('name'=>'nayem','email'=>'majhar'));
        return response()->json(Person::all());
    }

    public function showOnePerson($id){
        return response()->json(Person::find($id));
    }

    public function create(Request $request){
        $author = Author::create($request->all());

        return response()->json($person, 201);
    }

}
