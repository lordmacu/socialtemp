<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    
    protected $table = 'medias';
        
 
    public function getMediasByOrigin($id){
        return $this->where("origin_id",$id)->orderBy("created_at","desc")->paginate(6);
    }
    
}


