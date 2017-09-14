<?php
namespace App\Providers;

use Form;
use Illuminate\Support\ServiceProvider;
use View;
use \App\Media;
use Illuminate\Support\Facades\Auth;

class FormMacroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Form::macro('fileManage', function ($mediaModel=null,$image=null,$nameImage=null) {
             $media= new Media();
            $getMediaByOrigin=$media->getMediasByOrigin(Auth::id());
            if($mediaModel){
                $filemanager=View::make('helpers.fileManager', ['comment' => 2,'idrand'=>rand(100,9885),"medias"=>$getMediaByOrigin,"mediaModel"=>$mediaModel,"image"=>$image,"nameImage"=>$nameImage])->render();
            }else{
                $filemanager=View::make('helpers.fileManager', ['comment' => 2,'idrand'=>rand(100,9885),"medias"=>$getMediaByOrigin,"image"=>$image,"nameImage"=>$nameImage])->render();
            }
            return $filemanager;
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}