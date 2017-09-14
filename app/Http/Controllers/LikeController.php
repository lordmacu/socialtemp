<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Adldap\Laravel\Facades\Adldap;
use App\Like;
use View;

class LikeController extends Controller {

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function index() {

        
     
    }
    
    public function like(Request $request){
        $like= new \App\Like();
        $source=$request->get("source");
        $user_id=$request->get("user_id");
        $type=$request->get("type");
        $getCountLikesBySourceAndUser=$like->getCountLikesBySourceAndUser($source, $user_id,$type);
         if($getCountLikesBySourceAndUser->count()==0){
 
            $like->source_id=$source;
            $like->user_id=$user_id;
            $like->type=$type;
            $like->save();
            $method="add";
        }else{
            $likecomment=Like::find($getCountLikesBySourceAndUser[0]->id);
            $likecomment->delete();
            $method="delete";
        }
        
        $arrayPersons=array();
        if($type==1){
            $persons="";
            $contador=0;
            foreach ($like->getLikesBySource($source,$type) as $value) {
                $persons.= View::make('wall.likes', ['like' => $value])->render();
                if($contador==0){
                    $arrayPersons=array("html"=>$persons,"last"=>$value->userFields->getCompleteName());
                }
                $contador++;
             }
        }
         return ["likes"=>$like->getCountLikesBySource($source,$type),"method"=>$method,"persons"=>$arrayPersons,"type"=>$type];
    }
    
 
}
