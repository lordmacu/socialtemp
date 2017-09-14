<div class="container">
    <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="ui-block company-profile">
                <div class="top-header top-header-favorit">
                    
                    
                    <div class="profile-company-section ">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="company-thumb">
                                    <a href="{{route('profile',$profile->id)}}"><img width="120px" height="120px" src="{{$profile->getThumbnail()}}" alt="author"></a> 
                                </div>
                            </div>
                            <div class="col-md-9">
                                   <a href="{{route('profile',$profile->id)}}" class="h3 company-name">{{$profile->getCompleteName()}}</a>
                               
                            </div>
                  
                        </div>
 

                        <div class="control-block-button control-block-company">

                            <a href="{{route('editProfile',$profile->id)}}" class="btn btn-control bg-blue">
								<svg class="olymp-happy-face-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-happy-face-icon"></use></svg>
							</a>

							<a href="#" class="btn btn-control bg-purple">
								<svg class="olymp-chat---messages-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-chat---messages-icon"></use></svg>
							</a>
							<a href="{{route('editProfile',$profile->id)}}" class="btn btn-control bg-primary">
								<svg class="olymp-settings-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-settings-icon"></use></svg>
							</a>
     

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>