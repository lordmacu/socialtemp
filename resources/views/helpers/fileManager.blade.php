

<div class="col-xs-12">
    <button class="btn btn-success select-image-button"   type="button" data-id="{{$idrand}}" >Seleccionar imagen <i class="fa fa-file-image-o" aria-hidden="true"></i></button>
    <br/>
    <a href="javascript:void(0)" class="thumbnail-{{$idrand}}  ">
        <img class="image-file-uploader" id="image-result-file-manager-{{$idrand}}" @if(isset($mediaModel)) src="{{asset('/media/'.$mediaModel->route_name)}}" @endif @if(isset($image)) src="{{asset($image)}}" @endif width="100%">
     </a>
    <input type="text" name="media[]"  id="id-media-{{$idrand}}" @if(isset($mediaModel))  value="{{$mediaModel->id}}" @endif @if(isset($nameImage)) value="{{$nameImage}}" @endif/>

</div>


<div class="modal fade" id="modal-file-manager-{{$idrand}}" tabindex="-1" role="dialog" aria-labelledby="modal_comment">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="modal_title">Seleccionar Imágen</h4>
            </div>
            <div class="modal-body">
                <div class="ui-block-content container-block-filemanager">
                    <!-- Tab panes -->
                     <div class="row">
                        <div class="col-md-12">

                            <form class="uploadimage" action="" method="post" enctype="multipart/form-data">
                                 <div id="selectImage">
                                     <input type="file" name="file" id="file"  />
                                </div>
                                <br/>

                            </form>
                        </div>
                 
                    </div>
                    <div class="tab-content row" id="container-images-filemanager-{{$idrand}}">

                        @foreach($medias as $media)
                        <div class="choose-photo-item" data-mh="choose-item" style="height: 171px;">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="{{asset("/media/thumbnail/".$media->route_name)}}" alt="{{$media->original_name}}">
                                    <input class="image-input"  data-id="{{$idrand}}" data-media="{{$media->id}}" data-name="{{$media->original_name}}" type="radio" name="optionsRadios" value="{{asset("/media/fullImage/".$media->route_name)}}"><span class="circle"></span><span class="check"></span>
                                </label>
                            </div>
                        </div>
                        @endforeach

                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-warning pull-right next">Siguiente</button>
                            <button type="button" class="btn btn-warning pull-left prev">Anterior</button>
                        </div>
                    </div>
                   
                </div>

            </div>
             
        </div>
    </div>
</div>

@section('scriptschoose')
@parent
<script>
    var uploadImageUrl = "{{route('uploadImage')}}"
    var paginateMedia = "{{route('paginateMedia')}}"
    var rand = "{{$idrand}}"
</script>
<script src="{{asset("js/helpers/filemanager.js")}}"></script>

@stop
