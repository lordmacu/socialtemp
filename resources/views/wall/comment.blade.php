<li>
    <div class="post__author author vcard inline-items">
        <a href="{{route('profile',$comment->user->userFields->id)}}"><img src="{{$comment->user->userFields->getThumbnail()}}" alt="author"></a>

            <div class="author-date">
                    <a class="h6 post__author-name fn" href="{{route('profile',$comment->user->userFields->id)}}">{{$comment->user->userFields->getCompleteName()}}</a>
                    <div class="post__date">
                            <time class="published" datetime="{{$comment->created_at->format('Y-m-d H:i:s')}}">
                                    {{$comment->created_at->format('Y-m-d H:i:s')}}
                            </time>
                    </div>
            </div>

    @if($comment->user->id == Auth::id())

        <div class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
                <ul class="more-dropdown edit_comment">
                        <li>
                                <a href="#">Editar Comentario</a>
                        </li>
                        <li>
                                <a href="#">Borrar Comentario</a>
                        </li>
                </ul>
        </div>
    @endif
    </div>

    <p>{{$comment->text}}</p>

    <a href="javascript:void(0)" class="post-add-icon inline-items like-button" data-type="2" data-source="{{$comment->id}}">
            <svg class="olymp-heart-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-heart-icon"></use></svg>
            <span>{{$comment->likescount()}}</span>
    </a>
</li>