 
<div class="pin">
        <div class="ui-block">
                <article class="hentry post has-post-thumbnail thumb-full-width">

                        <div class="post__author author vcard inline-items">
                            <img width="50px" src="{{$post->user->UserFields->getThumbnail()}}" alt="author">

                                <div class="author-date">
                                        <a class="h6 post__author-name fn" href="{{route('profile',$post->user->id)}}">{{$post->user->UserFields->getCompleteName()}}</a> escribió una <a href="{{route('blog.blogpost',array($company->id,$post->id))}}">noticia</a>
                                        <div class="post__date">
                                                <time class="timeago" datetime="{{$post->created_at->format('c')}}">
                                                    {{$post->created_at->format('c')}}
                                                </time>
                                        </div>
                                </div>
                            @if(Auth::check())
                                @if(Auth::id()==$post->user->id)
                                <div class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
                                        <ul class="more-dropdown">
                                            <li>
                                                    <a href="{{route('blog.editPost',array($company->id,$post->id))}}">Editar Post</a>
                                            </li>
                                        </ul>
                                </div>
                                @endif
                            @endif

                        </div>

                        <div class="post-thumb">
                            @if($post->attachment)
                            <a href="{{route('blog.blogpost',array($company->id,$post->id))}}">
                                <img src="{{asset('posts/images/'.$post->attachment)}}" alt="{{$post->title}}">
                            </a>
                            @elseif(isset($post->medias->route_name))
                            <a href="{{route('blog.blogpost',array($company->id,$post->id))}}">
                                <img src="{{asset('media/fullImage/'.$post->medias->route_name)}}" alt="{{$post->title}}">
                            </a>                            
                           @endif
                        </div>
                         <br/>
                        <h3><a href="{{route('blog.blogpost',array($company->id,$post->id))}}">{{$post->title}}</a></h3>
                        <div class="container-text-blog"> {!! $post->description !!} </div>


                        <a href="{{route('blog.blogpost',array($company->id,$post->id))}}"   class="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Leer mas</a>




                </article>
        </div>
</div>