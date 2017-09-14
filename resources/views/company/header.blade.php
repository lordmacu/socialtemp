<div class="container">
    <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="ui-block company-profile">
                <div class="top-header top-header-favorit">
                    
                    
                    <div class="profile-company-section ">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="company-thumb">
                                    <img width="120px" height="120px" src="{{asset('companies/'.$company->logo)}}" alt="author">
                                </div>
                            </div>
                            <div class="col-md-9">
                                <a href="#" class="h3 company-name">{{$company->name}}</a>
                                <div class="country">{{$company->address}}</div>
                            </div>
                  
                        </div>
                        <div class="row">
                            <div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-12 offset-md-0">
                                  <ul class="profile-menu profile-company">
                                    <li>
                                        <a href="{{route('wallcompany',$company->id)}}" @if(Route::getCurrentRoute()->getName()=="wallcompany") class="active" @endif >Muro</a>
                                    </li>
                                    <li>
                                        <a href="{{route('company',$company->id)}}" @if(Route::getCurrentRoute()->getName()=="company") class="active" @endif  >Personal</a>
                                    </li>

                                    <li>
                                        <a href="{{route('blog.blogcompany',$company->id)}}" @if(Route::getCurrentRoute()->getName()=="blog.blogcompany"  || Route::getCurrentRoute()->getName()=="blog.editPost"  || Route::getCurrentRoute()->getName()=="blog.createPost" ) class="active" @endif>Blog</a>
                                    </li>

                                    <li>
                                        <a href="{{route('innovacion',$company->id)}}" @if(Route::getCurrentRoute()->getName()=="blog.blogcompany"  || Route::getCurrentRoute()->getName()=="blog.editPost"  || Route::getCurrentRoute()->getName()=="blog.createPost" ) class="active" @endif>Proyectos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="control-block-button control-block-company">

                            @if($company->email)
                                <a href="mailto:{{$company->email}}" class="btn btn-control bg-purple">
                                    <svg class="olymp-chat---messages-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-chat---messages-icon"></use></svg>
                                </a>
                            @endif
                            
                                <a href="{{route('blog.createPost',$company->id)}}" class="btn btn-control bg-orange">
                                    <i class="fa fa-pencil"></i>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>