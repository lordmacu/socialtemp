@extends('layouts.master')

@section('content-header')

@stop

@section('styles')
   
@stop
@section('headerspace')
<div class="header-spacer"></div>
@stop
@section('content')

 
<!-- ... end Top Header -->
                                    @include('profile.header')

<div class="container">
	<div class="row">

		<!-- Main Content -->
                <div class="col-xl-6 push-xl-3 col-lg-12 push-lg-0 col-md-12 col-sm-12 col-xs-12">
                                    @include('wall.wall')
                         <a id="load-more-button" href="javascript:void(0)" class="btn btn-control btn-more"  ><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg></a>
 
    
                </div>

		<div class="col-xl-3 pull-xl-6 col-lg-6 pull-lg-0 col-md-6 col-sm-12 col-xs-12">
			<div class="ui-block">
				<div class="ui-block-title">
					<h6 class="title">Sobre mi</h6>
				</div>
				<div class="ui-block-content">
					<ul class="widget w-personal-info item-block">
						<li>
							<span class="title">Trabajo en :</span>
							<span class="text"> <a href="{{route('company',$profile->companies->id)}}">{{$profile->companies->name}}</a></span>
						</li>
						<li>
							<span class="title">Dirección :</span>
							<span class="text">{{$profile->street_address}} {{$profile->postal_code}}</span>
						</li>
                                                
						<li>
							<span class="title">Teléfono</span>
                                                        <span class="text"><a href="tel:{{$profile->telephone_number}}">{{$profile->telephone_number}}</a></span>
						</li>
                                                <li>
							<span class="title">Correo Electrónico</span>
                                                        <span class="text"><a href="mailto:{{$profile->email}}">{{$profile->email}}</a></span>
						</li>
					</ul>

				 
				</div>
			</div>

		 
		  
 
		</div>

		<!-- ... end Left Sidebar -->


		<!-- Right Sidebar -->

		<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
			<div class="ui-block">
				<div class="ui-block-title">
					<h6 class="title">{{$profile->companies->name}}</h6>
				</div> 
				<div class="ui-block-content">
                                    <a href="{{route('company',$profile->companies->id)}}"><img width="100%" src="{{asset("/companies/".$profile->companies->logo)}}"/></a>
				</div>
			</div>
<!---
			<div class="ui-block">
				<div class="ui-block-title">
					<h6 class="title">Blogs</h6>
				</div>
				<ul class="widget w-blog-posts">
					<li>
						<article class="hentry post">

							<a href="#" class="h4">My Perfect Vacations in South America and Europe</a>

							<p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.</p>

							<div class="post__date">
								<time class="published" datetime="2017-03-24T18:18">
									7 hours ago
								</time>
							</div>

						</article>
					</li>
					<li>
						<article class="hentry post">

							<a href="#" class="h4">The Big Experience of Travelling Alone</a>

							<p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.</p>

							<div class="post__date">
								<time class="published" datetime="2017-03-24T18:18">
									March 18th, at 6:52pm
								</time>
							</div>

						</article>
					</li>
				</ul>
			</div>

			<div class="ui-block">
				<div class="ui-block-title">
					<h6 class="title">Contactos (86)</h6>
				</div>
				<div class="ui-block-content">
					<ul class="widget w-faved-page js-zoom-gallery">
						<li>
							<a href="#">
								<img src="img/avatar38-sm.jpg" alt="author">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar24-sm.jpg" alt="user">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar36-sm.jpg" alt="author">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar35-sm.jpg" alt="user">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar34-sm.jpg" alt="author">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar33-sm.jpg" alt="author">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar32-sm.jpg" alt="user">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar31-sm.jpg" alt="author">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar30-sm.jpg" alt="author">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar29-sm.jpg" alt="user">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar28-sm.jpg" alt="user">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar27-sm.jpg" alt="user">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar26-sm.jpg" alt="user">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="img/avatar25-sm.jpg" alt="user">
							</a>
						</li>
						<li class="all-users">
							<a href="#">+74</a>
						</li>
					</ul>
				</div>
			</div>

			 
-->
		 
		</div>

		<!-- ... end Right Sidebar -->

	</div>
</div>

@stop

@section('scripts')
    @parent
    <script src="{{asset("js/modules/profile.js")}}"></script>

    <script>
        


        var typePost=2;
        var sourcePost=0;
        var paginateWallProfile="{{route('paginateWallProfile',$profile->id)}}";
 </script>
@stop
