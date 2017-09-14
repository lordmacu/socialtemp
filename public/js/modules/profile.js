var paginationwall=1;
$(function() {
    $("#load-more-button").click(function (){
        paginationwall++;
       $.ajax({
                "url":paginateWallProfile,
                data:{page:paginationwall},
                type:"get",
                success:function (data){
                    if(data==0){
                        alertify.message('No hay más post que mostrar');
                        $("#load-more-button").hide()
                    }else{
                        $("#newsfeed-items-grid").append(data)
                    }
                },
                error:function (){
                    alertify.error('Ha ocurrido un error intenta mas adelante');
                }
            })
    })
});
