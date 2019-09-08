$('.navbarWrapper').load('navwrapper.html');
$('.menuContainer').load('menu.html', function() {
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
});
$('footer').load('footer.html');

// window.onload全站共同menu載入部分
window.onload = function() {
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
};

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

// 打地鼠function
function whackTheMole() {
   var $smile = $('.lowerScene .smile'),
      $holeImg = $('.index .lowerScene>ul>li'),
      lastHole,
      timeUp = false;
   //step1: 隨機"時間"  >>>  random number
   function randomTime(min, max) {
      return Math.round(Math.random() * (max - min) + min);
   }
   // console.log(randomTime(200, 800));

   //step2: 避免重複的洞出現
   function randomHole() {
      let randomNum = Math.floor(Math.random() * $holeImg.length),
         hole = $holeImg.eq(randomNum);
      if (hole === lastHole) {
         randomHole();
      }
      lastHole = hole;
      return hole; //   加上此句呼叫後可直接得到 hole = $holeImg.eq(randomNum);  這個物件
   }

   //step3: 利用隨機時間與洞洞讓我出現
   function appear() {
      let time = randomTime(200, 1000);
      let hole = randomHole();
      hole
         .find('.smile')
         .addClass('up')
         .attr('src', './image/index/smile.png');

      setTimeout(() => {
         hole.find('.smile').removeClass('up');
         if (timeUp == false) {
            appear();

            // console.log('0');
         } else {
            $('body,html').removeClass('myCursor');
         }
      }, time);
   }

   //step4: 打中時所觸發後續動作
   $holeImg.on('click', function() {
      $(this)
         .find('.smile')
         .removeClass('up')
         .attr('src', './image/index/cry.png');
   });

   //step5: 遊戲開始啦!
   function startGame() {
      timeUp = false;
      // console.log(timeUp);
      appear();
      $('body,html').addClass('myCursor');

      // prettier-ignore
      setTimeout(() => ((timeUp = true),setTimeout(function() {
               alert('(≧ω≦)  Game Over!  (≧ω≦) ');}, 1000)),15000);
   }

   $('.index main .button').on('click', function() {
      startGame();
   });
}
