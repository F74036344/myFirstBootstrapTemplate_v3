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