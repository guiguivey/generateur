// function fadeIn(img) {
//   img.style.opacity = 0;
//
//   var last = +new Date();
//   var tick = function() {
//     img.style.opacity = +img.style.opacity + (new Date() - last) / 400;
//     last = +new Date();
//
//     if (+img.style.opacity < 1) {
//       (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
//     }
//   };
//
//   tick();
// }
//
// fadeIn(img);

$(document).ready(function() {
  $("button").click(function() {
    $("#imagelicorne").fadeIn().css("visibility", "visible");
  });
});
