<div class="choose-photo-item" data-mh="choose-item" style="height: 260px;">
    <div class="radio">
        <label class="custom-radio">
            <img src="{{asset("/media/thumbnail/".$media->route_name)}}" alt="{{$media->original_name}}">
            <input class="image-input" data-id="{{$idrand}}" data-media="{{$media->id}}" data-name="{{$media->original_name}}" type="radio" name="optionsRadios" value="{{asset("/media/fullImage/".$media->route_name)}}"><span class="circle"></span><span class="check"></span>
        </label>
    </div>
</div>