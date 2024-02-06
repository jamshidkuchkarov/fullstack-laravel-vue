<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
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

    public function login(LoginUserRequest $request){
        $request->validated($request->all());

        if(!Auth::attempt($request->only(['email','password']))){
            return $this->error('','The provided credentials are incorrect.',401);
        }

        $user = User::where('email',$request->email)->first();
        return $this->success([
            'user'=>$user,
            'token'=>$user->createToken('Api token of '.$user->name)->plainTextToken
        ]);
    }
    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();
        return $this->success([
            'message' => 'You have successfully  been logged out and  your token'
        ]);
    }
}
