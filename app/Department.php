<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    
    protected $table = 'departments';
        
    public function getByName($name){
        return $this->where("name",$name)->get();
    }
      public function insertDepartment($company){
        $getByName=$this->getByName($company);
        if(count($getByName)==0){
            $this->name=$company;
           return  $this->save();
        }
        return $getByName;
    }
    
}


