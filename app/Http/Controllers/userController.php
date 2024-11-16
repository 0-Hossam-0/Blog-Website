<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;
use App\Models\posts;
use App\Models\comments;
use Hash;
use Illuminate\Support\Facades\Cookie;
class userController
{
    public function home()
    {
        $posts = posts::with('user')->orderByDesc('created_at')->get();
        $userData = json_decode(request()->cookie('data'));
        $cookie = 'test';
        if ($userData != null) {
            $user = users::where('email', '=', $userData->email)->get()->first();
            if ($user != null) {
                if ($userData->email == $user->email) {
                    return view('homePage', [
                        'userData' => $userData,
                        'posts' => $posts,
                        'cookie' => $cookie
                    ]);
                }
            }
        }
        $userData = [
            'name' => 'Guest'
        ];
        return view('homePage', [
            'userData' => 'Guest',
            'posts' => $posts
        ]);
    }

    public function register()
    {
        return view('registerPage');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function login()
    {
        $userData = json_decode(request()->cookie('data'));
        if ($userData != null) {
            $user = users::where('email', '=', $userData->email)->get()->first();
            if ($user != null) {
                if ($userData->email == $user->email) {
                    return redirect('/');
                }
            }
        }
        $userData = [
            'name' => 'Guest'
        ];
        return view('loginPage');
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function logout()
    {
        return redirect('/login')->withCookie(cookie('data', null, -1));
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function createPost(Request $request)
    {
        $posts = posts::with('user')->orderByDesc('created_at')->get();
        $userData = json_decode(request()->cookie('data'));
        if ($userData != null) {
            $user = users::where('email', '=', $userData->email)->get()->first();
            if ($user != null) {
                if ($userData->email == $user->email) {
                    return view('createPostPage', [
                        'userData' => $userData,
                        'posts' => $posts,
                        'title' => $request->post_title,
                        'body' => $request->post_body
                    ]);
                }
            }
        }
        return redirect('/login');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function post(string $id)
    {
        $comments = comments::with('comment')->with('user')->where('post_id', '=', $id)->get();
        $post = posts::with('user')->where('post_id', '=', $id)->get()->first();
        $userData = json_decode(request()->cookie('data'));
        if ($userData != null) {
            $user = users::where('email', '=', $userData->email)->get()->first();
            if ($user != null) {
                if ($userData->email == $user->email) {
                    return view('postPage', [
                        'userData' => $userData,
                        'comments' => $comments,
                        'post' => $post
                    ]);
                }
            }
        }
        $userData = [
            'name' => 'Guest'
        ];
        return view('postPage', [
            'userData' => 'Guest',
            'comments' => $comments,
            'post' => $post
        ]);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function editPost(string $id)
    {
        $post = posts::with('user')->where('post_id', '=', $id)->get()->first();
        $userData = json_decode(request()->cookie('data'));
        if ($userData != null) {
            $user = users::where('email', '=', $userData->email)->get()->first();
            if ($user != null) {
                if ($userData->email == $user->email) {
                    return view('editPostPage', [
                        'userData' => $userData,
                        'post' => $post
                    ]);
                }
            }
        }
        $userData = [
            'name' => 'Guest'
        ];
        return view('editPostPage', [
            'userData' => 'Guest',
            'post' => $post
        ]);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function updateUser()
    {
        $userData = json_decode(request()->cookie('data'));
        if ($userData != null) {
            $user = users::where('email', '=', $userData->email)->get()->first();
            if ($user != null) {
                if ($userData->email == $user->email) {
                    return view('updateUserPage', [
                        'userData' => $userData,
                    ]);
                }
            }
        }
        $userData = [
            'name' => 'Guest'
        ];
        return view('updateUserPage', [
            'userData' => 'Guest',
        ]);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function deleteUser(string $id)
    {
        users::where('user_id', '=', $id)->delete();

        return redirect('/register')->withCookie(cookie('data', null, -1));
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function editUserPage(string $id)
    {
        $userData = users::where('user_id', '=', $id)->get()->first();
        return view('editUserPage', compact('userData'));
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function editUser(Request $request)
    {
        users::where('user_id', '=', $request->id)->update([
            'name' => ($request->firstName . ' ' . $request->lastName),
            'address' => ($request->address),
            'email' => ($request->email),
            'password' => Hash::make($request->newPassword),
            'gender' => $request->gender
        ]);
        $cookie = json_encode([
            'email' => $request->email,
            'name' => ($request->firstName . ' ' . $request->lastName),
            'address' => $request->address,
            'gender' => $request->gender,
            'password' => Hash::make($request->newPassword),
            'id' => $request->id,
            'darkMode' => false
        ]);
        Cookie::queue(Cookie::make('data', $cookie, 43800, '/', null, false, false));
        return true;
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function searchPosts(string $title)
    {
        $userData = json_decode(request()->cookie('data'));
        if ($userData != null) {
            $user = users::where('email', '=', $userData->email)->get()->first();
            if ($user != null) {
                if ($userData->email == $user->email) {
                    if (posts::where('title', 'LIKE', '%'. $title .'%')->exists()) {
                        $posts = posts::where('title', 'LIKE', '%'. $title .'%')->get();
                        return view('searchPage', [
                            'userData' => $userData,
                            'posts' => $posts,
                        ]);
                    } else {
                        return view('searchPage', [
                            'userData' => $userData,
                            'posts' => false,
                        ]);
                    }
                }
            }
        }
        $userData = [
            'name' => 'Guest'
        ];
        if (posts::where('title', 'LIKE', '%'. $title .'%')->exists()) {
            $posts = posts::where('title', 'LIKE', '%'. $title .'%')->get();
        } else {
            return view('searchPage', [
                'userData' => 'Guest',
                'posts' => false
            ]);

        }
    }
}

