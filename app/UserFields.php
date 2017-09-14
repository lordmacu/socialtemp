<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class UserFields extends Model
{
        protected $table = 'fields_user';
        protected $user_id;
        protected $department_number;
        protected $department;
        protected $title;
        protected $first_name;
        protected $last_name;
        protected $info;
        protected $initials;
        protected $country;
        protected $street_address;
        protected $postal_code;
        protected $delivery_office_name;
        protected $telephone_number;
        protected $locale;
        protected $company;
        protected $thumbnail;
 
         public function titles()
        {
            return $this->hasOne("App\Title","id","title");
        }

         public function countries()
        {
            return $this->hasOne("App\Country","id","country");
        }
         public function companies()
        {
            return $this->hasOne("App\Company","id","company");
        }
 
        public function medias()
        {
            return $this->hasOne("App\Media","id","media");
        }
        
         public function deliveryOffices()
        {
            return $this->hasOne("App\DeliveryOffice","id","delivery_office_name");
        }
        
        public function departments()
        {
            return $this->hasOne("App\Department","id","department");
        }
        
        public function getUsersNameByCompany($company,$user){
            return $this
                    ->where("company",$company)
                    ->where("first_name","LIKE","%".$user."%")
                    ->orWhere("last_name","LIKE","%".$user."%")
                    ->get();
        }
        
        public function search($search){
              return $this
                     ->select("fields_user.*","departments.name","companies.name")
                    ->join("departments","departments.id","=","department")
                     ->join("companies","companies.id","=","company")
                      ->orWhere("first_name","LIKE","%".$search."%")
                     //                    ->join("titles","titles.id","=","title")

                    ->orWhere("last_name","LIKE","%".$search."%")
                    ->orWhere("fields_user.email","LIKE","%".$search."%")
                    ->orWhere("fields_user.description","LIKE","%".$search."%")
                    ->orWhere("telephone_number","LIKE","%".$search."%")
                    ->orWhere("departments.name","LIKE","%".$search."%")
                    //->orWhere("titles.name","LIKE","%".$search."%")
                     
                    ->paginate(20);
        }
        
        function getCompleteName(){
            return $this->attributes['first_name']." ".$this->attributes['last_name'];
        }
        
        function getUser_id() {
            return $this->user_id;
        }

        function getDepartment_number() {
            return $this->department_number;
        }

        function getDepartment() {
            return $this->department;
        }

        function getTitle() {
            return $this->title;
        }

        function getFirst_name() {
            return $this->first_name;
        }

        function getLast_name() {
            return $this->last_name;
        }

        function getInfo() {
            return $this->info;
        }

        function getInitials() {
            return $this->initials;
        }

        function getCountry() {
            return $this->country;
        }

        function getStreet_address() {
            return $this->street_address;
        }

        function getPostal_code() {
            return $this->postal_code;
        }

        function getDelivery_office_name() {
            return $this->delivery_office_name;
        }

        function getTelephone_number() {
            return $this->telephone_number;
        }

        function getLocale() {
            return $this->locale;
        }

        function getCompany() {
            return $this->company;
        }

        function getThumbnail() {
            $image=null;

            if($this->attributes['media']){
                $image= "/media/thumbnail/".$this->medias->route_name;
            }else{
                if($this->attributes['thumbnail']){
                    $image="/user/thumbnail/".$this->attributes['thumbnail'];
                }else{
                    $image = 'http://www.gravatar.com/avatar/'.md5($this->attributes['email']).'fs=100';
                }
            }

            return $image;    

        }

        function setUser_id($user_id) {
            $this->user_id = $user_id;
        }

        function setDepartment_number($department_number) {
            $this->department_number = $department_number;
        }

        function setDepartment($department) {
            $this->department = $department;
        }

        function setTitle($title) {
            $this->title = $title;
        }

        function setFirst_name($first_name) {
            $this->first_name = $first_name;
        }

        function setLast_name($last_name) {
            $this->last_name = $last_name;
        }

        function setInfo($info) {
            $this->info = $info;
        }

        function setInitials($initials) {
            $this->initials = $initials;
        }

        function setCountry($country) {
            $this->country = $country;
        }

        function setStreet_address($street_address) {
            $this->street_address = $street_address;
        }

        function setPostal_code($postal_code) {
            $this->postal_code = $postal_code;
        }

        function setDelivery_office_name($delivery_office_name) {
            $this->delivery_office_name = $delivery_office_name;
        }

        function setTelephone_number($telephone_number) {
            $this->telephone_number = $telephone_number;
        }

        function setLocale($locale) {
            $this->locale = $locale;
        }

        function setCompany($company) {
            $this->company = $company;
        }

        function setThumbnail($thumbnail) {
            $this->thumbnail = $thumbnail;
        }

                
        
    
    public function getFieldsByUser($id){
        return $this->where("user_id",$id)->get();
    }
    //put your code here
    public function getByIdentifier($id){
        return $this->where("identifier",$id)->get();
    }
    
    
}


