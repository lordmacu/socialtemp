<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
 use View;
use App\UserFields;
 
class CompanyController extends Controller {

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function index(Request $request,$id) {
        
        $post= new \App\Post();
        $company= \App\Company::find($id);
        $getPostByResource=$post->getPostBySource(1,$id,3);

        return view('company')
                ->with("company",$company)
                ->with("posts",$getPostByResource);;
    }
    
    public function wall($id) {
 
        $post= new \App\Post();
        $company= \App\Company::find($id);
        $getPostByResource=$post->getPostBySource(1,$id,3);
         return view('company.wall')
                ->with("company",$company)
                ->with("posts",$getPostByResource);
    }
    
    
    
    public function searchUser(Request $request){
        
        $userFields= new UserFields();
        $getUsersNameByCompany=$userFields->getUsersNameByCompany($request->get("companyId"),$request->get("search_person_input"));
        $userText="";
        foreach ($getUsersNameByCompany as $value) {
            $userText.= View::make('company.person', ['user' => $value])->render();

        }
        return $userText;
    }
    
    
}
