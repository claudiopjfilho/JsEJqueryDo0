$(function(){
    $('#azul').click(function(){
        $('p').css("color","blue")
            .fadeOut()
    });
    
    $('#vermelho').click(function(){
        $('p').css("color","red");
        $('#mensagem').text('Cor alterada com sucesso')
            .css({color:'red',border:'2px solid green'})
            .addClass('green') 
            .delay(3000)
            
    $('button').removeClass('red');
        });
    });