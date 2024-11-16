@extends('editPostLayout')

@if ($userData != 'Guest')

    @section('username', $userData->name)

    @section('log')
        <a href="/logout">
            <button><span class="logout-icon material-symbols-outlined">logout</span></button>
        </a>
        <a style="color:red;" href="/logout" class="logout-text">Logout</a>
    @endsection
    @section('log-header')
        <a href="/logout">
            <button><span class="logout-icon material-symbols-outlined">logout</span></button>
        </a>
    @endsection

@else
    @section('log')
        <a href="/login">
            <button>
                <span style='background-color:rgb(9, 154, 9);' class="logout-icon material-symbols-outlined">login</span>
            </button>
        </a>
        <a style='color:green;' href="/login" class="logout-text">Login</a>
    @endsection
    @section('log-header')
        <a href="/login">
            <button>
                <span style='background-color:rgb(9, 154, 9);' class="logout-icon material-symbols-outlined">login</span>
            </button>
        </a>
    @endsection

    @section('username', 'Guest')
@endif

