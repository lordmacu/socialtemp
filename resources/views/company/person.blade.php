
<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="ui-block">
                <div class="friend-item">
                        <div class="friend-header-thumb">
                            @if($user->background)
                                <img src="{{$user->background}}" alt="friend">
                                @else
                                <img src="{{asset("companies/".$user->companies->logo)}}" alt="friend">
                            @endif
                        </div>

                        <div class="friend-item-content">

                                 
                                <div class="friend-avatar">
                                        <div class="author-thumb">
                                            <a href="{{route('profile',$user->id)}}"><img width="80px" height="75px" src="{{$user->getThumbnail()}}" alt="author"></a>
                                        </div>
                                        <div class="author-content">
                                                <a href="{{route('profile',$user->id)}}" class="h5 author-name">{{$user->getCompleteName()}}</a>
                                                @if($user->titles)
                                                <div class="country">{{$user->titles->name}}</div>
                                                @endif
                                        </div>
                                </div>

                                <div class="swiper-container">
                                        <div class="swiper-wrappers">
                                                <div class="swiper-slides">

                                                        <div class="friend-count" data-swiper-parallax="-500">

                                                               @if($user->description)
                                                        <p class="friend-about" data-swiper-parallax="-500">
                                                            {!! $user->description !!}
                                                        </p>
                                                        @else
                                                         <p class="friend-about" data-swiper-parallax="-500">
                                                             Hola, soy {{$user->getCompleteName()}} @if($user->title) y me desempeño como {{$user->titles->name}} @endif me podés encontrar en el teléfono <a href="tel:{{$user->telephone_number}}">{{$user->telephone_number}}</a> @if($user->email) o en mi email <a href="mailto:{{$user->email}}">{{$user->email}}</a> @endif
                                                        </p>
                                                    @endif
                                                        </div>
                                                        
                                                </div>

                                                
                                        </div>

                                        <div class="swiper-pagination"></div>
                                </div>
                        </div>
                </div>
        </div>
</div>