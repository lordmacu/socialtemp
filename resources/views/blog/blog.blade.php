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
<style>
    .modal-dialog{
        max-width: 80%
    }
</style>
 
<div class="container">
	<div class="row">
            
            <div id="wrapper">
                <div id="columns" class="blog-post-columns">
                    @foreach($blog as $post )
                        @include('blog.blogitem')
                    @endforeach
                </div>
            </div>
          
                @if($blog->hasMorePages())
		<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <a href="javascript:void(0)" id="more" class="btn btn-control btn-more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg></a>
		</div>
                @endif
	</div>
</div>

 
@stop

@section('scripts')
@parent
 <script src="{{asset("js/modules/blog.js")}}"></script>

<script>
var moreBlogPost = "{{route('blog.moreBlogPost',$company-> id)}}"
    var companyId = {{$company-> id}}
 
</script>
@stop
