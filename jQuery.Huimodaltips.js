!function($) {
  $.Huimodaltips = function(options, callback) {
    var defaults = {
      btn: ['确定'],
      content:'弹窗内容',
      title: '提示',
      icon: '',
      width: 400,
      hasClose: false,
    };
    var options = $.extend({}, defaults, options);

    var w= 0;
    if (options.width=='auto'){
      w ='400px';
    }else{
      w = options.width + 'px';
    }
    var htmlstr =
    '<div id="modal-tips" class="modal hide modal-tips">'+
      '<div class="modal-dialog" style="width:' + w + '">'+
        '<div class="modal-content radius">'+
          '<div class="modal-header">'+
            '<div class="modal-title">' + options.title + '</div>';
            if(options.hasClose) {
              htmlstr +=
              '<a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>';
            }
          htmlstr += '</div>'+
          '<div class="modal-body">'+
            '<div class="modal-tips-icon">' + options.icon + '</div>'+
            '<div class="modal-tips-content">' + options.content + '</div>'+
            '<div class="modal-btn-wrapper">'+
              '<button class="btn btn-success size-M radius">' + options.btn[0]+'</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    if ($("#modal-tips").length > 0) {
      $("#modal-tips").remove();
    }
    $(document.body).append(htmlstr);
    $("#modal-tips").modal("show");

    $("#modal-tips .modal-btn-wrapper .btn").on("click",function(){
      $("#modal-tips").modal("hide");
      if(callback) {
        callback();
      }
    });
  }
}(window.jQuery);
