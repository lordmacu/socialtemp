<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use View;
use App\UserFields;
 use Illuminate\Support\Facades\Auth;

class SearchController extends Controller {

    
   public function index(Request $request){
       
       $userFields= new  UserFields();
         return view('search')
                 ->with("users",$userFields->search($request->get("q")));
   } 

   public function searchnew(){
              return view('searchnew');
    
   }
    
}
