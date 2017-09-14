<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Adldap\Laravel\Facades\Adldap;

class ProfileController extends Controller {

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function index($id) {

        $post = new \App\Post();
        $userField = \App\UserFields::find($id);
        $getPostByResource = $post->getPostByUser(1, $userField->user_id, 2);

         return view('profile')
                        ->with("profile", $userField)
                        ->with("posts", $getPostByResource);
    }

    public function paginateWallProfile($id) {
        $post = new \App\Post();
        $userField = \App\UserFields::find($id);

         $getPostByResource = $post->getPostByUser(1, $userField->user_id, 2);
        $wallText=0;
        foreach ($getPostByResource as $post) {

            if ($post->type == 1) {
                $wallText .= View::make('wall.simplepost', ['post' => $post])->render();
            } else if ($post->type == 2) {
                $wallText .= View::make('wall.simpleblogpost', ['post' => $post])->render();
            }
        }
        return $wallText;
    }
    public function editProfile($id){
        $userField = \App\UserFields::find($id);
        
        $departments= \App\Department::pluck("name","id");
        $titles= \App\Title::pluck("name","id");
        $delivery_office_name= \App\DeliveryOffice::pluck("name","id");
         return view('profile.edit')
                 ->with("titles",$titles)
                 ->with("delivery_office_name",$delivery_office_name)
                 ->with("departments",$departments)
                 ->with("profile", $userField);
        }
        
    public function udpateProfile(Request $request){
                  $userField = \App\UserFields::find($request->get("id_user"));
                $userField->first_name=$request->get("first_name");
                $userField->last_name=$request->get("last_name");
                $userField->email=$request->get("email");
                $userField->description=$request->get("description");
                $userField->department=$request->get("department");
                $userField->title=$request->get("title");
                $userField->telephone_number=$request->get("telephone_number");
                $userField->street_address=$request->get("street_address");
                $userField->delivery_office_name=$request->get("delivery_office_name");
                if(count($request->has("media"))>0){
                    if(isset($request->get("media")[0])){
                    $userField->media=$request->get("media")[0];
                    }
                }
                $userField->save();
                return redirect()->route("profile",$request->get("id_user"));
    }

}
