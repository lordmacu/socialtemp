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
    <form action="{{route('blog.savePost',$company->id)}}" method="post" id="form-blog">
    {{ csrf_field() }}
    <input type="hidden" value="{{$company->id}}" name="source_id"/>
        <div class="row">

            <div class="col-xl-9 push-xl-3 col-lg-12 push-lg-0 col-md-12 col-sm-12 col-xs-12">


                <div class="ui-block ui-block-content">
                    <form>

                        <div class="row">

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group label-floating is-empty">
                                    <label class="control-label">Título</label>
                                    <input id="title" name="title" class="form-control" placeholder="" type="text" >
                                    <span class="material-input"></span></div>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label class="control-label">Contenido de la entrada</label>
                                <div class="form-group label-floating is-empty">
                                    <textarea class="form-control" id="editor1" name="text" ></textarea>
                                    <span class="material-input"></span>
                                </div>
                            </div>


                        </div>
                    </form>

                </div>

            </div>

            <div class="col-xl-3 pull-xl-9 col-lg-12 pull-lg-0 col-md-12 col-sm-12 col-xs-12">
                <div class="ui-block">
                    <div class="container-blog-publish">
                        <button class="btn btn-success btn-md-s pull-right publish" type="button">Publicar</button>
                        <a href="{{route('blog.blogcompany',$company->id)}}" class="btn btn-warning btn-md-s pull-left">Cancelar</a>
                    </div>
                    <div class="ui-block-title">
                        <h6 class="title">Descripción corta</h6>
                    </div>
                    <div class="ui-block-content">
                        <div class="form-group label-floating is-empty">
                            <textarea class="form-control" name="description" id="description" placeholder="Descripción corta" ></textarea>
                            <span class="material-input"></span></div>
                    </div>

                    <div class="ui-block-title">
                        <h6 class="title">Adjunto</h6>
                    </div>
                    <div class="ui-block-content media-post">
                        {!! Form::fileManage() !!}
                    </div>

                </div>

            </div>

        </div>

    </form>

</div>
@stop

@section('scripts')
@parent
<script src="{{asset('ckeditor/ckeditor.js')}}"></script>

<script>
var moreBlogPost = "{{route('blog.moreBlogPost',$company-> id)}}"
    var companyId = {{$company-> id}}
   

CKEDITOR.replace( 'editor1',
{
    filebrowserUploadUrl : '{{route("blog.uploadImage")}}'
});


$(".publish").click(function (){
    if(!$("#title").val()){
         alertify.error('Ingresa el titulo');
             return false

        }
    
       if(!$("#description").val()){
         alertify.error('Ingresa la descripción corta');
         return false
    }
    
    
    var editorText = CKEDITOR.instances.editor1.getData();
    if(!editorText){
         alertify.error('Ingresa contenido en a la entrada');
                  return false
    }
     
 $("#form-blog").submit();
});
</script>


@stop