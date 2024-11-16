<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}"> <!-- CSRF Token -->
    <title>Login</title>
    <link rel="stylesheet" href="{{asset('CSS/Login/style.css')}}"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

  </head>
    <div class="window">
      <header class="header">Login</header>
      <form name="form" id="form">
        <div class="inputs">
          <input type="text" class="email" name="email" placeholder="Email" />
          <p class="email_error"></p>
          <input type="password" class="password" name="password" placeholder="Password"/>
          <p class="password_error"></p>
          <p style="color:green;" class="registered"></p>
        </div>
        <button name="submit" class="button" type="submit">Login</button>
        <p style='color:black;margin-bottom:1rem;'>Create a new account <a href="/register">Click here</a></p>
      </form>
    </div>
    <script type="module" src='{{asset("js/Login/login.js")}}'></script>