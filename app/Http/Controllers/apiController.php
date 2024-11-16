<?php

namespace App\Http\Controllers;

use DB;
use Hash;
use Illuminate\Http\Request;
use App\Models\users;
use App\Models\posts;
use App\Models\comments;
use Illuminate\Support\Facades\Cookie;
use function PHPUnit\Framework\isEmpty;

class apiController
{
    public function createAccount(Request $request)
    {
        DB::table('users')->insert([
            [
                'name' => ($request->firstName . ' ' . $request->lastName),
                'address' => $request->address,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'gender' => $request->gender,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
        return response()->json(['message' => 'Sent'], 200);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function checkEmail(Request $request)
    {
        return users::where('email', '=', $request->email)->exists();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function checkEmail2(Request $request)
    {
        if (users::where('email', '=', $request->email)->exists()) {
            if ($request->email == json_decode(request()->cookie('data'))->email) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////


    public function login(Request $request)
    {
        if (users::where('email', '=', $request->email)->exists()) {
            $response = null;
            $user = users::where('email', '=', $request->email)->get()->first();
            if (Hash::check($request->password, $user->password)) {
                $response = response('True')->withCookie(cookie('data', json_encode([
                    'id' => $user->user_id,
                    'email' => $request->email,
                    'name' => $user->name,
                    'address' => $user->address,
                    'gender' => $user->gender,
                    'password' => $user->password,
                    'darkMode' => false
                ]), 43800, '/', null, false, false));
                return $response;
            }
            return 'Wrong';
        }
        return 'Doesn`t Exist';
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function createPost(Request $request)
    {
        $userData = json_decode(request()->cookie('data'));
        if ($userData != null) {
            $user = users::where('email', '=', $userData->email)->get()->first();
            if ($user != null) {
                if ($user->email === $userData->email) {
                    posts::insert([
                        [
                            'user_id' => $user->user_id,
                            'title' => $request->post_title,
                            'body' => $request->post_body,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ]
                    ]);
                    return redirect('/');
                }
            }
        }

        return redirect('/login');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function deletePost(string $id)
    {
        posts::where('post_id', '=', $id)->delete();
        return redirect('/');
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function createComment(Request $request)
    {
        comments::insert([
            'body' => $request->comment,
            'post_id' => $request->post_id,
            'user_id' => $request->user_id,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        return redirect($request->userUrl);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function editPost(Request $request)
    {
        posts::where('post_id', '=', $request->post_id)->update([
            'title' => $request->post_title,
            'body' => $request->post_body,
            'updated_at' => now()
        ]);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    public function checkPassword(Request $request)
    {
        if(!Hash::check($request->password,users::where('user_id','=',$request->id)->get('password')->first()['password'])){
            return true;
        }
        return false;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
