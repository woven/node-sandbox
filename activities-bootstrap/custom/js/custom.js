!function ($) {
  $('.activity .comments').before('<div class="more-comments"><div class="show-comments-wrapper"><a class="show-comments" href="#">Show comments</a></div></div>');
  $('.activity .comments').addClass('collapsed');

  $('textarea').autosize();  

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
  
  $('.new-activity .textarea .content').focus(function(event){
    var textarea = $(this).closest('.textarea');
    var button = textarea.find('.publish');
    var textareaControls = $(textarea).find('.textarea-controls');
    $(textarea).find('textarea').css('padding-bottom','35px');
    var heightTextarea = $(textarea).find('textarea').css('height');
    heightTextarea = heightTextarea + 35;
    $(textarea).find('textarea').animate({height: heightTextarea});
    $(textareaControls).animate({
      opacity: '1',
      
    });
    $(textareaControls).fadeIn();
  });

  $('.new-comment .textarea .content').focus(function(event){
    var newComment = $(this).closest('.new-comment');
    var button = $(newComment).find('.publish');
    var photo = $(newComment).find('.photo');
    var textareaWrapper = $(newComment).find('.textarea');
    if(!$(newComment).hasClass('focused')){
      $(this).removeClass('span5');
      $(this).addClass('span4');
      $(textareaWrapper).removeClass('span5');
      $(textareaWrapper).addClass('span4');
      $(newComment).addClass('focused');
    }
  });


  $('.new-comment .textarea .content').blur(function(event){
    var newComment = $(this).closest('.new-comment');
    var button = $(newComment).find('.publish');
    var photo = $(newComment).find('.photo');
    var textareaWrapper = $(newComment).find('.textarea');
    if($(newComment).hasClass('focused')){
      $(this).addClass('span5');
      $(this).removeClass('span4');
      $(textareaWrapper).addClass('span5');
      $(textareaWrapper).removeClass('span4');
      $(newComment).removeClass('focused');
    }
  });


  $('.new .textarea .content').blur(function(event){
    var textarea = $(this).closest('.textarea');
    var button = textarea.find('.publish');
    var textareaControls = $(textarea).find('.textarea-controls');
    //$(textarea).find('textarea').animate({height: '36px'});
    $(textarea).find('textarea').css('padding-bottom','initial');
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
        $(comments).closest('.activity').find('.more-comments').fadeOut();
      }
    });
  });

  $('.activity .well > .close').click(function(){
    $(this).closest('.activity').slideUp();
  });

  $('.comment-link').click(function(event){
    var activity = $(this).closest('.activity');
    var textarea = $(activity).find('.comment .new textarea');
    if(! $(textarea).is(':focus')){
      $(textarea).focus();
    }
    event.preventDefault();
  });

}(window.jQuery);