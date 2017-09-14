
var source_id = 0;
var comment_list = null
var comment = function (source) {
    source_id = source;
    $("#comment_popup").modal("show")
}




var getLessComments = function (source, limit, commentButton) {
    $.ajax({
        url: lessComments,
        type: "get",
        data: {source: source, limit},
        success: function (data) {
            if (data.count == 0) {
                commentButton.hide();
            } else {
                commentButton.parent().find(".comments-list").prepend(data.comments);
                commentButton.data("limit", commentButton.data("limit") + 4)
            }

        },
        error: function () {
            alertify.error('Ha ocurrido un error intenta mas adelante');
        }
    })
}


 
var like_source = function (source, type, like_button) {
    $.ajax({
        url: urlLike,
        type: "post",
        data: {source: source, user_id: user_id, type: type},
        success: function (data) {
            like_button.find("span").html(data.likes);
                            console.log("aqui"+data.persons.last);

            if (data.type == 1) {
                like_button.parent().find(".likes-persons").html(data.persons.html);
                like_button.parent().find(".names-people-likes a").html(data.persons.last);
                like_button.parent().find(".names-people-likes span").html(data.likes);
            }

        },
        error: function () {
            alertify.error('Ha ocurrido un error intenta mas adelante');
        }
    })
}
    



$(document).on('click', '#publish_button', function () {
      var post_text_area_principal = $("#post_text_area_principal").val();
    var dataPost={};
    dataPost.text=post_text_area_principal;
    dataPost.type=typePost;
    dataPost.source=sourcePost;
    
    
    if (!!post_text_area_principal) {
        $.ajax({
            url: publish_post,
            type: "post",
            data:dataPost ,
            success: function (data) {
                 $("#newsfeed-items-grid").prepend(data);
                  jQuery("time.timeago").timeago();
                   $("#post_text_area_principal").val("")

            }

        })
    } else {
         alertify.error('ingresá texto antes de postear');

    }

});



$(document).on('click', '.comment_boton', function () {
    var commentList = $(this).parent().find(".comments-list")
    comment_list = commentList;
    comment($(this).data("source"), commentList);

});



$(document).on('click', '#comment_popup_button', function () {
    var loading_comment_spinner = $("#loading_comment_spinner");
    loading_comment_spinner.show();
    var comment_text_area = $("#comment_text_area").val();
    if (!!comment_text_area) {

        $.ajax({
            url: urlComment,
            type: "post",
            data: {source: source_id, user_id: user_id, text: comment_text_area},
            success: function (source) {
                $(comment_list).append(source)
                $("#comment_popup").modal("hide")
                loading_comment_spinner.show()
            },
            error: function () {
                alertify.error('Ha ocurrido un error intenta mas adelante');
                loading_comment_spinner.hide()
            }
        })

    } else {
        alertify
                .alert("Tenés que ingresar un texto en el comentario", function () {
                });
    }
});

$(document).on('click', '.more-comments-post', function () {
    getLessComments($(this).data("source"), $(this).data("limit"), $(this))
});


$(document).on('click', '.like-button', function () {
    like_source($(this).data("source"), $(this).data("type"), $(this));

});

