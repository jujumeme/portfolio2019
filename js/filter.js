$.ajax({
   url: "xml/filesortlist.xml",
   datatype: "xml",
   type: "get",
   error: function() {
      alert("error");
   },
   success: function(myXML) {
      // alert('success');
      var workItem = $(myXML).find("work");

      workItem.each(function(i, obj) {
         var wtype = $(obj)
            .find("type")
            .text();
         var wtitle = $(obj)
            .find("title")
            .text();
         var wsrc = $(obj)
            .find("src")
            .text();
         $(".worklist .filterContent").append(
            '<div class="mix listItem ' + wtype + '"><a href="' + wsrc + '.html"><img src="image/worklist/' + wsrc + '.jpg" alt=""></a><div class="overlayBG"></div></div>'
         );
      });
   },
});

function callvar() {
   var containerEl = document.querySelector(".filterContent");
   var mixer = mixitup(containerEl);
   // alert('ooo');
}
setTimeout(callvar, 1000);
