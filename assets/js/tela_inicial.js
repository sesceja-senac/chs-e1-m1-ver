
$(document).ready(function() {
    if(localStorage.getItem('lstvideo-intro')!=='true'){
      $('html').css('overflow', 'hidden')
      $('.backdrop').fadeIn()
    } 
    $('.botao-video').click(function(){
      $('.backdrop').fadeIn()
      $('html').css('overflow', 'hidden')
    })
    $('#fechar-video').click(function(){
      $('.backdrop').hide()
      $('html').css('overflow', 'unset')
      localStorage.setItem('lstvideo-intro', 'true')
      $('.img-atletas').addClass("init");
    window.setTimeout(function(){
      $('.btn-1').addClass("init");
  }, 500)
    })
    
    
});
  