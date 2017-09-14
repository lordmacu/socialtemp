@extends('layouts.master')

@section('content-header')

@stop

@section('styles')

@stop
@section('headerspace')
<div class="header-spacer"></div>
@stop
@section('content')

@include('company.header')

<style>
    .has-post-thumbnail iframe{
        width: 100%;
                height: 350px

    }
        .has-post-thumbnail img{
        width: 100%;
        height: auto
    }
</style>
<div class="container">
    <div class="row">
        <div class="col-xl-9 push-xl-3 col-lg-12 push-lg-0 col-md-12 col-sm-12 col-xs-12">

      
                <div class="ui-block responsive-flex">

                
                <article class="hentry post has-post-thumbnail thumb-full-width">

                    <div class="post__author author vcard inline-items">
                        <img src="{{$blogpost->user->userFields->getThumbnail()}}" alt="author">

                        <div class="author-date">
                            <a class="h6 post__author-name fn" href="{{route("profile",$blogpost->user->userFields->id)}}">{{$blogpost->user->userFields->getCompleteName()}}</a> 
                            <div class="post__date">
                                   <time class="timeago" datetime="{{$blogpost->created_at->format('c')}}">
                                        {{$blogpost->created_at->format('c')}}
                                    </time>
                            </div>
                        </div>
                         @if(Auth::check())
                            @if(Auth::id()==$blogpost->user->id)
                                <div class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
                                        <ul class="more-dropdown">
                                            <li>
                                                    <a href="{{route('blog.editPost',array($blogpost->company->id,$blogpost->id))}}">Editar Post</a>
                                            </li>
                                        </ul>
                                </div>
                            @endif
                        @endif
                    </div>

                    <div class="post-thumb">
                         @if(($blogpost->attachment))
                            <img src="{{asset('posts/images/'.$blogpost->attachment)}}" alt="{{$blogpost->title}}">

                            @elseif(($blogpost->medias->route_name))
                                 <img src="{{asset('media/fullImage/'.$blogpost->medias->route_name)}}" alt="{{$blogpost->title}}">
                            @endif
                         <a href="#" class="h1 post-title">{{$blogpost->title}}</a>
                        <div class="overlay"></div>
                    </div>
                       
                    {!! $blogpost->text !!}
                     
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
                            <a href="#">{{$like->user->userFields->getCompleteName()}}</a> y
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

                    <div class="control-block-button post-control-button">

                        

                        <a href="#comments" class="btn btn-control">
                            <svg class="olymp-comments-post-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-comments-post-icon"></use></svg>
                        </a>
 

                    </div>

                </article>

                 @if($post->commentscount()>4)
                    <div class="more-comments-post" data-source="{{$post->id}}" data-limit="4">
                        <p class="center_vertical">Más comentarios <i class="fa fa-plus" aria-hidden="true"></i></p>
                    </div>
                    @endif
                    <a name="comments" ></a>
                    <ul class="comments-list"  id="source_comment_{{$post->id}}">
                        @foreach($post->commentspartial->reverse() as $comment)
                            @include('wall.comment')
                        @endforeach

                    </ul>

                    <div class="comment_boton" data-source="{{$post->id}}">
                        <p class="center_vertical">Comentar <i class="fa fa-commenting-o" aria-hidden="true"></i></p>
                    </div>
            </div>
             
          

             

        </div>

        <div class="col-xl-3 pull-xl-9 col-lg-12 pull-lg-0 col-md-12 col-sm-12 col-xs-12">
            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">{{$company->name}}</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg></a>
                </div>
                <div class="ui-block-content">
                    <ul class="widget w-personal-info item-block">
                        <li>
                            <span class="text">{{$company->description}}</span>
                        </li>
                        <li>
                            <span class="title">Teléfono:</span>
                            <span class="text">{{$company->phone}}</span>
                        </li>
                        <li>
                            <span class="title">Email:</span>
                            <span class="text">{{$company->email}}</span>
                        </li>
                        <li>
                            <span class="title">Website:</span>
                            <a href="#" class="text">{{$company->website}}</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</div>
@stop

@section('scripts')
@parent
<script src="{{asset("js/modules/company.js")}}"></script>

<script>
var searchUser = "{{route('searchUser')}}"
    var companyId = {{$company-> id}}
var typePost = 3;
var sourcePost = companyId;
</script>
@stop
