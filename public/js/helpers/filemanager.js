

function verivado() {
    alert(3)
}
var idManager=0;
var paginator=1;
     
    
    
    $(".select-image-button").click(function () {
        idManager = $(this).data("id");
        
 
        $("#modal-file-manager-" + idManager).modal("show");
    })

   
    
    
 
    
  
    
  
var paginate= function (page){
     $.ajax({
            "url":paginateMedia,
            data:{page:page,idrand:idManager},
            success:function (data){
                if(!!data.medias.prev_page_url){
                    $(".prev").show();
                }else{
                    $(".prev").hide();
                }
                
                if(!!data.medias.next_page_url){
                    $(".next").show();
                }else{
                    $(".next").hide();
                }
                $("#container-images-filemanager-"+idManager).html(data.images)
            },
            error:function (){
                
            }
        });
}
 
 
 $(document).on('change', '#file', function () {
             $("#message").empty(); // To remove the previous error message
            var file = this.files[0];
            var imagefile = file.type;
            var match = ["image/jpeg", "image/png", "image/jpg"];
            if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2])))
            {
                $('#previewing').attr('src', 'noimage.png');
                $("#message").html("<p id='error'>Please Select A valid Image File</p>" + "<h4>Note</h4>" + "<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
                return false;
            } else
            {
                 var formData = new FormData();
                    formData.append('file', $('#file')[0].files[0]);
                    $.ajax({
                        url: uploadImageUrl+"?idrand="+idManager, // Url to which the request is send
                        type: "POST", // Type of request to be send, called as method
                        data:formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                        contentType: false, // The content type used when sending data to the server.
                        cache: false, // To unable request pages to be cached
                        processData: false, // To send DOMDocument or non processed data file it is set to false
                        success: function (data)   // A function to be called if request succeeds
                        {
                            $("#container-images-filemanager-"+idManager).html(data.images)
                            paginator=data.current_page+1
                        }
                    });
            }
         
});

 
      
   
    function imageIsLoaded(e) {
        $("#file").css("color", "green");
        $('#image_preview').css("display", "block");
        $('#previewing').attr('src', e.target.result);
        $('#previewing').attr('width', '250px');
        $('#previewing').attr('height', '230px');
    }
 
 

 

$(document).on('click', '.next', function () {
     paginator++;
       paginate(paginator)

});


$(document).on('click', '.prev', function () {
      paginator--
       paginate(paginator)

});
 


$(document).on('click', '.image-input', function () {
     var id = $(this).data("id");
        var image=$("#image-result-file-manager-"+id);
        image.attr("src",$(this).val());
        image.attr("alt",$(this).data("name"));
        $("#id-media-"+id).val($(this).data("media"))
        $(".thumbnail-"+id).show();
        $("#modal-file-manager-" + id).modal("hide");

});
 