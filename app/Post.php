<?php
namespace App;

/**
 * Description of UserFields
 *
 * @author insud-cristian
 */

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    
   
    protected $table = 'posts';
        
    
     public function likescount()
    {
        return $this->hasMany("App\Like","source_id","id")->where("type",1)->count();
    }
    
    public function likes()
    {
        return $this->hasMany("App\Like","source_id","id")->where("type",1);
    }
    
    public function comments()
    {
        return $this->hasMany("App\Comment","source_id","id");
    }
    
    public function commentscount()
    {
        return $this->hasMany("App\Comment","source_id","id")->count();
    }
    
    public function commentspartial()
    {
 
        return $this->hasMany("App\Comment","source_id","id")->latest()->offset(0)->limit(4);
    }
    
    public function getByName($name){
        return $this->where("name",$name)->get();
    }
    
    public function user()
   {
       return $this->hasOne("App\User","id","origin_id");
   }
   
    public function blogPost()
   {
       return $this->hasOne("App\BlogPost","id","resource_id");
   }
    public function company()
   {
       return $this->hasOne("App\Company","id","origin_id");
   }
    
    public function getPostByUser($type,$user,$sourceType){

        return $this
                ->where("type",$type)
                ->where("origin_id",$user)
                ->where("source_type",$sourceType)
                ->latest()
                ->paginate(15); 
    }
    
        public function getPostHome($source,$sourceType){
       return $this
                 ->where("source_id",$source)
                 ->where("source_type",$sourceType)
                ->latest()
                ->paginate(15); 
    }
    
    public function getPostBySource($type,$source,$sourceType){
       return $this
                ->where("type",$type)
                ->where("source_id",$source)
                ->where("source_type",$sourceType)
                ->latest()
                ->get(); 
    }
    public function getPostsHome(){
       return $this
 
                ->latest()
                ->get(); 
    }
    
    
    public function getRemotePost($i){
        $result = file_get_contents("http://blog.grupoinsud.com/?rest_route=/wp/v2/posts&_embed&page=".$i);


        $json = str_replace("wp:featuredmedia", "feature", $result);
        $json = str_replace("_embedded", "embed", $json);

        $post = json_decode($json, true);
 
        $arrayPost = array();
        foreach ($post as $key => $value) {
            $arrayPost[$key]["excerpt"] = $value["excerpt"]["rendered"];
            $arrayPost[$key]["content"] = $value["content"]["rendered"];
            $arrayPost[$key]["title"] = $value["title"]["rendered"];
            $arrayPost[$key]["id"] = $value["id"];
            $date = strtotime($value["date"]);

            $arrayPost[$key]["date"] = date('Y-m-d', $date);


            if (isset($value["embed"]["feature"][0]["source_url"])) {
                $arrayPost[$key]["image"] = $value["embed"]["feature"][0]["source_url"];
            } else {
                $arrayPost[$key]["image"] = null;
            }

            if (isset($value["embed"]["author"][0]["name"])) {
                $arrayPost[$key]["autor"]["name"] = $value["embed"]["author"][0]["name"];
            }

            if ($value["embed"]["author"][0]["name"] == "insud-admin") {
                $arrayPost[$key]["autor"]["image"] = "https://pbs.twimg.com/profile_images/2702856315/55a77fa44117d6b71c95fe688263d148_400x400.png";
            } else {
                if (isset($value["embed"]["author"][0]["avatar_urls"])) {
                    $arrayPost[$key]["autor"]["image"] = $value["embed"]["author"][0]["avatar_urls"];
                }
            }
        }
        return $arrayPost;
    }
}


