<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use View;
use App\Media;
use Illuminate\Support\Facades\Auth;
use Image;

class FileManagerController extends Controller {

 
    public function uploadImage(Request $request){
        
               $file=$request->file("file");
            $nameFile=time()."-".Auth::id()."-".$file->getClientOriginalName();
            $media= new Media();
            $media->original_name=$file->getClientOriginalName();
            $media->route_name=$nameFile;
            $media->original_extension=$file->getClientOriginalExtension();
            $media->size=$file->getSize();
            $media->mimetype=$file->getMimeType();
            $media->origin_id= Auth::id();
            $media->save();
            copy($file->getRealPath(),public_path() . "/media/fullImage/".$nameFile);
            
        Image::make($file->getRealPath(), array(
                    'width' => 300,
                    'height' => 300,
                    'Crop' => true
        ))->save(public_path() . "/media/thumbnail/".$nameFile);
        
        $mediaText="";
        $medias= new Media();
        $getMediasByOrigin=$medias->getMediasByOrigin(Auth::id());
        foreach ($getMediasByOrigin as $m) {
            $mediaText.= View::make('helpers.singlemedia', ['media' => $m,"idrand"=>$request->get("idrand")])->render();
        }
        return ["images"=>$mediaText,"medias"=>$getMediasByOrigin];
    }
     
    public function paginateMedia(Request $request){
        $medias= new Media();
        $getMediasByOrigin=$medias->getMediasByOrigin(Auth::id());
        $mediaText="";
        foreach ($getMediasByOrigin as $m) {
            $mediaText.= View::make('helpers.singlemedia', ['media' => $m,"idrand"=>$request->get("idrand")])->render();
        }
        return ["images"=>$mediaText,"medias"=>$getMediasByOrigin];
    }
}
