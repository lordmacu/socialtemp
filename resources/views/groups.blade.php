@extends('layouts.master')

@section('content-header')

@stop

@section('styles')
   
@stop


@section('headerspace')
<div class="header-spacer header-spacer-small"></div>
@stop
@section('content')



<div class="main-header">
	<div class="content-bg-wrap">
		<div class="content-bg bg-group"></div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
				<div class="main-header-content">
					<h1>Manage your Friend Groups</h1>
					<p>Welcome to your friends groups! Do you wanna know what your close friends have been up to? Groups
						will let you easily manage your friends and put the into categories so when you enter you’ll only
						see a newsfeed of those friends that you placed inside the group. Just click on the plus button below and start now!
					</p>
				</div>
			</div>
		</div>
	</div>

	<img class="img-bottom" src="img/group-bottom.png" alt="friends">
</div>

<!-- Main Content Groups -->

<div class="container">
	<div class="row">
		<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div class="friend-item friend-groups create-group" data-mh="friend-groups-item">

				<a href="#" class="  full-block" data-toggle="modal" data-target="#create-friend-group-1"></a>
				<div class="content">

					<a href="#" class="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-1">
						<svg class="olymp-plus-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-plus-icon"></use></svg>
					</a>

					<div class="author-content">
						<a href="#" class="h5 author-name">My Family</a>
						<div class="country">6 Friends in the Group</div>
					</div>

				</div>

			</div>

		</div>

		<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div class="ui-block" data-mh="friend-groups-item">
				<div class="friend-item friend-groups">

					<div class="friend-item-content">

						<div class="more">
							<svg class="olymp-three-dots-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
							<ul class="more-dropdown">
								<li>
									<a href="#">Report Profile</a>
								</li>
								<li>
									<a href="#">Block Profile</a>
								</li>
								<li>
									<a href="#">Turn Off Notifications</a>
								</li>
							</ul>
						</div>
						<div class="friend-avatar">
							<div class="author-thumb">
								<img src="img/logo.png" alt="Olympus">
							</div>
							<div class="author-content">
								<a href="#" class="h5 author-name">My Family</a>
								<div class="country">6 Friends in the Group</div>
							</div>
						</div>

						<ul class="friends-harmonic">
							<li>
								<a href="#">
									<img src="img/friend-harmonic5.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic10.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic7.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic8.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic2.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/avatar30-sm.jpg" alt="author">
								</a>
							</li>
						</ul>


						<div class="control-block-button">
							<a href="#" class="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-add-friends">
								<svg class="olymp-happy-faces-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-happy-faces-icon"></use></svg>
							</a>

							<a href="#" class="btn btn-control btn-grey-lighter">
								<svg class="olymp-settings-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-settings-icon"></use></svg>
							</a>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div class="ui-block" data-mh="friend-groups-item">
				<div class="friend-item friend-groups">

					<div class="friend-item-content">

						<div class="more">
							<svg class="olymp-three-dots-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
							<ul class="more-dropdown">
								<li>
									<a href="#">Report Profile</a>
								</li>
								<li>
									<a href="#">Block Profile</a>
								</li>
								<li>
									<a href="#">Turn Off Notifications</a>
								</li>
							</ul>
						</div>
						<div class="friend-avatar">
							<div class="author-thumb">
								<img src="img/friend-group1.png" alt="photo">
							</div>
							<div class="author-content">
								<a href="#" class="h5 author-name">Daydreams Coworkers</a>
								<div class="country">24 Friends in the Group</div>
							</div>
						</div>

						<ul class="friends-harmonic">
							<li>
								<a href="#">
									<img src="img/friend-harmonic1.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic2.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic3.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic4.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic5.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic6.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic7.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic8.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic9.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#" class="all-users bg-blue">+15</a>
							</li>
						</ul>

						<div class="control-block-button">
							<a href="#" class="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-add-friends">
								<svg class="olymp-happy-faces-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-happy-faces-icon"></use></svg>
							</a>

							<a href="#" class="btn btn-control btn-grey-lighter">
								<svg class="olymp-settings-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-settings-icon"></use></svg>
							</a>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div class="ui-block" data-mh="friend-groups-item">
				<div class="friend-item friend-groups">

					<div class="friend-item-content">

						<div class="more">
							<svg class="olymp-three-dots-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
							<ul class="more-dropdown">
								<li>
									<a href="#">Report Profile</a>
								</li>
								<li>
									<a href="#">Block Profile</a>
								</li>
								<li>
									<a href="#">Turn Off Notifications</a>
								</li>
							</ul>
						</div>
						<div class="friend-avatar">
							<div class="author-thumb">
								<img src="img/friend-group2.jpg" alt="photo">
							</div>
							<div class="author-content">
								<a href="#" class="h5 author-name">Close Friends</a>
								<div class="country">4 Friends in the Group</div>
							</div>
						</div>

						<ul class="friends-harmonic">
							<li>
								<a href="#">
									<img src="img/friend-harmonic5.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic10.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic7.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic8.jpg" alt="friend">
								</a>
							</li>
							<li>
						</ul>


							<div class="control-block-button">
								<a href="#" class="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-add-friends">
									<svg class="olymp-happy-faces-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-happy-faces-icon"></use></svg>
								</a>

								<a href="#" class="btn btn-control btn-grey-lighter">
									<svg class="olymp-settings-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-settings-icon"></use></svg>
								</a>

							</div>


					</div>
				</div>
			</div>
		</div>

		<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div class="ui-block" data-mh="friend-groups-item">
				<div class="friend-item friend-groups">

					<div class="friend-item-content">

						<div class="more">
							<svg class="olymp-three-dots-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
							<ul class="more-dropdown">
								<li>
									<a href="#">Report Profile</a>
								</li>
								<li>
									<a href="#">Block Profile</a>
								</li>
								<li>
									<a href="#">Turn Off Notifications</a>
								</li>
							</ul>
						</div>
						<div class="friend-avatar">
							<div class="author-thumb">
								<img src="img/friend-group3.jpg" alt="photo">
							</div>
							<div class="author-content">
								<a href="#" class="h5 author-name">Freelance Clients</a>
								<div class="country">15 Friends in the Group</div>
							</div>
						</div>

						<ul class="friends-harmonic">
							<li>
								<a href="#">
									<img src="img/friend-harmonic1.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic2.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic3.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic4.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic5.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic6.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic7.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic8.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic9.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#" class="all-users bg-blue">+6</a>
							</li>
						</ul>

						<div class="control-block-button">
							<a href="#" class="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-add-friends">
								<svg class="olymp-happy-faces-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-happy-faces-icon"></use></svg>
							</a>

							<a href="#" class="btn btn-control btn-grey-lighter">
								<svg class="olymp-settings-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-settings-icon"></use></svg>
							</a>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div class="ui-block" data-mh="friend-groups-item">
				<div class="friend-item friend-groups">

					<div class="friend-item-content">

						<div class="more">
							<svg class="olymp-three-dots-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
							<ul class="more-dropdown">
								<li>
									<a href="#">Report Profile</a>
								</li>
								<li>
									<a href="#">Block Profile</a>
								</li>
								<li>
									<a href="#">Turn Off Notifications</a>
								</li>
							</ul>
						</div>
						<div class="friend-avatar">
							<div class="author-thumb">
								<img src="img/friend-group4.jpg" alt="photo">
							</div>
							<div class="author-content">
								<a href="#" class="h5 author-name">Running Buddies</a>
								<div class="country">7 Friends in the Group</div>
							</div>
						</div>

						<ul class="friends-harmonic">
							<li>
								<a href="#">
									<img src="img/friend-harmonic5.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic10.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic7.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic8.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic2.jpg" alt="friend">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/avatar30-sm.jpg" alt="author">
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic7.jpg" alt="friend">
								</a>
							</li>
						</ul>

						<div class="control-block-button">
							<a href="#" class="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-add-friends">
								<svg class="olymp-happy-faces-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-happy-faces-icon"></use></svg>
							</a>

							<a href="#" class="btn btn-control btn-grey-lighter">
								<svg class="olymp-settings-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-settings-icon"></use></svg>
							</a>

						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>

@stop

@section('scripts')
    @parent
    
@stop


