<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use HttpResponses;

    public function register(RegisterUserRequest $request){

        $request->validated($request->all());

        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);

        return $this->success([
            'user'=>$user,
            'token'=>$user->createToken('Api token of '.$user->name)->plainTextToken
        ],'Successfully created user!',201);

    }
}
