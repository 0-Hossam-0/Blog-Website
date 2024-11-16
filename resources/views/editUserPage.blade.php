<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Edit</title>
    <link rel="stylesheet" href="{{asset('CSS/EditUser/style.css')}}"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  </head>
  <body>
      <div class="window">
          <header class="header">Edit Profile</header>
        <form name="form" id="form">
            <div class="inputs">
            <input type="text" class="first-name" name="first_name" placeholder="First Name" value ={{explode(' ', $userData->name)[0]}}>
            <p class="error first-name-error"></p>
            <input type="text" class="last-name" name="last_name" placeholder="Last Name"value ={{explode(' ', $userData->name)[1]}}>
            <p class="error last-name-error"></p>
            <input type="text" class="address" name="address" placeholder="Address" value ={{$userData->address}}>
            <p class="error address-error"></p>
            <input type="text" class="email" name="email" placeholder="Email" value={{$userData->email}}>
            <p class="error email-error"></p>
            <div class="gender-box">
                <p class="gender-text">Gender:</p>
                <div class="male-gender">
                    @if($userData->gender === 'Male')
                    <p class="male-text">Male</p>
                    <input class="male-checkbox" type="radio" name="gender" checked>
                    @else
                    <p class="male-text">Male</p>
                    <input class="male-checkbox" type="radio" name="gender">
                    @endif
                </div>
                <div class="female-gender">
                    @if($userData->gender === 'Female')
                    <p class="female-text">Female</p>
                    <input class="female-checkbox" type="radio" name="gender" checked>
                    @else
                    <p class="female-text">Female</p>
                    <input class="female-checkbox" type="radio" name="gender">
                    @endif
                </div>
            </div>
            <p class="gender-error" style="text-align: center"></p>
            <input type="password" class="old-password" name="password" placeholder="Old Password"/>
            <p class="error old-password-error"></p>
            <input type="password" class="new-password" name="new-password" placeholder="New Password"/>
            <p class="error new-password-error"></p>
        </div>
        <div class="buttons">
            <button id="button" name="submit" class="submit-button" type="submit">Submit</button>
        </div>
    </form>
    </div>
</body>
</html>
    <script type="module" src='{{asset("js/EditUser/main.js")}}'></script>