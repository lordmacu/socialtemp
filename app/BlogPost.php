<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    
    protected $table = 'blog_posts';
     
        public function postWall()
   {
       return $this->hasOne("App\Post","resource_id","id");
   }
   
    public function user()
    {
        return $this->hasOne("App\User","id","origin_id");
    }
    
        public function medias()
    {
        return $this->hasOne("App\Media","id","media");
    }
    
         public function company()
   {
       return $this->hasOne("App\Company","id","source_id");
   }
   
   public function getBlogsBySource($source){
       return $this->where("source_id",$source)
               ->latest()
               ->paginate(17);
   }
}


