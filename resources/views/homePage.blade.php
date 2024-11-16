@extends('homeLayout')


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
        <a href="/register">
            <button>
                <span style='background-color:rgb(9, 154, 9);' class="logout-icon material-symbols-outlined">login</span>
            </button>
        </a>
        <a style='color:green;' href="/login" class="logout-text">Login</a>
    @endsection
    @section('log-header')
        <a href="/register">
            <button>
                <span style='background-color:rgb(9, 154, 9);' class="logout-icon material-symbols-outlined">login</span>
            </button>
        </a>
    @endsection

    @section('username', 'Guest')
@endif


@section('post')
    @foreach ($posts as $post)
        <div class="hidden">
            <div class="post-body">
        <div class="post-header">
            <div class="left-side">
                <img class="profile-icon" src="/Images/profile.png">
                <p class="author">{{ $post->user->name }}</p>
            </div>
            @if($userData != 'Guest')
                @if($userData->id == $post->user->user_id)
                <div class="right-side">
                    <button id="button-{{ $post->post_id }}" class="dots-button" >
            <span id="{{ $post->post_id }}" class="dots-icon material-symbols-outlined">more_horiz</span>
        </button>
        <div class="dropdown-content" id="dropdown-{{ $post->post_id }}">
            <div class="edit-option">
                    <a class="href" href="post/edit/{{ $post->post_id }}">
                    <button class="edit-button">
        <span class="edit-icon material-symbols-outlined">edit</span>Edit
                    </button>
                </div>
            </a>
            <div class="delete-option">
                <a class="href" href="{{url('api/delete-post/' . $post->post_id )}}">
                    <button class="delete-button">
        <span class="delete-icon material-symbols-outlined">delete</span>Delete
                    </button>
                </a>
            </div>
        </div>
                    </div>
                    @endif
                @endif
        </div>
        <div class="div-title">
            <h1 style="width:500px;" class="title">{{ $post->title }}</h1>
        </div>
        <div class="div-body">
            <p class="body">{{ substr($post->body, 0, 500). '....' }}</p>
        </div>
        @if(strlen($post->body) > 500)
        <div class="show-more">
            <a href="/post/{{$post->post_id}}"><button class="show-button">Show More</button></a>
        </div>
        @endif
        <div class="footer">
            <button>
                <a href="./post/{{$post->post_id}}"><span class="comments-icon material-symbols-outlined">comment</span></a>
            </button>
            <a href="./post/{{$post->post_id}}" class="comments-text">Comments</a>
        </div>
            </div>
        </div>
    @endforeach
@endsection