@extends('layouts.master')

@section('content-header')

@stop

@section('styles')

@stop
@section('headerspace')
<div class="header-spacer"></div>
@stop
@section('content')

<style>
    .search-box .form-group{
        margin: 10px
    }
</style>
<div class="container">
    <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="ui-block responsive-flex1200">
                <div class="ui-block-title">
                    <a href="#"  class="btn btn-primary btn-md-2"><i class="fa fa-user" aria-hidden="true"></i> Personas (300)<div class="ripple-container"></div></a>
                    <a href="#"  class="btn btn-primary btn-md-2"><i class="fa fa-users" aria-hidden="true"></i> Proyectos (100)<div class="ripple-container"></div></a>
                    <a href="#"  class="btn btn-primary btn-md-2"><i class="fa fa-industry" aria-hidden="true"></i> Empresas (50)<div class="ripple-container"></div></a>
                    <div class="w-select">
                        <fieldset class="form-group">
                            <select class="selectpicker form-control">
                                <option value="">Ordenar por</option>
                                <option value="NU">(Relevancia)</option>
                                <option value="NU">(Nombre)</option>
                            </select>
                        </fieldset>
                    </div>
                    <form class="w-search">
                        <div class="form-group with-button is-empty">
                            <input class="form-control" type="text" placeholder="Ingresar texto de búsqueda">
                            <button>
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <span class="material-input"></span></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3">



            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Género</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
                </div>

                <ul class="widget w-friend-pages-added notification-list friend-requests">
                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">Masculino (20)</a>
                    </li>

                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">Femenino (10)</a>
                    </li>
                </ul>

            </div>
            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Formación académica</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
                </div>

                <ul class="widget w-friend-pages-added notification-list friend-requests">

                    <li>
                        <div class="radio">
                            <label>
                                <input type="radio" name="optionsRadios" checked="checked">
                                Primera
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="radio">
                            <label>
                                <input type="radio" name="optionsRadios">
                                sEGUND
                            </label>
                        </div>
                    </li>


                </ul>

            </div>
            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Formación académica</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
                </div>

                <ul class="widget w-friend-pages-added notification-list friend-requests">
                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">Contabilidad (10)</a>
                    </li>

                    <li class="inline-items">

                        <a href="#" class="h6 notification-friend">Sistemas (10)</a>

                    </li>

                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">Administración de empresas (10)</a>
                    </li>

                </ul>

            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Empresa</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
                </div>

                <ul class="widget w-friend-pages-added notification-list friend-requests">
                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">Romikin (20)</a>

                    </li>

                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">Insud (20)</a>

                    </li>
                </ul>

            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Área</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
                </div>

                <ul class="widget w-friend-pages-added notification-list friend-requests">
                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">primera (20)</a>

                    </li>

                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">Segund (20)</a>

                    </li>
                </ul>

            </div>
            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Cargo</h6>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
                </div>

                <ul class="widget w-friend-pages-added notification-list friend-requests">
                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">primera (20)</a>

                    </li>

                    <li class="inline-items">
                        <a href="#" class="h6 notification-friend">Segund (20)</a>

                    </li>
                </ul>

            </div>




        </div>
        <div class="col-lg-9">
            <div class="row">


                @for($i=0;  $i<9; $i++)
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div class="ui-block">
                        <div class="friend-item">
                            <div class="friend-header-thumb">
                                <img src="http://social.com/companies/logoinsud.png" alt="friend">
                            </div>

                            <div class="friend-item-content">


                                <div class="friend-avatar">
                                    <div class="author-thumb">
                                        <a href="http://social.com/profile/178"><img width="80px" height="75px" src="http://www.imss.gob.mx/sites/all/statics/landing/landin.png" alt="author"></a>
                                    </div>
                                    <div class="author-content">
                                        <a href="http://social.com/profile/178" class="h5 author-name">Cristian Garcia Ramirez</a>
                                        <div class="country">Programador Web</div>
                                    </div>
                                </div>

                                <div class="swiper-container swiper-swiper-unique-id-15 initialized swiper-container-horizontal" id="swiper-unique-id-15">
                                    <div class="swiper-wrappers">
                                        <div class="swiper-slides">

                                            <div class="friend-count" data-swiper-parallax="-500">

                                                <p class="friend-about" data-swiper-parallax="-500">
                                                    Hola, soy Cristian Garcia Ramirez  y me desempeño como Programador Web  me podés encontrar en el teléfono <a href="tel:1285">1285</a>  o en mi email <a href="mailto:cgramirez@grupoinsud.com">cgramirez@grupoinsud.com</a>                                                         </p>
                                            </div>

                                        </div>


                                    </div>

                                    <div class="swiper-pagination pagination-swiper-unique-id-15 swiper-pagination-clickable swiper-pagination-bullets"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endfor  
            </div>
        </div>
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-12">
                    <ul class="pagination">

                        <li><a href="http://social.com/search?page=1" rel="prev">«</a></li>





                        <li><a href="http://social.com/search?page=1">1</a></li>
                        <li class="active"><span>2</span></li>
                        <li><a href="http://social.com/search?page=3">3</a></li>
                        <li><a href="http://social.com/search?page=4">4<div class="ripple-container"></div></a></li>
                        <li><a href="http://social.com/search?page=5">5</a></li>
                        <li><a href="http://social.com/search?page=6">6</a></li>
                        <li><a href="http://social.com/search?page=7">7</a></li>
                        <li><a href="http://social.com/search?page=8">8</a></li>
                        <li><a href="http://social.com/search?page=9">9</a></li>


                        <li><a href="http://social.com/search?page=3" rel="next">»</a></li>
                    </ul>

                </div>

            </div>
        </div>
    </div>
</div>
@stop

@section('scripts')
@parent

@stop
