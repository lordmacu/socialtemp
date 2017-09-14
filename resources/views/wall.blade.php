@extends('layouts.master')

@section('content-header')

@stop

@section('styles')
   <style>
       
       .content_post img{
         display:block;
    margin:auto;
       }
   </style>
@stop
@section('headerspace')
<div class="header-spacer"></div>
@stop
@section('content')

<div class="container">
    <div class="row">
         <!-- Main Content -->

        <main class="col-xl-6 push-xl-3 col-lg-12 push-lg-0 col-md-12 col-sm-12 col-xs-12">

                            @include('wall.wall')


        </main>

        <!-- ... end Main Content -->


        <!-- Left Sidebar -->

        <aside class="col-xl-3 pull-xl-6 col-lg-6 pull-lg-0 col-md-6 col-sm-12 col-xs-12">
              
             <div class="ui-block">
         
                <div class="widget w-birthday-alert menu-alert">
                    
                    <div class="content">
                        
                        <span>El Menú de hoy es...</span>
                        <a href="javascript:void(0)" onclick="showMenu()" class="h4 title"><i class="fa fa-cutlery"></i> Bondiola de cerdo a la cerveza</a>
                     </div>
                </div>

            </div>
            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Empresas del Grupo</h6>
                 </div>

                <ul class="widget w-friend-pages-added notification-list friend-requests">
@foreach($companies as $company)
                    <li class="inline-items">
                        <div class="author-thumb">
                            <a href="{{route('company',$company->id)}}"><img width="40px" src="{{$company->getThumbnail()}}" alt="author"></a>
                        </div>
                        <div class="notification-event">
                            <a href="{{route('company',$company->id)}}" class="h6 notification-friend">{{$company->name}}</a>
                            <span class="chat-message-item"><a href="mailto:{{$company->email}}">{{$company->email}}</a></span>
                        </div>
                        

                    </li>
@endforeach
                  

                </ul>

            </div>
            
    
        </aside>

        <!-- ... end Left Sidebar -->


        <!-- Right Sidebar -->

        <aside class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">

            <div class="ui-block">
                <div class="widget w-birthday-alert">
                    
                    <div class="content">
                        <div class="author-thumb">
                            <img src="img/avatar48-sm.jpg" alt="author">
                        </div>
                        <span>Hoy es</span>
                        <a href="#" class="h4 title">El cumpleaños de Maria</a>
                        <p>!Dejale un mensaje en su perfil!</p>
                    </div>
                </div>
            </div>


            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Últimos Registrados</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg></a>
                </div>
 

            </div>

            <div class="ui-block">

                <div class="ui-block-title">
                    <h6 class="title">Última actividad</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg></a>
                </div>

                <ul class="widget w-activity-feed notification-list">
                @foreach($postsSidebar as $sidebarFeed)
                    @include('home.sidebarFeed')
                @endforeach
                     

                </ul>
            </div>


            <div class="ui-block">
                <img width="100%" src="data:image/jpeg;base64,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">
             </div>

        </aside>

        <!-- ... end Right Sidebar -->

    </div>
</div>


<div class="modal fade" id="menu-popup" tabindex="-1" role="dialog" aria-labelledby="modal_comment">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="modal_title"> Menú de la semana</h4>
      </div>
      <div class="modal-body">
          
               <div class="ui-block">
			

			
						<div class="day-wethear-item menu-item-launch" >
							<div class="title">Lunes</div>
                                                        <div class="menu-dia">
                                                            <i class="fa fa-lemon-o"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-light">
                                                            <i class="fa fa-cutlery"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
						 
						</div>
                                                <div class="day-wethear-item menu-item-launch"  >
							<div class="title">Martes</div>
                                                        <div class="menu-dia">
                                                            <i class="fa fa-lemon-o"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-light">
                                                            <i class="fa fa-cutlery"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
						 
						</div>
                                            
                                                <div class="day-wethear-item menu-item-launch" >
							<div class="title">Miercoles</div>
                                                        <div class="menu-dia">
                                                            <i class="fa fa-lemon-o"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-light">
                                                            <i class="fa fa-cutlery"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
						 
						</div>
                                            
                                                <div class="day-wethear-item menu-item-launch active"   >
							<div class="title">Jueves</div>
                                                            <i class="fa fa-lemon-o"></i>
                                                        <div class="menu-dia">
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-light">
                                                            <i class="fa fa-cutlery"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
						 
						</div>

                                                <div class="day-wethear-item menu-item-launch "   >
							<div class="title">Viernes</div>
                                                        <div class="menu-dia">
                                                            <i class="fa fa-lemon-o"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li> 
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="menu-light">
                                                            <i class="fa fa-cutlery"></i>
                                                            <p>Arroz yamaní</p>
                                                            <ul>
                                                                <li>
                                                                    Vegetales thai
                                                                </li>
                                                                <li>
                                                                    Carne
                                                                </li>
                                                            </ul>
                                                        </div>
						 
						</div>
					
 
				<!-- If we need pagination -->
 			
      </div>
      
    </div>
  </div>
</div>
         
         
         </div>

@stop

@section('scripts')
    @parent
    <script>
        
        var typePost=1;
        var sourcePost=0;
        var homepagination="{{route('paginateWallHome')}}";
        
        function showMenu(){
            $("#menu-popup").modal("show")
        }
    </script>
    <script src="{{asset("js/modules/home.js")}}"></script>

@stop
