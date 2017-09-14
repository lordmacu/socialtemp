<div class="ui-block">
    <article class="hentry post">
        <div class="post__author author vcard inline-items">


            <img src="{{$post->user->userFields->getThumbnail()}}" alt="author">

            <div class="author-date">
                <a class="h6 post__author-name fn" href="{{route('profile',$post->user->userFields->id)}}">{{$post->user->userFields->getCompleteName()}}</a>
                <div class="post__date">
                    <time class="timeago" datetime="{{$post->created_at->format('c')}}">
                        {{$post->created_at->format('c')}}
                    </time>
                </div>
            </div>
            @if($post->user->id == Auth::id())

            <div class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
                <ul class="more-dropdown">
                    <li>
                        <a href="#">Edit Post</a>
                    </li>
                    <li>
                        <a href="#">Delete Post</a>
                    </li>
                </ul>
            </div>
            @endif

        </div>
        <p>
            {{$post->text}}                                                       
        </p>

        <div class="post-additional-info inline-items">

            <a href="javascript:void(0)" class="post-add-icon inline-items like-button" data-type="1" data-source="{{$post->id}}">
                <svg class="olymp-heart-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-heart-icon"></use></svg>
                <span>{{$post->likescount()}}</span>
            </a>

            <ul class="friends-harmonic likes-persons">
                @foreach($post->likes as $like)
                @include('wall.likes')
                @endforeach
            </ul>
            @if($post->likescount()!=0)
            <div class="names-people-likes">
                <a href="{{route('profile',$like->user->userFields->id)}}">{{$like->user->userFields->getCompleteName()}}</a> y
                <br><span>{{$post->likescount()}}</span> les gusta este post
            </div>
            @endif


            <div class="comments-shared">
                <a href="#" class="post-add-icon inline-items">
                    <svg class="olymp-speech-balloon-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-speech-balloon-icon"></use></svg>
                    <span>{{$post->commentscount()}}</span>
                </a>


            </div>


        </div>



    </article>
    @if($post->commentscount()>4)
    <div class="more-comments-post" data-source="{{$post->id}}" data-limit="4">
        <p class="center_vertical">Más comentarios <i class="fa fa-plus" aria-hidden="true"></i></p>
    </div>
    @endif
    <ul class="comments-list" id="source_comment_{{$post->id}}">
        @foreach($post->commentspartial->reverse() as $comment)
            @include('wall.comment')
        @endforeach

    </ul>

    <div class="comment_boton" data-source="{{$post->id}}">
        <p class="center_vertical">Comentar <i class="fa fa-commenting-o" aria-hidden="true"></i></p>
    </div>
</div>