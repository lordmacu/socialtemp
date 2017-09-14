<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    
    protected $table = 'titles';
     
    

        public function getByName($name){
        return $this->where("name",$name)->get();
    }
    
    
}


