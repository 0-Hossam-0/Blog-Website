<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Update</title>
    <link rel="stylesheet" href="{{asset('CSS/Update_User/style.css')}}"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  </head>
  <body>
      <div class="window">
          <header class="header">Select Option</header>
          <div class="buttons">
              <a href="edit-account/{{$userData->id}}"><button class="edit-button">Edit Profile</button></a>
              <a href="delete-account/{{$userData->id}}"><button class="delete-button">Delete Profile</button></a>
            </div>
</div>
</body>
</html>
    <script type="module" src='{{asset("js/Update_User/main.js")}}'></script>