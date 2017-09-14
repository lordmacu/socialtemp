<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    
    protected $table = 'likes_post';
     
     public function user()
        {
            return $this->hasOne("App\User","id","user_id");
        }
        
             
     public function userFields()
        {
            return $this->hasOne("App\UserFields","user_id","user_id");
        }

    public function getByName($name){
        return $this->where("name",$name)->get();
    }
    public function getCountLikesBySource($source,$type){
        return $this
                ->where("source_id",$source)
                ->where("type",$type)
                ->count();
    }
    
        public function getLikesBySource($source,$type){
        return $this
                ->where("source_id",$source)
                ->where("type",$type)
                 ->get()->take(4);
    }
      
    public function getCountLikesBySourceAndUser($source,$user,$type){
        return $this
                ->where("source_id",$source)
                ->where("user_id",$user)
                ->where("type",$type)
                
                ->get();
    }
}


