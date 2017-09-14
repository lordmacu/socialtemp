
$(function() {
    $("#search_person").click(function (){
        var search_person_input= $("#search_person_input").val();
        if(!!search_person_input){
            $.ajax({
                "url":searchUser,
                type:"get",
                data:{search_person_input:search_person_input,companyId:companyId},
                success:function (data){
                    $("#company_persons").html(data)
                },
                error:function (){
                    alertify.error('Ha ocurrido un error intenta mas adelante');
                }
            })
        }else{
            alertify.error('Ingresa el nombre de la persona que quieres buscar');
        }
    })
});
