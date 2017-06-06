// var $win = $(window);

$(function(){
    //照片大小
    // alert('123');
    $('.img-rwd img').attr('style', '');
    $('.img-rwd1024 img').attr('style', '');
    $('.img-rwd768 img').attr('style', '');
    $('.img-rwd640 img').attr('style', '');
    $('.img-rwd500 img').attr('style', '');
    $('.img-rwd320 img').attr('style', '');

    $('.img-rwd').attr('style', '');
    $('.img-rwd1024').attr('style', '');
    $('.img-rwd768').attr('style', '');
    $('.img-rwd640').attr('style', '');
    $('.img-rwd500').attr('style', '');
    $('.img-rwd320').attr('style', '');

});

$(function(){ 
    //頁尾開合
    $( ".footer-control" ).click(function() {
      $( ".footer-control span" ).toggle();
      $(".footer-control").toggleClass("active");
      $( ".footer > ul" ).slideToggle();
    });


});


$(function(){
    //EDITOR 文字大小
    // alert('123');
    $('.articleText table').attr('style', '');
    $('.articleText th').attr('style', '');
    $('.articleText td').attr('style', '');

    $('.articleText p').attr('style', '');
    $('.articleText span').attr('style', '');
    $('.articleText img').attr('style', '');
    $('.articleText li').attr('style', '');
    $('.articleText a').attr('style', '');

});
