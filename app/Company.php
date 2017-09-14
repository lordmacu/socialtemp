<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    
    protected $table = 'companies';
        
    public function getByName($name){
        return $this->where("name",$name)->get();
    }
    
    
    
      public function users()
    {
        return $this->hasMany("App\UserFields","company","id");
    }
     
    public function insertCompany($company){
        $getByName=$this->getByName($company);
        if(count($getByName)==0){
            $this->name=$company;
           return  $this->save();
        }
        return $getByName;
    }
    function getThumbnail() {
            $image=null;
            if($this->attributes['logo']){
                $image=asset("/companies/".$this->attributes['logo']);
            }else{
                $image = 'http://www.gravatar.com/avatar/'.md5($this->attributes['email']).'fs=100';
            }
            return $image;    

        }

}


