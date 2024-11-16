<?php

use App\Http\Controllers\apiController;
use Illuminate\Support\Facades\Route;

Route::post('api/check-email',[apiController::class,'checkEmail']);

Route::post('api/check-email2',[apiController::class,'checkEmail2']);

Route::post('api/create-account',[apiController::class,'createAccount']);

Route::post('api/login',[apiController::class,'login']);

Route::post('api/create-post',[apiController::class,'createPost']);

Route::get('api/delete-post/{id}',[apiController::class,'deletePost']);

Route::post('api/create-comment',[apiController::class,'createComment']);

Route::post('/api/edit-post',[apiController::class,'editPost']);

Route::post('api/check-password',[apiController::class,'checkPassword']);
