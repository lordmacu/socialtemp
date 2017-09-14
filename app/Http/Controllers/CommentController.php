<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Adldap\Laravel\Facades\Adldap;
use View;


class CommentController extends Controller {

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function index() {

        
     
    }
    
    public function comment(Request $request){
        $comment= new \App\Comment();
        $comment->text=$request->get("text");
        $comment->source_id=$request->get("source");
        $comment->user_id=$request->get("user_id");
        $comment->save();
        return view("wall.comment")->with("comment",$comment); 
    }
    
    public function lessComments(Request $request){
        $comments= new \App\Comment();
        $getLessComments=$comments->getLessComments($request->get("source"), $request->get("limit"))->reverse();

        $commentsText="";
        
        $contador=0;
        foreach ($getLessComments as $key=> $value) {
                $commentsText.= View::make('wall.comment', ['comment' => $value])->render();
            
            $contador++;
        }
        return ["comments"=>$commentsText,"count"=>$getLessComments->count()];
    }
   
}
