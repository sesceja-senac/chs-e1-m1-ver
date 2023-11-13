$(document).ready(function() {   
    AOS.init();
    
    $('.btOnOF').click(function(){
        $(this).parent().toggleClass("isOn");
    }) 
    
    $('.pin').click(function(){
        var eu = $(this);
        window.setTimeout(function(){
            eu.addClass("visualizado");
        }, 250)
    })
    const modalfilosofia = document.getElementById('modal-filosofia');
    const modalsociologia = document.getElementById('modal-sociologia');
    const modalgeografia = document.getElementById('modal-geografia');
    const modalhistoria = document.getElementById('modal-historia');

    modalfilosofia.addEventListener('hide.bs.modal', () => {
        hideVideos();
    })
    modalsociologia.addEventListener('hide.bs.modal', () => {
        hideVideos();
    })
    modalgeografia.addEventListener('hide.bs.modal', () => {
        hideVideos();
    })
    modalhistoria.addEventListener('hide.bs.modal', () => {
        hideVideos();
    })
})
function hideVideos (){
    const stopVideos = () => {
        document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
        document.querySelectorAll('video').forEach(v => { v.pause() });
      };
      stopVideos();
}

$('.painel-container button').hover(function (){
    $(this).css('transform', 'scale(2)')
}, function (){
    $(this).css('transform', 'scale(1)')
})

$('.card-sesc').click(function(){
    if($('.card-sesc .active').css('display')!=='none'){
        $('.card-sesc .active').fadeOut()
        $('figcaption.active').fadeOut()
        window.setTimeout(function(){
        $('.card-sesc .hidden').fadeIn()
        $('figcaption.hidden').fadeIn()
    }, 500)
    } else if($('.card-sesc .hidden').css('display')!=='none'){
        $('.card-sesc .hidden').fadeOut()
        $('figcaption.hidden').fadeOut()
    window.setTimeout(function(){
        $('.card-sesc .active').fadeIn()
        $('figcaption.active').fadeIn()
    }, 500)
    }
    
})