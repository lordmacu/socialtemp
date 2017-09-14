@extends('layouts.master')

@section('content-header')

@stop

@section('styles')

@stop
@section('headerspace')
<div class="header-spacer"></div>
@stop
@section('content')


<div class="container">
    
    <div class="ui-block responsive-flex">
                <div class="ui-block-title">
                    <div class="h6 title">Resultado {{$users->count()}} personas</div>
                    <form class="w-search">
                        <div class="form-group with-button is-empty">
                            <input class="form-control input-search" name="q" type="text" value="{{app('request')->input('q')}}" placeholder="Buscar...">
                            <button type="button" id="search_person">
                                <svg class="olymp-magnifying-glass-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://social.com/img/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                            </button>
                            <span class="material-input"></span><span class="material-input"></span></div>
                    </form>
                 </div>
            </div>
    
    <div class="row" id="company_persons">
        @foreach($users as $user)
            @include('company.person')
        @endforeach
  
    </div>
    <div class="row">
        <div class="col-md-12">
        {!! $users->appends(Input::except('page'))->links() !!}
        </div>

    </div>
</div>
@stop

@section('scripts')
@parent

@stop
