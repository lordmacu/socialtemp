var paginationWall=1;
$(function() {
    $("#more").click(function (){
        paginationWall++;
             $.ajax({
                "url":moreBlogPost,
                data:{page:paginationWall},
                type:"get",
                 success:function (data){
                    $(".blog-post-columns").append(data)
                },
                error:function (){
                    alertify.error('Ha ocurrido un error intenta mas adelante');
                }
            })
         
    })
    
    $("#create_new_post").click(function (){
        $("#createPost").modal("show")
    })
    
    
 
});


