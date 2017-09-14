<script>
var user_id={{Auth::id()}};
</script>
<!-- Header -->

<header class="header" id="site-header">

	<div class="page-title" >
            <h6><a id="link-home" href="{{route('home')}}">Grupo Insud News</a></h6>
	</div> 

	<div class="header-content-wrapper">
                <form class="search-bar w-search notification-list friend-requests" action="{{route('search')}}" method="get">
			<div class="form-group with-button">
                            <input class="form-control" name="q" placeholder="Busca por el nombre o el apellido" type="text">
				<button>
					<svg class="olymp-magnifying-glass-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-magnifying-glass-icon"></use></svg>
				</button>
			</div>
		</form>


		<div class="control-block">

			 

			<div class="author-page author vcard inline-items more">
				<div class="author-thumb">
                                    <img alt="author" width="40px" src="{{Auth::user()->userFields->getThumbnail()}}" class="avatar">
					<span class="icon-status online"></span>
					<div class="more-dropdown more-with-triangle">
						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<div class="ui-block-title ui-block-title-small">
								<h6 class="title">Tu cuenta</h6>
							</div>

							<ul class="account-settings">
								<li>
									<a href="{{route('editProfile',Auth::user()->userFields->id)}}">

										<svg class="olymp-menu-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-menu-icon"></use></svg>

										<span>Configuración del perfil</span>
									</a>
								</li>
								 
								<li>
									<a href="{{route('logout')}}">
										<svg class="olymp-logout-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-logout-icon"></use></svg>

										<span>Salir</span>
									</a>
								</li>
							</ul>
  
 
 
						</div>

					</div>
				</div>
				<a href="{{route('profile',Auth::user()->userFields->id)}}" class="author-name fn">
					<div class="author-title">
						{{Auth::user()->userFields->first_name}} {{Auth::user()->userFields->last_name}} <svg class="olymp-dropdown-arrow-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-dropdown-arrow-icon"></use></svg>
					</div>
					<span class="author-subtitle">{{Auth::user()->userFields->titles->name}}</span>
				</a>
			</div>

		</div>
	</div>

</header>

<!-- ... end Header -->