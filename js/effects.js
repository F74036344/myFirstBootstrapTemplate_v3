
/* To include these effects, you should include jQuery core javascript in your html first. */

//Smooth Scrolling Effect : smooth page scroll to an anchor
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



//Textarea Watermarking Effect
$(":text, textarea").each(function(i, ele){
  var tra,val
  var _text = $(ele),
    _title = _text.attr("title"),
    _id = _text.attr("id") || "";
  if(!!_title){
    val=$("#"+_id).attr("title");
    $("#"+_id).css("color","#bfbfbf");
    if($("#"+_id).val()==""){
      $("#"+_id).val($("#"+_id).attr("title"));
    }else{
      $("#"+_id).removeAttr("style");
    }
  }   
  $("#"+_id).focus(function(){
    if(_title != $("#"+_id).val()){
      tra=$("#"+_id).val();
      $("#"+_id).val(tra);
    }else{
      $("#"+_id).val("");
    }
    $("#"+_id).removeAttr("style");
    var e = event.srcElement;
    var r = e.createTextRange();
    r.moveStart("character",e.title.length);
    r.collapse(true);
    r.select();
  }).blur(function(){
    if($("#"+_id).val()==""){
      $("#"+_id).val(val);
      $("#"+_id).css("color","#bfbfbf");
    }
  });
});


//Changing Header Background Effect
$(window).load(function(){
    $('img.bgfade').hide();
    var dg_H = $(window).height();
    var dg_W = $(window).width();
    $('#wrap').css({'height':dg_H,'width':dg_W});
    function anim() {
        $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(3500);
        $("#wrap img").first().fadeIn(3500);
        setTimeout(anim, 10000);
    }
    anim();
  }
)
$(window).resize(function(){window.location.href = window.location.href})