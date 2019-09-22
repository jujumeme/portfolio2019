function clickMenu() {
   $('.navbarWrapper .flower>img').click(function() {
      $(this).toggleClass('rotateflower');
      if (!$('.menuContainer').hasClass('show')) {
         $('.menuContainer').addClass('show');
         console.log('1');
      } else {
         $('.menuContainer ').removeClass('show');
         console.log('2');
      }
   });
}

function hoverYellowBlock() {
   $('.menuUl>li:nth-child(-n+4)').hover(
      function() {
         // console.log('uuuuu');
         var no = $(this).index();
         console.log(no);
         // prettier-ignore
         if (!$(this).hasClass('active')) {
            $(this).children('span').addClass('activeYellow');
            // 其他張BG圖淡出
            $('.menuPattern>div').not($('.menuPattern>div').eq(no)).stop(true, true).fadeOut(200);
            // 此BG圖淡入
            $('.menuPattern>div').eq(no).stop(true, true).fadeIn(200).addClass('showPattern');

            // 其他BG刪除active
            $('.menuPattern>div').removeClass('active');
            //此BG加入active
            $('.menuPattern>div').eq(no).addClass('active');

            $(this).find('span').addClass('yellowBlock');
         }
      },
      function() {
         // prettier-ignore
         $(this).find('span').removeClass('yellowBlock');
      }
   );
}
$('.navbarWrapper').load('navwrapper.html');
$('.menuContainer').load('menu.html', function() {
   setTimeout(clickMenu, 200);
   setTimeout(hoverYellowBlock, 500);
});
$('footer').load('footer.html');

// window.onload全站共同menu載入部分
// window.onload = function() {};

// window.onload的調用
function addLoadEvent(func) {
   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
      window.onload = func;
   } else {
      window.onload = function() {
         oldonload();
         func();
      };
   }
}
