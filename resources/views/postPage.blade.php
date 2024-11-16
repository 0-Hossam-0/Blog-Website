@extends('postLayout')

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
@section('post')
@if($userData != 'Guest')
@if($userData->id == $post->user->user_id)
<div class="right-side">
    <button id="button-{{ $post->post_id }}" class="dots-button">
            <span id="{{ $post->post_id }}" class="dots-icon material-symbols-outlined">more_horiz</span>
        </button>
        <div class="dropdown-content" id="dropdown-{{ $post->post_id }}">
            <div class="edit-option">
<a class="href" href="edit/{{$post->post_id }}">
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
@endsection

@section('comments')
@foreach($comments as $comment)
<div class="comment">
    <img class="profile-icon" src="/Images/profile.png">
    <div class="user">
        <p class="author">{{$comment->user->name}}</p>
        <p class="comment-text">{{$comment->body}}</p>
    </div>
</div>
@endforeach
@endsection