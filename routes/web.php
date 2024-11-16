<?php

use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Route;
use Mockery\Matcher\Type;
use App\Models\users;


require 'api.php';

Route::get('/', [userController::class,'home']);

Route::get('/login',[userController::class,'login']);

Route::get('/register',[userController::class,'register']);

Route::get('/logout',[userController::class,'logout']);

Route::post('/post',[userController::class,'createPost']);

Route::get('/post/{id}',[userController::class,'post']);

Route::get('post/edit/{id}',[userController::class,'editPost']);

Route::get('update/{id}',[userController::class,'updateUser']);

Route::get('update/delete-account/{id}',[userController::class,'deleteUser']);

Route::get('update/edit-account/{id}',[userController::class,'editUserPage']);

Route::post('update/edit-account/',[userController::class,'editUser']);

Route::get('search/{title}',[userController::class,'searchPosts']);
