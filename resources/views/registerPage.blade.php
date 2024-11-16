<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Register</title>
    <link rel="stylesheet" href="{{asset('CSS/Register/style.css')}}"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  </head>
  <body>
      <div class="window">
          <header class="header">Register</header>
        <form name="form" id="form1">
            <div class="inputs">
                <input type="text" class="first-name" name="first_name" placeholder="First Name"/>
            <p class="first-name-error"></p>
            <input type="text" class="last-name" name="last_name" placeholder="Last Name"/>
            <p class="last-name-error"></p>
            <input type="text" class="address" name="address" placeholder="Address"/>
            <p class="address-error"></p>
            <div class="gender-box">
                <p class="gender-text">Gender:</p>
                <div class="male-gender">
                    <p class="male-text">Male</p>
                    <input class="male-checkbox" type="radio" name="gender">
                </div>
                <div class="female-gender">
                    <p class="female-text">Female</p>
                    <input class="female-checkbox" type="radio" name="gender">
                </div>
            </div>
            <p class="gender-error" style="text-align: center"></p>
        </div>
        <div class="buttons">
            <button id="button" name="submit" class="submit-button" type="submit">Next</button>
        </div>
    </form>
    <form id="form2">
        @csrf
    <div class="inputs2">
        <input type="text" class="email" name="email" placeholder="Email"/>
        <p class="email_error"></p>
        <input type="password" class="password" name="password" placeholder="Password"/>
        <p class="password_error"></p>
        <input type="password" class="Rpassword" name="Rpassword" placeholder="Repeat Password"/>
        <p class="Rpassword_error"></p>
        <div class="buttons">
            <button id="button" class="back-button"><a href="/back" style="text-decoration: none;color:black;">Back</a></button>
            <button id="button" name="submit" class="submit-button" type="submit" style="background-color: rgb(136, 176, 198)">Register</button>
        </div>
        </form>
    </div>
    <p style="color:black;margin-bottom:1rem;">Already have an account?</a> <a href="login">Click here</a>
    </div>
</div>
</body>
</html>
    <script type="module" src='{{asset("js/Register/register.js")}}'></script>