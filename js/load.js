function clickMenu() {
   $('.hamburger').click(function() {
      $(this).toggleClass('is-active');
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
   $('.menuUl>li:nth-child(-n+3)').hover(
      function() {
         // console.log('uuuuu');
         var no = $(this).index();
         console.log(no);
         // prettier-ignore
         if (!$(this).hasClass('active')) {
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
// 取skill前的數字
function skillItemNum() {
   var skillItem = $('.skill-item');
   skillItem.each(function(i, obj) {
      $(this).prepend('<span>0' + (i + 1) + '</span>');
   });
}
