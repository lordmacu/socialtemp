var paginationwall=1;
$(function() {
    $("#load-more-button").click(function (){
        paginationwall++;
       $.ajax({
                "url":homepagination,
                data:{page:paginationwall},
                type:"get",
                success:function (data){
                    $("#newsfeed-items-grid").append(data)
                },
                error:function (){
                    alertify.error('Ha ocurrido un error intenta mas adelante');
                }
            })
    })
});
