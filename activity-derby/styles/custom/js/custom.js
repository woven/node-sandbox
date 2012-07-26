!function ($) {
  $('.activity .comments').before('<a class="show-comments pull-right" href="#">Show comments</a>');
  $('.activity .comments').addClass('collapsed');

  $('.activity .show-comments').click(function(event){
    var comments = $(this).closest('.activity').find('.comments');
    if(comments.length){
      if(comments.hasClass('collapsed')){
        $(comments).slideDown();
        comments.removeClass('collapsed');
        $(this).text('Hide comments');
      }
      else {
        $(comments).slideUp();
        comments.addClass('collapsed'); 
        $(this).text('Show comments');
      }
      event.preventDefault();
    }
  });
  
  $('.new .textarea .content').focus(function(event){
    var textarea = $(this).closest('.textarea');
    var button = textarea.find('.publish');
    var textareaControls = $(textarea).find('.textarea-controls');
    $(textarea).find('textarea').animate({height: '60px'});
    $(textareaControls).animate({
      opacity: '1',
      
    });
    $(textareaControls).fadeIn();
  });

  $('.new .textarea .content').blur(function(event){
    var textarea = $(this).closest('.textarea');
    var button = textarea.find('.publish');
    var textareaControls = $(textarea).find('.textarea-controls');
    $(textarea).find('textarea').animate({height: '36px'});
    $(textareaControls).animate({
      opacity: '0',

    });
    $(textareaControls).fadeOut();
  });

  jQuery.timeago.settings.allowFuture = true;

  $(".timeago").timeago();

  $('.comment .close').click(function(){
    var comment = $(this).closest('.comment');
    $(comment).slideUp(function(){
      var comments = $(this).closest('.comments');
      $(this).remove();
      if(!$(comments).find('.comment').length){
        $(comments).closest('.activity').find('.show-comments').fadeOut();
      }
    });
  });

  $('.activity .well > .close').click(function(){
    $(this).closest('.activity').slideUp();
  });

}(window.jQuery);