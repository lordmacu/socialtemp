 
    <div class="ui-block">
        <div class="news-feed-form">
            <!-- Nav tabs -->


            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
                    <form>
                        <div class="author-thumb">
                            <img width="35px" src="{{Auth::user()->UserFields->getThumbnail()}}" alt="author">
                        </div>
                        <div class="form-group with-icon label-floating is-empty">
                            <label class="control-label">Comparte lo que piensas aquí ...</label>
                            <textarea class="form-control" id="post_text_area_principal" placeholder=""></textarea>
                            <span class="material-input"></span></div>
                        <div class="add-options-message">
                            <a href="#" class="options-message" data-toggle="modal" data-target="#update-header-photo" data-placement="top" title="" data-original-title="ADD PHOTOS">
                                <svg class="olymp-camera-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-camera-icon"></use></svg>
                            </a>
                            <a href="#" class="options-message" data-toggle="tooltip" data-placement="top" title="" data-original-title="TAG YOUR FRIENDS">
                                <svg class="olymp-computer-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-computer-icon"></use></svg>
                            </a>
                            <button type="button" class="btn btn-primary btn-md-2" id="publish_button">Publicar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div id="newsfeed-items-grid">
        @foreach($posts as $post)
        
             @if($post->type==1)
                 @include('wall.simplepost')
            @elseif($post->type==2)
                 @include('wall.simpleblogpost')            
            @endif
        @endforeach
    </div>

    @if(count($posts)>10)
        <a id="load-more-button" href="javascript:void(0)" class="btn btn-control btn-more"  ><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg></a>
    @endif

    
    
     