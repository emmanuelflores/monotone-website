/* Author: Alex Cho
   Agency: Harlo Interactive
*/
function newLineToBr(str) { return str.replace(/(\r\n|[\r\n])/g, '<br />'); }
function workHover(){
   $('#workThumbs a').hover(function(){
      var _img = $(this).find('img.thumb'), _over = $(this).find('.over');
      _over.css({'z-index':20}).stop().animate({'opacity':1}, 350);
   }, function(){
      var _img = $(this).find('img.thumb'), _over = $(this).find('.over');
      _over.css({'z-index':0}).stop().animate({'opacity':0}, 350);
   });
}
$(window).load(function(){
	
});

$(document).ready(function(){
   // Disable Links
   // --------------------------------------------------------------------------------------------
   $('[href="#"], .disabled').click(function() { return false; });

   // --------------------------------------------------------------------------------
   // Clear Form Inputs
   // --------------------------------------------------------------------------------
   $('input, textarea').bind('focusin', function() { if($(this).val() == $(this).attr('data-default')) { $(this).val(''); } });
   $('input, textarea').bind('focusout', function() { if($(this).val() == '') { $(this).val( $(this).attr('data-default') ); } });
   $('.no-paste').bind('paste', function(){ return false; });
   // --------------------------------------------------------------------------------------------
   // Password Fields
   // --------------------------------------------------------------------------------------------
   (function(){
      var $pass = $('.password'), $pass_clear = $('.password-clear'), $pass_conf_clear = $('.password-conf-clear'), $pass_conf = $('.password-conf');
      
      if($pass.size() > 0 && $pass.val().length > 0){ $pass_clear.css('display','none'); } else { $pass.css('display','none'); }
      if($pass_conf.size() > 0 && $pass_conf.val().length > 0){ $pass_conf_clear.css('display','none'); } else { $pass_conf.css('display','none'); }

      $pass.bind('focusout', function() { if($(this).val() == '') { 
         $(this).css('display','none'); 
         $(this).parent('div').children('.password-clear').css('display','block'); 
         $(this).parent('div').children('.inputTip').css({'z-index':0}).animate({'top':'0'}, 200);
      } });
      $pass_clear.bind('focusin', function() { 
         $(this).css('display','none'); 
         $(this).parent('div').children('.password').css('display','block').focus(); 
         $(this).parent('div').children('.inputTip').css({'z-index':10}).animate({'top':'-25px'}, 200);
      });
      $pass_conf.bind('focusout', function() { if($(this).val() == '') { 
         $(this).css('display','none'); 
         $(this).parent('div').children('.password-conf-clear').css('display','block'); 
         $(this).parent('div').children('.inputTip').css({'z-index':0}).animate({'top':'0'}, 200);
      } });
      $pass_conf_clear.bind('focusin', function() { 
         $(this).css('display','none'); 
         $(this).parent('div').children('.password-conf').css('display','block').focus(); 
         $(this).parent('div').children('.inputTip').css({'z-index':10}).animate({'top':'-25px'}, 200);
      });
   })();
 
   $(window).bind('scroll', function(){
      if ($(this).scrollTop() > 100) { $('.bcktoTop').fadeIn(); } else { $('.bcktoTop').fadeOut(); }
   });

   $('nav').stickTop('-111');

   $('.no-mobile #floatNav').stickBot('0');

   $('.time').each(function(){$(this).timeago();});

   // scroll back to top
   $('.backToTop').click(function(event){
      event.stopPropagation();
      $('body,html').animate({scrollTop: 0}, 800);
      return false;
   });
   $('.toContact').click(function(event){
      event.stopPropagation();
      var height = $('html,body').height();
      $('body,html').animate({scrollTop: height}, 800);
      return false;
   });
   // share expand
   $('a.share').click(function(event){
      event.stopPropagation();
      $(this).hide();
      $('.share_links').fadeIn(600);
      return false;
   });

   // scroll to comments
   $('.viewComments').click(function(event){
      var obj = $('.commentSection');
      //get y value of comments
      pos = obj.offset().top;
      pos += 'px';
      $('body,html').animate({scrollTop: pos}, 800);
      $('.commentslink a').trigger('click');
      return false;
   });

   // map/directions fancy box
   $("a#directions").fancybox({type: 'iframe', padding:0, height: 450, width: 800});

   $('.pop_gram').fancybox();
   $('a.popText').fancybox({type:'inline', padding:0, height: 510});
   $('a.newsPop').fancybox({type:'inline', padding:0});

   // human checkbox handler
   $('.check_send .checkbox, label.human').click(function(){
      if($(this).parent().find('#human').val()=='0'){
         $(this).parent().find('#human').val('1');
         $(this).parent().find('.checkbox').html('x');
      }else{
         $(this).parent().find('#human').val('0');
         $(this).parent().find('.checkbox').html('');
      }
   });

   $('.harlo_check .checkbox, label.harlo').click(function(){
      if($(this).parent().find('#harlo').val()=='0'){
         $(this).parent().find('#harlo').val('1');
         $(this).parent().find('.checkbox').html('x');
      }else{
         $(this).parent().find('#harlo').val('0');
         $(this).parent().find('.checkbox').html('');
      }
   });

   $('.schmooze_check .checkbox, label.schmooze').click(function(){
      if($(this).parent().find('#schmooze').val()=='0'){
         $(this).parent().find('#schmooze').val('1');
         $(this).parent().find('.checkbox').html('x');
      }else{
         $(this).parent().find('#schmooze').val('0');
         $(this).parent().find('.checkbox').html('');
      }
   });

   $('.other_check .checkbox, label.other').click(function(){
      if($(this).parent().find('#other').val()=='0'){
         $(this).parent().find('#other').val('1');
         $(this).parent().find('.checkbox').html('x');
      }else{
         $(this).parent().find('#other').val('0');
         $(this).parent().find('.checkbox').html('');
      }
   });

   // contact form select dropdown handler
   $('#contactForm #typeSelect').click(function(event){
      event.stopPropagation();
      if($(this).hasClass('disabled')){
         //do nothing, it's disabled
      }else{
         if($(this).find('.options').hasClass('hide')){
            $(this).find('.options').removeClass('hide');
            $('#contactForm #typeSelect .option').click(function(){
               var newVal = $(this).find('.val').html();
               $('#contactForm #typeSelect .placeholder .val').html(newVal);
               $('#contactForm input#type').val(newVal);
            });
         }else{
            $(this).find('.options').addClass('hide');
         }
      }
   });

   // hide dropdown when mouse clicks outside of element
   $('html').click(function(){
      if($('#typeSelect .options').hasClass('hide')){
         //nothing
      }else{
         $('#typeSelect .options').addClass('hide');
      }

      if($('#employmentSelect .options').hasClass('hide')){
         //nothing
      }else{
         $('#employmentSelect .options').addClass('hide');
      }
   });

   $('.swtch.inactive').css({'opacity':.4});
   $('.swtch.active').css({'opacity':.99});

   $('.swtch').hover(function(){
      if($(this).is('.inactive')){ $(this).stop().fadeTo(250, .99, 'easeInQuad'); } 
   }, function(){
      if($(this).is('.inactive')){ $(this).stop().fadeTo(250, .4, 'easeOutQuad'); } 
   });

   $('nav a.home').find("span").hide().end().hover(function(){
      if($('nav').is('.delay')){ $('a.home').find("span").stop(true, true).delay(150).fadeIn(350); 
      }else{$('a.home').find("span").stop(true, true).fadeIn(350);}
   }, function(){
      $('a.home').find("span").stop(true, true).fadeOut(350);
   });
   
   $('.home .link a').css({backgroundPosition:'(-179px 0)'});
   $('.projects .link a, .community .link a, .commentslink a').css({backgroundPosition:'(-100px -168px)'});

   $('.home .link a').hover(function(){
      _arrow = $(this).find('span.arrowLarge');
      _arrow.stop().animate({backgroundPosition:'(-145px 0)'}, 150);
   }, function(){
      _arrow = $(this).find('span.arrowLarge');
      _arrow.stop().animate({backgroundPosition:'(-179px 0)'}, 150);
   });
   $('.projects .link a, .community .link a, .commentslink a').hover(function(){
      _arrow = $(this).find('span.arrowLarge');
      _arrow.stop().animate({backgroundPosition:'(-100px -134px)'}, 150);
   }, function(){
      _arrow = $(this).find('span.arrowLarge');
      _arrow.stop().animate({backgroundPosition:'(-100px -168px)'}, 150);
   });
   // footer contact form - switch between types
   $('#contactForm .contactFormSwitch').click(function(){
      var self = $(this), form = $('#contactForm'), activeLink = form.find('a.contactFormSwitch.active'), inactiveLink = form.find('a.contactFormSwitch.inactive');
      activeLink.addClass('inactive').removeClass('active').stop().fadeTo(250, .4, 'easeOutQuad');
      if(self.is('.inactive')){
         self.addClass('active').removeClass('inactive').stop().fadeTo(250, .99, 'easeInQuad');
         if(self.is('.RFPSwitch')){
            //this is the contact form, switch to RFP
            form.find('.subjectline').val('Request For Proposal Form Submission');
            $('#contactForm #typeSelect, #contactForm #scopeSelect').removeClass('disabled');
            $('#contactForm #scopeSelect').removeClass('shade');
            $('#contactForm #phone, #contactForm #company, #contactForm #website').removeClass('disabledBox');
            $('textarea.txtmsg').attr('data-default', 'Project Information').html('Project Information');
         }else{
            //this is the RFP form, switch to Contact
            form.find('.subjectline').val('Contact Form Submission');
            $('#contactForm #scopeSelect').addClass('shade');
            $('#contactForm #typeSelect').addClass('disabled');
            $('#contactForm #phone, #contactForm #company, #contactForm #website').addClass('disabledBox');
            $('textarea.txtmsg').attr('data-default', 'Comments').html('Comments');
         }
      }
      return false;
   });   
   
   $('#contactForm .disabledInput, .disabledBox').click(function(){
      var form = $('#contactForm'), activeLink = form.find('a.contactFormSwitch.active'), inactiveLink = form.find('a.contactFormSwitch.inactive');
      if($('.questionSwitch').is('.active')){
         activeLink.addClass('inactive').removeClass('active').stop().fadeTo(250, .4, 'easeOutQuad');
         inactiveLink.addClass('active').removeClass('inactive').stop().fadeTo(250, .99, 'easeInQuad');
         form.find('.subjectline').val('Request For Proposal Form Submission');
         $('#contactForm #scopeSelect').removeClass('shade');
         $('#contactForm #typeSelect').removeClass('disabled');
         $('#contactForm #phone, #contactForm #company, #contactForm #website').removeClass('disabledBox');
         $('textarea.txtmsg').attr('data-default', 'Project Information').html('Project Information');
      }
   });

   $('.panelSwitch').click(function(){
      var self = $(this), parent = self.parent().parent().parent('.rightPanel'), activelink = parent.find('.panelSwitch.active'), inactiveLink = parent.find('.panelSwitch.inactive'), activepanel = parent.find('.panel.active'), inactivepanel = parent.find('.panel.inactive');
      if(self.is('.inactive')){
         inactiveLink.addClass('active').removeClass('inactive').stop().fadeTo(250, .99, 'easeInQuad');
         activelink.addClass('inactive').removeClass('active').stop().fadeTo(250, .4, 'easeOutQuad');
         activepanel.removeClass('active').addClass('inactive').fadeOut(200, function(){
            inactivepanel.removeClass('inactive').addClass('active').fadeIn(200);
         });
      }
   });   

   $('#floatDetails, #jobForm').stickySidebar({speed:250,constrain:true,easing: "easeInOutQuad"});

   $('#postDetails').stickySidebar({speed:250,constrain:true,easing: "easeInOutQuad"}, function(){ $(this).css('padding-top', '50px');});

	$('.viewMoreWork').click(function(){
		var _self = $(this), _filter = _self.attr('data-filter'), _currPage = _self.attr('data-page'), nextPage = Number(_currPage)+Number(1), _href = base_url+'projects/more_projects/'+_filter+'/'+_currPage;
      _self.attr('data-page', nextPage);
      if(!_self.is('.disabled')){
         $.ajax({ type: "GET", url: _href, 
            success: function(data) {
               var $newInput = $("'"+data.stuff+"'");
               if(data.more == 'yes'){
                  $('#workThumbs .starter').append( $newInput ).isotope( 'insert', $newInput );
                  $('#floatNav').stickBot('0');
               }else{
                  $('#workThumbs').append( $newInput );
                  $('div.noMore').delay(5000).slideUp(600);
                  $('#floatNav').stickBot('0');
               }
               if(data.projectCount<6){
                  $('.viewMoreWork').addClass('disabled').delay(1000).slideUp(200);
               }else{
                  $('.viewMoreWork').removeClass('disabled').delay(1000).slideDown(200);
               }
               $('#workThumbs .thumb .over').each(function(){
                  var _self = $(this), _bg = _self.attr('data-bg');
                  _self.css({'background-image':'url('+_bg+')', 'opacity':0});
               });
               workHover();
            }
         });
      }
	});
   workHover();
   $('.viewMoreCommunity').click(function(){
      var _self = $(this), _filter = _self.attr('data-filter'), _currPage = _self.attr('data-page'), nextPage = Number(_currPage)+Number(1), _href = base_url+'social/more_community/'+_filter+'/'+_currPage;
      _self.attr('data-page', nextPage);
      if(!_self.is('.disabled')){
         $.ajax({ type: "GET", url: _href, 
            success: function(data) {
               var $newInput = $("'"+data.stuff+"'");
               if(data.more == 'yes'){
                  $('#communityContain').append( $newInput ).isotope( 'insert', $newInput );
                  $('.time').each(function(){$(this).timeago();});
               }else{
                  $('#communityList').append( $newInput );
                  $('.viewMoreCommunity').addClass('disabled').html('The <span class="accent">End</span>!');
                  $('div.noMore').delay(5000).slideUp(600);
               }
               if(data.communityCount<12){
                  $('.viewMoreCommunity').addClass('disabled').delay(1000).slideUp(200);
               }else{
                  $('.viewMoreCommunity').removeClass('disabled').delay(1000).slideDown(200);
               }
            }
         });
      }
   });

	$('#communityContain').isotope({
  	  	itemSelector: '.item', layoutMode: 'masonry', masonry: { columnWidth: 400, gutterWidth: 20 },
		getSortData : {
		    date : function ( $elem ) {
		      return parseInt($elem.attr('data-date'));
		    },
		    popularity : function ( $elem ) {
		      return parseInt($elem.attr('data-popularity'));
		    },
		    type : function ( $elem ) {
		      return $elem.attr('data-type');
		    }
		}
  	});
   $('#workThumbs .starter').isotope({
      itemSelector: 'a.item', layoutMode: 'masonry', masonry: { columnWidth: 400, gutterWidth: 20 }
   });
   $('a.filterProj').click(function(){
      var _self = $(this), _filter = _self.attr('data-filter'), _currPage = '0', _href = base_url+'projects/more_projects/'+_filter+'/'+_currPage;
      $('a.filterProj').removeClass('active');
      _self.addClass('active');
      $('.viewMoreWork').removeClass('disabled').attr('data-filter', _filter).attr('data-page', 1);
      $.ajax({ type: "GET", url: _href, 
         success: function(data) {
            var $children = $('a.item');
            var $newInput = $("'"+data.stuff+"'");
            $('div.noMore').remove();
            $('.starter').isotope( 'remove', $children);
            if(data.more == 'yes'){
               $('.starter').append( $newInput ).isotope( 'insert', $newInput );
            }else{
               $('#workThumbs').append( $newInput );
               $('div.noMore').delay(5000).slideUp(600);
            }
            if(data.projectCount<6){
               $('.viewMoreWork').addClass('disabled').slideUp(200);
            }else{
               $('.viewMoreWork').removeClass('disabled').slideDown(200);
            }
            $('#workThumbs .thumb .over').each(function(){
               var _self = $(this), _bg = _self.attr('data-bg');
               _self.css({'background-image':'url('+_bg+')', 'opacity':0});
            });
            workHover();
         }
      });
     return false;
   });
   $('a.filterBy').click(function(){
      var _self = $(this), _filter = _self.attr('data-filter'), _currPage = '0', _href = base_url+'social/more_community/'+_filter+'/'+_currPage;
      $('a.filterBy').removeClass('active');
      _self.addClass('active');
      $('.viewMoreCommunity').removeClass('disabled').attr('data-filter', _filter).attr('data-page', 1);
      $.ajax({ type: "GET", url: _href, 
         success: function(data) {
            $('div.noMore').remove();
            var $children = $('div.item');
            var $newInput = $("'"+data.stuff+"'");
            if(data.more=='yes'){
               $('#communityContain').isotope( 'remove', $children).append( $newInput ).isotope( 'insert', $newInput );
               $('.time').each(function(){$(this).timeago();}); 
            }else{
               $('#communityContain').isotope( 'remove', $children);
               $('#communityList').append( $newInput );
               $('div.noMore').delay(5000).slideUp(600);
            }   
            if(data.communityCount<12){
               $('.viewMoreCommunity').html('The <span class="accent">End</span>!').addClass('disabled');
            }else{
               $('.viewMoreCommunity').html('View <span class="accent">More</span><span class="arrowLarge"></span>').removeClass('disabled');
            }
         }
      });
     return false;
   });

  	$('.sort_type').harscroll({
  		selector: '.val', effect: 'slide', direction: 'vertical', height: '22px'
  	}, function(){
			var sort_type = $(this).parents('.sort').find('.sort_type').find('.selected').attr('id'),
             sort_dir = $(this).parents('.sort').find('.sort_type').find('.selected').attr('data-dir');
         if(sort_dir == 'false'){ dir = false; }else{ dir = true; }
         $('#communityContain').isotope({sortBy: sort_type, sortAscending:dir});
  	});

   // --------------------------------------------------------------------------------------------
   // Contact Form
   // --------------------------------------------------------------------------------------------
   $('input#scopedoc').change(function(e){
      var _self = $(this), path = _self.val(), $form = $('form.contact'), $message = $form.find('.message').hide(), _errorColor = '#ed1c24', formdata = false;

      if(path.indexOf('\\')){ path = path.split('\\');
      }else{ path = path.split('/'); }
      
      var size = path.length;
      var filename = path[(size-1)];
      $('#scopeSelect .val').html(filename).addClass('newScope').removeClass('default');
      $('#scopeSelect .placeholder').removeClass('error');
   });



   $('.submit').click(function(event){
      console.log('submit');
      var $form = $(this).parents('form'), $reqFields = $form.find('.req').not(':radio,:checkbox,:submit,:hidden'),
         $allFields = $form.find('input, textarea').not(':submit, :checkbox, :radio, [type="hidden"], :disabled'),
         $email = $form.find('input#email'), _emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
         $human = $form.find('#human'), $message = $form.find('.message').hide(), _errorColor = '#ed1c24', _e=0;
      
      $message.html('').removeClass('error success').hide();
      $reqFields.removeClass('error');
      $form.find('.check_send .checkbox').removeClass('error');
      $reqFields.each(function() {
         if($(this).val() == $(this).attr('data-default') || $(this).val().replace(/^\s+|\s+$/g, '') == '')
         {
            _e=1;
            $(this).addClass('error');
         }
      });
      
      // Check for errors
      if(_e==1) { $message.html('Please fill in the required fields above.').addClass('error').show(); 
      }else if( _emailRegEx.test($email.val()) == false){
         // Check for a valid Email Address
         $email.addClass('error');
         $message.html('Please provide a valid email address.').addClass('error').show();
      }else if( $human.val()!= '1' ){
         $form.find('.check_send .checkbox').addClass('error');
         $message.html('Please prove that you are human.').addClass('error').show();
      }else{
         $form.find('input.json').val('1');
         var _action = $form.attr('action');

         $form.ajaxSubmit({
            url:_action, type:'post', dataType:'json', 
            success: function(data){
               if(data.error == '0'){
                  $human.val('0');
                  $form.find('.check_send .checkbox').html('').removeClass('error');
                  $form.find('.placeholder .val').each(function(){
                     $(this).html($(this).attr('data-default')).addClass('default');
                  });
                  $allFields.each(function() { $(this).val($(this).attr('data-default')).focus();});
                  $message.addClass('success').html( data.msg ).show();
                  $('form.contact').resetForm();
               }else { $message.addClass('error').html( data.msg ).show();}
            }
         }); 


         // var _action = $form.attr('action'), _formData = $form.serialize()+'&json=1';
         // $.ajax({ url:_action, type:'post', dataType:'json', data:_formData,
         //    success:function(data){
         //       if(data.error == 0){  
         //          $human.val('0');
         //          $form.find('.check_send .checkbox').html('').removeClass('error');
         //          $allFields.each(function() { $(this).val($(this).attr('data-default')).focus();});
         //          $message.addClass('success').html( data.msg ).show();
         //       }else { $message.addClass('error').html( data.msg ).show();}
         //    }
         // });
      }
      
      // return false;
   });
   // --------------------------------------------------------------------------------------------
   // Comment Form
   // --------------------------------------------------------------------------------------------
   $('form.commentFrm').submit(function(e){
      var $form = $(this), $reqFields = $form.find('.req').not(':radio,:checkbox,:submit,:hidden'),
         $allFields = $form.find('input, textarea').not(':submit, :checkbox, :radio, [type="hidden"], :disabled'),
         $email = $form.find('input.email'), _emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
         $website = $form.find('input.website'), _urlRegex = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
         $human = $form.find('#human'), $message = $form.find('.message').hide(), _errorColor = '#ed1c24', _e=0, 
         $msg = $form.find('textarea.msg'), _whiteSpaceRegex = /(?:[\r\n]*)(.+)(?:[\r\n]*)/;
      
      e.preventDefault();

      // Remove all errors notification
      $message.html('').removeClass('error success').hide();
      $reqFields.removeClass('error');
      $website.removeClass('error');
      $form.find('.check_send .checkbox').removeClass('error');

      // Check all .req fields for input
      $reqFields.each(function() {
         if($(this).val() == $(this).attr('data-default') || $(this).val().replace(/^\s+|\s+$/g, '') == ''){
            _e=1; $(this).addClass('error');
         }
      });

      // Replace any line breaks with <br>
      if(_whiteSpaceRegex.test($msg.val())==true){
         $newmsg = newLineToBr($msg.val());
         $msg.val($newmsg);   
      }

      // Check for errors
      if(_e==1) { $message.html('Please fill in the required fields below.').addClass('error').show(); 
      }else if($website.val() != $website.attr('data-default') && _urlRegex.test($website.val()) == false){
         // Check for a valid Website Address
         $website.addClass('error');
         $message.html('Please format website as http://example.com').addClass('error').show();
      }else if( _emailRegEx.test($email.val()) == false){
         // Check for a valid Email Address
         $email.addClass('error');
         $message.html('Please provide a valid email address.').addClass('error').show();
      }else if( $human.val()!= '1' ){
         // Captcha check
         $form.find('.check_send .checkbox').addClass('error');
         $message.html('Please prove that you are human.').addClass('error').show();
      }else{
         var _action = $form.attr('action'), _formData = $form.serialize()+'&json=1';
         $.ajax({ url:_action, type:'post', dataType:'json', data:_formData,
            success:function(data){
               $('#commentForm').stickySidebar("remove");
               if(data.success == true){  
                  var _last = $('.comment', '.commentsWrapper').last();
                  var _wrap = $('.commentsWrapper');
                  $human.val('0');

                  $('#comments span.counter, a.viewComments .note').html(data.count);

                  $form.find('.check_send .checkbox').html('').removeClass('error');
                  $allFields.each(function() { $(this).val($(this).attr('data-default')).focus();});
                  $message.addClass('success').html( data.msg ).show();
                  _wrap.find('.noComments').slideUp(250, function(){$('.noComments').remove();});
                  _wrap.prepend(data.comment).children('.comment:first').hide().slideDown(250, function(){
                     $('#commentForm').stickySidebar({speed:250,constrain:true,easing: "easeInOutQuad"});
                  });
                  if(data.count>=3){
                     _last.slideUp(250, function(){ $(this).remove(); });
                  }
                  if($('.viewMoreComments').is('.noshow') && data.count>=3){
                     $('.viewMoreComments').addClass('show').removeClass('noshow').slideDown(250);
                     $('.viewMoreComments a').addClass('enabled').removeClass('disabled').html('View More Comments');
                  }
               }else { $message.addClass('error').html( data.msg ).show();$('#commentForm').stickySidebar({speed:250,constrain:true,easing: "easeInOutQuad"});}
            }
         });
      }
      return false;
   });

   $('.viewMoreComments a').click(function(){
      var _self = $(this), _currPage = _self.attr('data-page'), nextPage = Number(_currPage)+Number(1), _parentid = _self.attr('data-parent'), _type = _self.attr('data-type'),_href = base_url+'forms/more_comments/'+_parentid+'/'+_type+'/'+_currPage;
      _self.attr('data-page', nextPage);
      if(!_self.is('.disabled')){
         $.ajax({ type: "GET", url: _href, 
            success: function(data) {
               var $newInput = $("'"+data.stuff+"'");
               if(data.more == 'yes'){
                  $('#commentForm').stickySidebar("remove");
                  $('.commentsWrapper').append($('<div class="more clearfix" style="display:none;">').html($newInput).fadeIn(500, function(){
                     $('#commentForm').stickySidebar({speed:250,constrain:true,easing: "easeInOutQuad"});
                  }));
               }else{
                  _self.addClass('disabled').html(data.stuff);
               }
            }
         });
      }
   });
   if($('#comments').is('.hasComment')){
      $('#commentForm').stickySidebar({speed:250,constrain:true,easing: "easeInOutQuad"});
   }

   $('.commentslink a').click(function(){
      var _self = $('section.commentslink'), _selector = $('section#comments');
      _self.slideUp(350);
      _selector.slideDown(350, function(){
         $('#commentForm').stickySidebar({speed:250,constrain:true,easing: "easeInOutQuad"});
      });
      return false;
   });
   
   // --------------------------------------------------------------------------------------------
   // Employment Application Form
   // --------------------------------------------------------------------------------------------
   
   $('#employmentSelect').click(function(event){
      event.stopPropagation();
      if($(this).hasClass('disabled')){
         //do nothing, it's disabled
      }else{
         if($(this).find('.options').hasClass('hide')){
            $(this).find('.options').removeClass('hide');
            $('#employmentSelect .option').click(function(){
               var newVal = $(this).find('.val').html();
               $('#employmentSelect .placeholder .val').html(newVal).removeClass('default');
               $('#employmentSelect input#position').val(newVal);
               $('#employmentSelect .placeholder').removeClass('error');
            });
         }else{
            $(this).find('.options').addClass('hide');
         }
      }
   });
   //file upload filename display handler
   $('input#resume').change(function(e){
      var _self = $(this), path = _self.val(), $form = $('form.jbfrm'), $message = $form.find('.message').hide(), _errorColor = '#ed1c24', formdata = false;

      if(path.indexOf('\\')){ path = path.split('\\');
      }else{ path = path.split('/'); }
      
      var size = path.length;
      var filename = path[(size-1)];
      $('#fileSelect .val').html(filename).addClass('newRes').removeClass('default');
      $('#fileSelect .placeholder').removeClass('error');
   });

   $('form.jbfrm').submit(function(e){
      var $form = $(this), $reqFields = $form.find('.req').not(':radio,:checkbox,:submit,:hidden'),
         $allFields = $form.find('input, textarea').not(':submit, :checkbox, :radio, [type="hidden"], :disabled'),
         $email = $form.find('input.email'), _emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
         $website = $form.find('input.website'), _urlRegex = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
         $human = $form.find('#human'), $message = $form.find('.message').hide(), _errorColor = '#ed1c24', _e=0, 
         $msg = $form.find('textarea.msg'), _whiteSpaceRegex = /(?:[\r\n]*)(.+)(?:[\r\n]*)/;
      
      e.preventDefault();

      // Remove all errors notification
      $message.html('').removeClass('error success').hide();
      $reqFields.removeClass('error');
      $website.removeClass('error');
      $form.find('.check_send .checkbox, #employmentSelect .placeholder, #fileSelect .placeholder').removeClass('error');

      // Check all .req fields for input
      $reqFields.each(function() {
         if($(this).val() == $(this).attr('data-default') || $(this).val().replace(/^\s+|\s+$/g, '') == ''){
            _e=1; $(this).addClass('error');
         }
      });

      // Replace any line breaks with <br>
      if(_whiteSpaceRegex.test($msg.val())==true){
         $newmsg = newLineToBr($msg.val());
         $msg.val($newmsg);   
      }

      // Check for errors
      if(_e==1) { $message.html('Please fill in the required fields below.').addClass('error').show(); 
      }else if($website.val() != $website.attr('data-default') && _urlRegex.test($website.val()) == false){
         // Check for a valid Website Address
         $website.addClass('error');
         $message.html('Please format website as http://example.com').addClass('error').show();
      }else if( _emailRegEx.test($email.val()) == false){
         // Check for a valid Email Address
         $email.addClass('error');
         $message.html('Please provide a valid email address.').addClass('error').show();
      }else if( $human.val()!= '1' ){
         // Captcha check
         $('.check_send .checkbox').addClass('error');
         $message.html('Please prove that you are human.').addClass('error').show();
      }else if($('#employmentSelect .val').is('.default')){
          $('#employmentSelect .placeholder').addClass('error');
          $message.html('Please select a position to apply for.').addClass('error').show();
      }else if($('#fileSelect .val').is('.default')){
          $('#fileSelect .placeholder').addClass('error');
          $message.html('Please click the browse button and add a resume.').addClass('error').show();
      }else{
         $form.find('input.json').val('1');
         var _action = $form.attr('action');

         $form.ajaxSubmit({
            url:_action, type:'post', dataType:'json', 
            success: function(data){
               if(data.error == '0'){
                  $human.val('0');
                  $form.find('.check_send .checkbox').html('').removeClass('error');
                  $form.find('.placeholder .val').each(function(){
                     $(this).html($(this).attr('data-default')).addClass('default');
                  });
                  $allFields.each(function() { $(this).val($(this).attr('data-default')).focus();});
                  $message.addClass('success').html( data.msg ).show();
                  $('form.jbfrm').resetForm();
               }else { $message.addClass('error').html( data.msg ).show();}
            }
         }); 
          // $form.resetForm();
      }

      return false;
   });
   // --------------------------------------------------------------------------------------------
   // Newsletter Form
   // --------------------------------------------------------------------------------------------
   $('form.newsForm').submit(function(){
      var $form = $(this), $reqFields = $form.find('.req').not(':radio,:checkbox,:submit,:hidden'),
         $allFields = $form.find('input, textarea').not(':submit, :checkbox, :radio, [type="hidden"], :disabled'),
         $email = $form.find('input#email'), _emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
         $message = $form.find('.message').hide(), _errorColor = '#ed1c24', _e=0;
      
      $message.html('').removeClass('error success').hide();
      $reqFields.removeClass('error');
      $reqFields.each(function() {
         if($(this).val() == $(this).attr('data-default') || $(this).val().replace(/^\s+|\s+$/g, '') == ''){
            _e=1; $(this).addClass('error');
         }
      });
      // Check for errors
      if(_e==1) { $message.html('Please fill in the required fields above.').addClass('error').show(); 
      }else if( _emailRegEx.test($email.val()) == false){
         // Check for a valid Email Address
         $email.addClass('error');
         $message.html('Please provide a valid email address.').addClass('error').show();
      }else if( $form.find('#harlo').val() == 0 && $form.find('#schmooze').val() == 0 && $form.find('#other').val() == 0 ){
         $message.html('Please choose a category to recieve emails from.').addClass('error').show();
      }else{
         $form.find('input.json').val('1');
         var _action = $form.attr('action'), _formData = $form.serialize()+'&json=1';
         $.ajax({ url:_action, type:'post', dataType:'json', data:_formData,
            success:function(data){
               if(data.error == 0){ 
                  console.log(data.debug); 
                  $form.find('#harlo, #schmooze, #other').val('0');
                  $form.find('.harlo_check .checkbox, .schmooze_check .checkbox, .other_check .checkbox').html('').removeClass('error');
                  $allFields.each(function() { $(this).val($(this).attr('data-default')).focus();});
                  $message.addClass('success').html( data.msg ).show();
                  setTimeout("$.fancybox.close()", 3000);
               }else { $message.addClass('error').html( data.msg ).show();}
            }
         });
      }
      return false;
   });
   // --------------------------------------------------------------------------------------------
   // Sliders
   // --------------------------------------------------------------------------------------------
   var titleSlider = $('ul.title_slider').bxSlider({
      auto:true, pause: 9000, startingSlide:0, displaySlideQty:1, moveSlideQty:1, mode:'fade',
      infiniteLoop: true, controls: false, speed: 500, pager:false,
      onAfterSlide:function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
         currentSlideHtmlObject.find('.title').stop().delay(500).animate({top:'0px'}, 500);
         currentSlideHtmlObject.find('.subtitle').stop().delay(500).animate({bottom:'0px'}, 500);
      },
      onBeforeSlide:function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
         var slideNum = totalSlideQty;
         if(slideNum == '1'){ titleSlider.stopShow();
         }else{         
            currentSlideHtmlObject.find('.title').stop().animate({top:'-200px'}, 300);
            currentSlideHtmlObject.find('.subtitle').stop().animate({bottom:'-200px'}, 300);
         }
      }
   });
   var bodySlider = $('ul.body_slider').bxSlider({
      auto:true, pause: 4500, startingSlide:0, displaySlideQty:1, moveSlideQty:1, mode:'fade',
      infiniteLoop: true, controls: false, speed: 500, pager:true, pagerSelector:'.numbers'
   });
   $('section.slider .arrow-prev').bind('click', function(){
      bodySlider.goToPreviousSlide();
      return false;
   });
   $('section.slider .arrow-next').bind('click', function(){
      bodySlider.goToNextSlide();
      return false;
   });

   var testimonialSlider = $('ul.testimonial_slider').bxSlider({
      auto:true, pause: 6000, startingSlide:0, displaySlideQty:1, moveSlideQty:1, mode:'fade',
      infiniteLoop: true, controls: false, speed: 500, pager:true, pagerSelector:'.test_numbers'
   });
   $('section#testimonials .test_prev').bind('click', function(){
      testimonialSlider.goToPreviousSlide();
      return false;
   });
   $('section#testimonials .test_next').bind('click', function(){
      testimonialSlider.goToNextSlide();
      return false;
   });
   $('.text_3 a span.over').each(function(){
      $(this).css({'opacity':0});
   });
   $('.text_3 a').hover(function(){
      $(this).find('.over').stop().animate({'opacity':1}, 300);
   }, function(){
      $(this).find('.over').stop().animate({'opacity':0}, 300);
   });
   $('#workThumbs .thumb .over').each(function(){
      var _self = $(this), _bg = _self.attr('data-bg');
      _self.css({'background-image':'url('+_bg+')', 'opacity':0});
   });
});

