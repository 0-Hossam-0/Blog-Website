<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Search</title>
    <link rel="stylesheet" href="{{asset('CSS/Home/style.css')}}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="header">
        <div class="menu">
            <button><span onclick="openMenu()" class="menu-icon material-symbols-outlined">menu</span></button>
        </div>
        <div class="search">
            <input type="text" class="search-bar" style='font-size:18px;' placeholder="Search for Post Title here....">
            <button><span class="search-icon material-symbols-outlined">search</span></button>
        </div>
        <div class="profile">
            <img class="profile-icon" src="/Images/profile.png">
            <p class="username">@yield('username')</p>
        </div>
        <div class="buttons">
            @if($userData != 'Guest')
            <a href="/update/{{$userData->id}}"><button><span class="settings-icon material-symbols-outlined">person</span></button></a>
            @endif
            <a href='/'><i style="color:rgb(2, 161, 247);background-color:rgb(184, 187, 191);" class="dark-mode fa-solid fa-house"></i></a href='/'>
            @yield('log-header')
        </div>
    </div>
    <div class="side-menu">
        <div class="profile">
                <img class="profile-icon" src="/Images/profile.png">
                <p class="username">@yield('username')</p>
        </div>
        <div class="explore">
            <p class="explore-text">Explore</p>
            <div class="explore-section">
                <a href='/' class="home-button"><span style='color:rgb(2, 161, 247);' class="home-icon fa-solid fa-house"></span></a>
                <p class="home-text">Home</p>
            </div>
        </div>
        <div class="settings">
                <p class="settings-section">Settings</p>
                <div class="settings-option">
                    <a href="/update/{{$userData->id}}"><button><span class="settings-icon material-symbols-outlined">person</span></button></a>
                    <a href="/update/{{$userData->id}}" class="settings-text">Profile</a>
                </div>
                <div class="logout-option">
                    @yield('log')
                </div>
        </div>
    </div>
    <div class="posts-area">
        @yield('post')
    </div>
    <script src="{{asset('js/Home/home.js')}}"></script>
</body>
</html>