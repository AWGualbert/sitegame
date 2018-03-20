$(function () {
    var cont = 0;
    $(".cont_cart").text(cont);
    $('.add_cart').click(function () {
        cont++;



        $(".cont_cart").text(cont);
    });


    $("#cadastro_lead").submit(function () {

        $("#captura_de_lead").modal('hide');
        $("#sucesso_cadastro_lead").modal('show');

        

        var name = $("#inputName").val();
        $("#nameView").text(name);
        
        $("#inputName").val("");
        $("#inputEmail").val("");

    });

    
});