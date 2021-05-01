list = 0;
$('#mobile_menu').on('click', function(){
  if (list === 0) {
    $('.mobile-menu').css('display', 'flex');
    list = 1;
  } else {
    $('.mobile-menu').css('display', 'none');
    list = 0;
  }
});
function window_width() {
  if ($(window).width() <= '800'){
    $('.menu-left').css('width', '80%');
    $('.menu-right').css('width', '20%');
    $('.menu-block').css('height', '4.3em');
    $('.mobile_menu-button').css('display', 'flex');


    $('.option').css('display', 'none');
  }else{
    $('.menu-left').css('width', '90%');
    $('.menu-right').css('width', '10%');
    $('.option').css('display', 'flex');
    $('.mobile_menu-button').css('display', 'none');
  }
}
let timer = setInterval(() => window_width(), 100);
