$(".carousel").slick();

function movedetailTxt() {
   if ($(window).innerWidth() < 599) {
      $(".slick-initialized .slick-slide").css({ display: "block" });
      $(".carousel .row .detailTxt,.carousel .row .detailPic")
         .removeClass("w-50")
         .addClass("w-100");
      // $(".carousel .row .detailTxt").css({ "padding-left": "0px", "text-align": "center" });
      $(".carousel .row .detailTxt")
         .removeClass("bigger600")
         .addClass("smaller600");
   } else {
      $(".slick-initialized .slick-slide").css({ display: "flex" });
      $(".carousel .row .detailTxt,.carousel .row .detailPic")
         .removeClass("w-100")
         .addClass("w-50");
      // $(".carousel .row .detailTxt").css({ "padding-left": "30px", "text-align": "left" });
      $(".carousel .row .detailTxt")
         .removeClass("smaller600")
         .addClass("bigger600");
   }
}
movedetailTxt();
$(window).on("resize", function() {
   movedetailTxt();
});
