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

<div class="container">
    <div class="row">
        <div class="col-xl-9 push-xl-3 col-lg-12 push-lg-0 col-md-12 col-sm-12 col-xs-12">

             
            <div class="ui-block responsive-flex">
                <div class="ui-block-title">
                    <div class="h6 title">{{$company->name}} ({{$company->users->count()}}) personas</div>
                    <form class="w-search">
                        <div class="form-group with-button is-empty">
                            <input class="form-control" id="search_person_input" type="text" placeholder="Buscar...">
                            <button type="button" id="search_person">
                                <svg class="olymp-magnifying-glass-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-magnifying-glass-icon"></use></svg>
                            </button>
                            <span class="material-input"></span></div>
                    </form>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg></a>
                </div>
            </div>

            <div class="row" id="company_persons">


                @foreach($company->users as $user)
                @include('company.person')
                @endforeach

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
