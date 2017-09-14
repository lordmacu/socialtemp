<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Adldap\Laravel\Facades\Adldap;



class WallController extends Controller {

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function index() {

        
     
    }
    
    public function publish(Request $request){
        
         if($request->has("text")){
            $user = Auth::user();
            $post= new \App\Post();
            $post->text=$request->get("text");
            if($request->has("source")){
                $post->source_id=$request->get("source");
            }
            $post->origin_id=$user->id;
            $post->source_type=$request->get("type");
            $post->save();
            
             return view('wall.simplepost')->with("post",$post);

        }else{
            return ["error"=>"Ingresa un texto"];
        }
        
        return "hola";
    }
    
 
}
