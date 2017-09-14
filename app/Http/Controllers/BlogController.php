<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use View;
use App\Post;
 use Illuminate\Support\Facades\Auth;

class BlogController extends Controller {

    
   
    public function uploadImage(Request $request){
        $file = $request->file('upload');
        $file->move(public_path()."/images/",$file->getClientOriginalName());
        $content = "<script type=\"text/javascript\">\n";
        $content .= "window.parent.CKEDITOR.tools.callFunction(1, '".asset("/images/".$file->getClientOriginalName())."', '' );\n";
        $content .= "</script>";
        
        return $content;
         
    }
    
    
        
    public function blogPost($id,$post_id) {
 
         $blogpost= \App\BlogPost::find($post_id);
         $post= $blogpost->postWall;
         $company= \App\Company::find($id);
           return view('blog.blogpost')
                ->with("company",$company)
                ->with("post",$post)
                 ->with("blogpost",$blogpost);
         
    }
    
    public function blog($id){
            $company= \App\Company::find($id);
            
            $blogPost= new \App\BlogPost();
            $getBlogsBySource=$blogPost->getBlogsBySource($id);
             return view('blog.blog')
            ->with("blog",$getBlogsBySource)
            ->with("company",$company);

    }
  
    public function moreBlogPost($id){
        
                    $blogPost= new \App\BlogPost();
                    $company= \App\Company::find($id);

                    $getBlogsBySource=$blogPost->getBlogsBySource($id);
                    $postText="";
                    foreach ($getBlogsBySource as $value) {
                        $postText.= View::make('blog.blogitem', ['post' => $value,"company"=>$company])->render();

                    }
                   return $postText;
    }
    public function create($id){
        
            $company= \App\Company::find($id);
            return view('blog.create')
            ->with("company",$company)
                    ->with("company",$company);

    }
    
         public function edit($id,$post){
            $blogPost= \App\BlogPost::find($post);
             if(Auth::id()==$blogPost->user->id){
                return view('blog.edit')
                    ->with("company",$blogPost->company)
                    ->with("blogpost",$blogPost);
             }else{
                return redirect()->route('home');
             }
            

    }
         public function update(Request $request){
         $blogPost=  \App\BlogPost::find($request->get("blog_id"));
         
          if(Auth::id()==$blogPost->user->id){
                $blogPost->id_wordpress=0;
                $blogPost->title=$request->get("title");
                $blogPost->text=$request->get("text");
                $blogPost->description=$request->get("description");
                $blogPost->attachment="";
                $blogPost->source_id=$request->get("source_id");
                $blogPost->origin_id=Auth::id();
                $blogPost->type=3;
                $blogPost->media=$request->get("media");
                $blogPost->save();
                return redirect()->route('blog.blogcompany',array($request->get("source_id")));

             }else{
                return redirect()->route('home');
             }
    }
    
    public function delete($id,$post){
                 $blogPost=  \App\BlogPost::find($post);
                 if($blogPost){
                    $blogPost->delete();
                    $post= Post::find($blogPost->postWall->id);
                    $post->delete();
                 }
                return redirect()->route('blog.blogcompany',$id)->withErrors("Se ha borrado el post Correctamente");

    }
    public function save(Request $request){
 
        $blogPost= new \App\BlogPost();
        $blogPost->id_wordpress=0;
        $blogPost->title=$request->get("title");
        $blogPost->text=$request->get("text");
        $blogPost->description=$request->get("description");
        $blogPost->attachment="";
        $blogPost->source_id=$request->get("source_id");
        $blogPost->origin_id=Auth::id();
        $blogPost->type=3;
        if(count($request->get("media"))>0){
            $blogPost->media=$request->get("media")[0];
        }
        $blogPost->save();
        
        $post= new Post();
        $post->text=$request->get("title");
        $post->type=2;
        $post->origin_id=Auth::id();
        $post->source_id=0;
        $post->resource_id=$blogPost->id;
        $post->source_type=1;
        $post->save();
        return redirect()->route('blog.blogcompany',array($request->get("source_id")));

          
    }
}
