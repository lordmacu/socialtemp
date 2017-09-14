<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class DeliveryOffice extends Model
{
    
    protected $table = 'delivery_offices';
        
    public function getByName($name){
        return $this->where("name",$name)->get();
    }
    
    
}


