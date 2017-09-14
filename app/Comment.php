<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    
    protected $table = 'comments';
     
    

    public function getByName($name){
        return $this->where("name",$name)->get();
    }
     public function user()
        {
            return $this->hasOne("App\User","id","user_id");
        }
        
             
     public function userFields()
        {
            return $this->hasOne("App\UserFields","user_id","user_id");
        }

         public function likescount()
    {
        return $this->hasMany("App\Like","source_id","id")->where("type",2)->count();
    }
    
    public function likes()
    {
        return $this->hasMany("App\Like","source_id","id")->where("type",2);
    }
    
    public function getLessComments($source,$limit){
        return $this->where("source_id",$source)
                ->latest()->offset($limit)->limit(4)
                ->get();
    }
}


