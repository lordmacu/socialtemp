<!DOCTYPE html>
<html>
<head lang="es">
    <meta charset="UTF-8">
    @section('meta')
        <meta name="description" content="desc" />
    @show
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    <title>
        @section('title')Social Insud@show
    </title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

     <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
 <!-- Main Font -->
    <script src="{{asset("js/webfontloader.min.js")}}"></script>
    <script>
        WebFont.load({
            google: {
                families: ['Roboto:300,400,500,700:latin']
            }
        });
    </script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="{{asset("css/bootstrap-reboot.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/bootstrap.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/bootstrap-grid.css")}}">

    <!-- Theme Styles CSS -->
    <link rel="stylesheet" type="text/css" href="{{asset("css/theme-styles.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/blocks.css")}}">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Styles for plugins -->
    <link rel="stylesheet" type="text/css" href="{{asset("css/jquery.mCustomScrollbar.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/simplecalendar.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/daterangepicker.css")}}">
    <!-- Lightbox popup script-->
        <link rel="stylesheet" type="text/css" href="{{asset("css/bootstrap-select.css")}}">

    <link rel="stylesheet" type="text/css" href="{{asset("css/magnific-popup.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/alertify.rtl.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/alertify.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/themes/bootstrap.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("css/swiper.min.css")}}">

</head>
<body>

@yield('styles')


@include('partials.header')
@include('partials.responsiveheader')

@yield('headerspace')

@include('partials.modalwall')
@include('partials.chatpop')

     @yield('content')

     
 
 <div class="modal fade" id="comment_popup" tabindex="-1" role="dialog" aria-labelledby="modal_comment">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="modal_title">Comentario</h4>
      </div>
      <div class="modal-body">
          <textarea id="comment_text_area" placeholder="Escribí tu mensaje aquí" class="form-control"></textarea>
      
              <div class="col-md-12">
                  <div class="pull-left" id="loading_comment_spinner">
                    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>
                  </div>
                <button type="button" id="comment_popup_button" class="btn btn-primary pull-right">Comentar</button>

              </div>
               
      </div>
      
    </div>
  </div>
</div>
     
     
 
<!-- jQuery first, then Other JS. -->
<script src="{{asset("js/jquery-3.2.0.min.js")}}"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<!-- Js effects for material design. + Tooltips -->
<script src="{{asset("js/material.min.js")}}"></script>

<!-- Helper scripts (Tabs, Equal height, Scrollbar, etc) -->
<script src="{{asset("js/theme-plugins.js")}}"></script>

<!-- Init functions -->
<script src="{{asset("js/main.js")}}"></script>

<!-- Load more news AJAX script -->
<script src="{{asset("js/ajax-pagination.js")}}"></script>

<!-- Select / Sorting script -->
<script src="{{asset("js/selectize.min.js")}}"></script>

<!-- Datepicker input field script-->
<script src="{{asset("js/moment.min.js")}}"></script>
<script src="{{asset("js/daterangepicker.min.js")}}"></script>

<!-- Widget with events script-->
<script src="{{asset("js/simplecalendar.js")}}"></script>

<!-- Lightbox plugin script-->
<script src="{{asset("js/jquery.magnific-popup.min.js")}}"></script>

<script src="{{asset("js/alertify.js")}}"></script>

<script src="{{asset("js/timeago.js")}}"></script>
<script src="{{asset("js/times.js")}}"></script>

<script src="{{asset("js/mediaelement-and-player.min.js")}}"></script>
<script src="{{asset("js/mediaelement-playlist-plugin.min.js")}}"></script>
<script src="{{asset("js/modules/wall.js")}}"></script>
<script src="{{asset("js/swiper.jquery.min.js")}}"></script>

@if ( $errors->count() > 0 )
     @foreach( $errors->all() as $message )
            <script>
             alertify.success('{{ $message }}');
            </script>

    @endforeach
@endif

<script>

jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
})
var urlComment='{{route('comment')}}'
var urlLike='{{route('like')}}'
var lessComments='{{route('lessComments')}}'
var publish_post= "{{route('publish_post')}}"

</script>
@yield('scripts')
@yield('scriptschoose')
 
</body>
</html>
