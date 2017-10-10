window._val_global = {};
window._val_global['page_settings'] = {};
console.log('Sindhura Validaiton');
console.log('Team 6 Validation Starts!');
var cssStyles = '<style>\r\n.tooltip {\r\n position: relative;\r\n display: inline-block;\r\n }\r\n\r\n.tooltip .tooltiptext {\r\n visibility: hidden;\r\n color: black;\r\nborder-radius:8px; \r\n text-align: center;\r\n border: 2px solid black;\r\n padding: 10px 6px 0px 6px;\r\n\r\n \/* Position the tooltip *\/\r\n position: absolute;\r\n z-index: 1;\r\n left: 0%;\r\nmargin-left:15px;\r\n}\r\n\r\n.tooltip .tooltiptext1 {\r\n visibility: hidden;\r\n color: #fff;\r\n text-align: center;\r\n border-radius: 6px;\r\n padding: 10px 6px 0px 6px;\r\n\r\n  \/* Position the tooltip *\/\r\n  position: absolute;\r\n z-index: 1;\r\n top: -150px;\r\n right: 105%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext1 {\r\n visibility: visible;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\nvisibility: visible;\r\n}\r\n\r\n\r\nfont{\r\n font-weight: bold;\r\n}\r\n\r\n#check {position: relative;z-index: 10000;fill: none;stroke: green;stroke-width: 20;stroke-linecap: round;stroke-dasharray: 180;stroke-dashoffset: 180; animation: draw 2s 1 ease;}@keyframes draw {  to {    stroke-dashoffset: 0;  }}\r\nfont{\r\n font-weight: bold;\r\n}\r\n\r\n.greenHiglight{\r\n  animation: 0.5s animateGreenBorder ease 3;\r\n outline: 2px;\r\nbox-shadow: 0 0 0 2px green;}\r\n\r\n@keyframes animateGreenBorder {\r\n  to {\r\n  box-shadow: 0 0 0 2px green;\r\n  }\r\n}\r\n\r\n.yellowHiglight{\r\n  animation: 0.5s animateYellowBorder ease 3\r\n outline: 2px;\r\nbox-shadow: 0 0 0 2px yellow;}\r\n\r\n@keyframes animateYellowBorder {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}\r\n\r\n.redHiglight{\r\n  animation: 0.5s animateRedBorder ease 3!important;\r\n outline: 2px;\r\n}\r\n\r\n@keyframes animateRedBorder {\r\n  to {\r\n  box-shadow: 0 0 0 2px Red;\r\n  }\r\n}\r\n\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;\r\n }\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}\r\n\r\n.blueAnimation{\r\n  animation: 0.5s animateBordertwo ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px #328FAB;\r\n \r\n}\r\n\r\n@keyframes animateBordertwo {\r\n  to {\r\n  box-shadow: 0 0 0 2px ;\r\n  }\r\n}\r\n\r\n@-moz-keyframes blink {\r\n0% {\r\n opacity:1;\r\n}\r\n50% {\r\n opacity:0;\r\n}\r\n100% {\r\n opacity:1;\r\n}\r\n} \r\n\r\n@-webkit-keyframes blink {\r\n0% {\r\n opacity:1;\r\n}\r\n50% {\r\n opacity:0;\r\n}\r\n100% {\r\n opacity:1;\r\n}\r\n}\r\n/* IE */\r\n@-ms-keyframes blink {\r\n0% {\r\n opacity:1;\r\n}\r\n50% {\r\n opacity:0;\r\n}\r\n100% {\r\n opacity:1;\r\n}\r\n} \r\n/* Opera and prob css3 final iteration */\r\n@keyframes blink {\r\n0% {\r\n opacity:1;\r\n}\r\n50% {\r\n opacity:0;\r\n}\r\n100% {\r\n opacity:1;\r\n}\r\n} \r\n.blink-image {\r\n  -webkit-animation-name: blink;\r\n -moz-animation-name: blink;\r\n -o-animation-name: blink;\r\n  animation-name: blink; \r\n  -webkit-animation-iteration-count: 5;\r\n -moz-animation-iteration-count: 5;\r\n -o-animation-iteration-count: 5;\r\n  animation-iteration-count: 5;\r\n-webktit-animation-timing-function: linear;\r\n  -moz-animation-timing-function: linear;\r\n -o-animation-timing-function: linear;\r\n animation-timing-function: linear;\r\n  -webkit-animation-duration: 1s;\r\n -moz-animation-duration: 1s;\r\n -o-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n}\r\n\r\ninfo.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n top: 2px; \r\n}\r\ninfo.tooltips msg {\r\n  position: absolute;\r\n width: 206px;\r\n color: #328FAB;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n white-space: pre-line;  \r\n border: 2px solid #328FAB;\r\n}\r\ninfo:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 55%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}\r\n<\/style>';
var tick = '<tick style="margin-left:6px;"><font color="#328FAB" style="font-size:inherit">&#10004<font></tick>';
var warn_info;//Globally available
window._val_global.addRedirectButton=function(url_catcher){
	var scenario=$('[title="Scenario:"]').parent('span');
	var new_button='<button class="ppm_button url"><a href="https://www.google.co.in" target="_blank" style="text-decoration:none">Link to Process and Compliancy</a></button>';
	if(url_catcher.indexOf('ideaProperties')!=-1)
	{
		if($('[class*="url"]').length==0)
		{
		scenario.prepend(new_button);
		}
	else return;
	}
	else $('[class*="url"]').remove();	
}
window._val_global.apply_page_settings = function (){
			
       $.each(window._val_global['page_settings'], function (name,settings){
		   if (window.location.href.indexOf(settings.hash1) != -1){
			  if($('[id*="validationStyles"]').length==0){
				$('body').append("<div id='validationStyles'>"+cssStyles+"</div>");
				warn_info=$('div[style*="none;"]');
				warn_info.addClass('humane error humane-libnotify-error');
				default_sel_count=$('[class*="timesheet"] [class*="actuals-input form-control"]:not([ng-class*="hasEtcOverride"])');
				console.log(default_sel_count);
				window._val_global.init_page('timesheet', settings,default_sel_count);
			  }
			  window._val_global.changeView(default_sel_count);//When View Changes selectors get updated!
		   }
		  if (window.location.hash.indexOf(settings.hash2) != -1){
			   if ($('[id*="validationStyles"]').length==0) {
				   $('[class="ppm_button_bar"]').append("<div id='validationStyles'>"+cssStyles+"</div>");
				   window._val_global.init_page('ideapage', settings,0);		
			   }
		   }
	    });
        main_interval=window.setTimeout(function () {
		window._val_global.addRedirectButton(window.location.href);
        window._val_global.apply_page_settings();//will execute iteratively
	}, 1500);
}
window._val_global.apply_page_settings();//FIRST FUNCTION WHICH IS CALLED
window._val_global.changeView=function(default_sel_count){
	if(default_sel_count.length!=$('[class*="timesheet"] [class*="actuals-input form-control"]:not([ng-class*="hasEtcOverride"])').length){
			 $('[id*="validationStyles"]').remove();
			 window._val_global.apply_page_settings();
		}
}
window._val_global.init_page = function (name, settings,default_sel_count) 
{
	warnings = 
	{
	  1:"To enable 'Idea Category' and 'Idea Priority', select 'Idea Type'",
	  2:"'Idea Priority' Cannot be 'High' when 'Idea Category' is 'Other' or 'COTS Evaluation'",
	  3:"Work Status cannot be On Hold/Cancelled if either Status is Approved or Progress is started",
	  5:"Objective must be provided.",
	  6:"Business Owner must be provided.",
	  7:"The values for Business Value and Estimated Effort should be between 1 to 100 only.",
	  8:"Finish Date cannot be less than Start Date & must be less than todays date.",
	  9:"If Status is Approved then Work Status cannot be either On-Hold & Cancelled.",
	  10:"If Progress is set to Started then Work Status cannot be either On-Hold & Cancelled.",
	  11:"Progress Cannot be Empty",
	  12:"Status cannot be Empty",
	  13:"Work Hours cannot be zero/empty,Kindly add PTO task",
	  14:"Enter Notes for the days if the total hours are less than 8."
	};
  if(name=='timesheet')
   {
	 track_info=0;//To track count of days havin <8 work hours
	 //***********CUSTOM FUNCTIONS DEFINITIONS******
	 $('[class="timesheet-carousel"]').on('click',function(){//If A NewTimesheet is clicked this function gets executed
		$('[id*="validationStyles"]').remove();
		$('[class*="timesheet-header"][ng-click*="carousel.openNotes"]').removeClass('greenHiglight').find('info14').remove();
		clearTimeout(main_interval);
	    setTimeout(function(){window._val_global.apply_page_settings()},500);
		
	 })
	 Add_Info_Icon = function(key){	
    	info_icon= $("<info"+key +"/>", {
            'class' : 'tooltips'
            ,'html' :  '&nbsp;<img src="https://excers.com/img_letzNav/info-icon.png" width="13" /><msg>' + warnings[key] + '</msg>'
        }).append('<style>\r\ninfo' + key + '.tooltips {\r\nposition: relative;\r\ndisplay: inline-block;\r\ntop:-1px;\r\nfloat: right;\r\nleft: 0px;\r\nwidth: 10px;\r\nmargin-right: 1px;\r\n}\r\ninfo' + key + '.tooltips msg {\r\n font-size:12px;\r\n position: absolute;\r\n width: 179px;\r\n color: #328FAB;\r\n background: #ffffff;\r\n line-height: 22px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n white-space: pre-line;  \r\n border: 2px solid #328FAB;\r\nmargin-left: -172px;\r\n margin-top: 32px;\r\n}\r\ninfo' + key + ':hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left:-150px;\r\n  top: 50%;\r\n  margin-top: 22px;\r\n  margin-left: -5px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');
        return info_icon;}
	
	 V_warnMsg = function (key){	
		var warnStyle =$("<warn" + key + "/>", {
			'class': 'tooltips'
			, 'html': '&nbsp;&nbsp;&nbsp;<img src="http://excers.com/img_letzNav/warn.png" width="10" /><msg>' + warnings[key] + '</msg>'
		}).append('<style>\r\nwarn' + key + '.tooltips {\r\n  position: relative;\r\n  display: inline;\r\n right: 6px; \r\n}\r\nwarn' + key + '.tooltips msg {\r\n  position: absolute;\r\n width: 192px;\r\n color: black;\r\n background: #ffffff;\r\n line-height: 22px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight:normal;\r\n white-space: pre-line;  \r\n border: 2px solid yellow;\r\n}\r\nwarn' + key + ':hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 55%;\r\n  top: 50%;\r\n  margin-top: -20px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');
		return warnStyle;}

	 function TS_blinkInfoIcon(iconSelector){//For Blinking Info Icon
		$(iconSelector).addClass('blink-image');
			window.setTimeout(function () {
				$(iconSelector).removeClass('blink-image');
	        }, 1500);}

	 function check_info_status(i,day_track,day_selector){
		
		 if(parseFloat(day_track.text())<8&&day_track.text().indexOf(',')==-1&&i<=6){
			track_info++;day_selector.removeClass('animation blueAnimation yellowHiglight');}
		 if(track_info>=1&&i==6){
				if($('info14').length==0){
			 	$('[class*="timesheet-header"][ng-click*="carousel.openNotes"]').addClass('greenHiglight').append(Add_Info_Icon(14));}
			 	TS_blinkInfoIcon('info2');track_info=0;}
		else {$('[class*="timesheet-header"][ng-click*="carousel.openNotes"]').removeClass('greenHiglight').find('info14').remove();}}
	 TS_Add_Info_Icon = function(key){
	
    info_icon= $("<info"+key +"/>", {
            'class' : 'tooltips'
            ,'html' :  '&nbsp;<img src="https://excers.com/img_letzNav/info-icon.png" width="25" /><msg>' + info_icon[key] + '</msg>'
        }).append('<style>\r\ninfo' + key + '.tooltips {\r\nposition: relative;\r\ndisplay: inline-block;\r\ntop:-1px;\r\nleft: 0px;\r\nmargin-right: 1px;\r\n}\r\ninfo' + key + '.tooltips msg {\r\n font-size:12px;\r\n position: absolute;\r\n width: 179px;\r\n color: #328FAB;\r\n background: #ffffff;\r\n line-height: 22px;\r\n text-align: center;\r\n visibility: hidden;\r\n \r\n font-weight: bold;\r\n white-space: pre-line;\r\n}\r\ninfo' + key + ':hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left:-150px;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');
        return info_icon;
	}
	var info_icon = 
		{
			1:"<img src='http://excers.com/img_letzNav/ppm/img2.png' />",
		  
	    };
	if($('[ng-class*=" grid.canEdit() && headers.name"]:eq(0)').find('info1').length==0){$('[ng-class*=" grid.canEdit() && headers.name"]:eq(0)').append(TS_Add_Info_Icon(1));}
   //**********CUSTOM FUNCTIONS DEF ENDS********* 
    $(default_sel_count).on('focusout',function()
	 {
	   window.setTimeout(function(){
	    for(i=0;i<=6;i++)
	    {
			console.log('LOOP:'+i);
	      days=$('[class*="table-weekday spreadsheet-width"] [ng-class*="timesheet-header-editable-actual"] span').eq(i);
	      day_selector=$(days).closest('div');//To Get Parent of Each Day
			              /********24 Hours Validation starts *****/
		   if(parseFloat(days.text())>24||days.text().indexOf(',')>-1){
		      	day_selector.removeClass('blueAnimation yellowHiglight').find('warn13').remove();//Remove Prev Animations
			          if(!day_selector.hasClass('animation')) {day_selector.addClass('animation')};
				      if(!warn_info.hasClass('humane-animate')){
					      warn_info.addClass('humane-animate').css({'display':'block'}).text('User should not enter more than 24 hours').fadeOut(2600,'swing',function(){warn_info.removeClass('humane-animate');});}
	       }else{
		      	if(day_selector.hasClass('animation')||day_selector.hasClass('yellowHiglight')) 
					 day_selector.addClass('blueAnimation').removeClass('animation yellowHiglight').find('warn13').remove();}
			            /******24 Hours Validation Ends *******/

		   if(days.text().length==1){//If Empty -not Checking for Sun-0 and Sat-6
			  	day_selector.removeClass('animation blueAnimation yellowHiglight')//Remove Prev Animations
				  if(i>0&&i<6){
				     day_selector.addClass('yellowHiglight');
					   if (!(day_selector.find('warn13').length)) {day_selector.append(V_warnMsg(13));}}
		    }
		   check_info_status(i,days,day_selector);//ToADD Notes
	   }//Loop Ends Here  
     },350);
   });
  }//TimeSheet-Page Ends Here

  if(name=='ideapage')//Idea PAGE VALIDATION STARTSSS*************
  {
	
	 var Add_Info_Icon = function(key){
		 
	 			var info_icon= $("<info"+key +"/>",{
						 'class' : 'tooltips'
						 ,'html' :  '&nbsp;<img src="https://excers.com/img_letzNav/info-icon.png" width="16" /><msg>' + for_info_icon[key] + '</msg>'
						 }).append('<style>\r\ninfo' + key + '.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n top: 0px; \r\n float:right; \r\n left: 0px; \r\n}\r\ninfo' + key + '.tooltips msg {\r\n  position: absolute;\r\n width: 206px;\r\n color: #328FAB;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n white-space: pre-line;  \r\n border: 2px solid #328FAB;\r\n}\r\ninfo' + key + ':hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 55%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');
			    return info_icon;
	 }
	 var for_info_icon = {
				  1: "Idea Priority defines the value that is assigned \nto the idea by the Idea Manager. The value corresponds to the risk priority.\n Choices are: Low (default), Medium, and High.",
				  2: "If enabled,choose preferred Idea Category",
				  3: "Idea Status,defines whether it is \nApproved or Rejected.",
				  4: "Idea Work Status holds options like OnHold,Requested,Cancelled."
	 };
				  
	 if(!$('[name="ideapriority"]').find('info1')[0]){ $('[name="ideapriority"]').after(Add_Info_Icon(1));}
	 if(!$('[name="obj_request_category"]').find('info2')[0]){ $('[name="obj_request_category"]').after(Add_Info_Icon(2));}
	 if($('[name="status"]').attr('type')==undefined){
	    if(!$('[name="status"]').find('info3')[0]){ $('[name="status"]').after(Add_Info_Icon(3));}}
	 if(!$('[name="obj_work_status"]').find('info4')[0]){ $('[name="obj_work_status"]').after(Add_Info_Icon(4));}
	 //Warning Add Function
	  function V_warnMsg(key){	
		 var warnStyle =$("<warn" + key + "/>", {
			 'class': 'tooltips'
			 , 'html': '&nbsp;&nbsp;&nbsp;<img src="https://excers.com/img_letzNav/warn.png" width="15" /><msg>' + warnings[key] + '</msg>'
		 }).append('<style>\r\nwarn' + key + '.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n top: -1px; \r\n}\r\nwarn' + key + '.tooltips msg {\r\n  position: absolute;\r\n width: 192px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 22px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n white-space: pre-line;  \r\n border: 2px solid #ff0000;\r\n}\r\nwarn' + key + ':hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 55%;\r\n  top: 50%;\r\n  margin-top: -20px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');
		 return warnStyle;
	  }
	 /*1.Idea Type Validation*/
	 var Idea_Type = $('[class="tableNestedAttribute"] [name="obj_request_type"]');
	 var Idea_Category = $('[role="presentation"] [name="obj_request_category"]');
	 var Idea_Priority = $('[role="presentation"] [name="ideapriority"]');
		  
		 $(Idea_Category).add(Idea_Priority).prop("disabled", true); 
		 Idea_Type.on("change focusout",function(){
		 var Idea_Type_length = $('[class="tableNestedAttribute"] [name="obj_request_type"]').val();
		 if(Idea_Type_length==""){
			 $(Idea_Category).add(Idea_Priority).prop("disabled", true);
			 addWarning(Idea_Type,1);
			 
		 }else{
			 $(Idea_Category).add(Idea_Priority).prop("disabled", false);    
			 removeWarning(Idea_Type,'warn1');}
	 });
	 /*2,3.idea category and idea priority dependency validations */
	 $('[role="presentation"] [name="ideapriority"],[role="presentation"] [class="tableNestedAttribute"] [name="obj_request_category"], [class="tableNestedAttribute"] [name="obj_request_type"]').on('blur change',function(){
	 
	   var neutral = $('[role="presentation"] [class="tableNestedAttribute"] [name="obj_request_category"] option:selected');
	    var neutral1 = $('[role="presentation"] [name="ideapriority"] option:selected');
	 
		 if(((Idea_Category.prop("disabled")==false)&&(Idea_Priority.prop("disabled")==false))&&((neutral.text() == "Other" || neutral.text() == "COTS Evaluation") && neutral1.text() == "High")){
			addWarning(Idea_Priority,2);
		 }
		 else if((Idea_Priority.val() == "") || (neutral1.text() != "")){
			 removeWarning(Idea_Priority,'warn2');
			 Idea_Priority.removeClass("blueAnimation").siblings('tick').remove(); 
		 }
		 else{removeWarning(Idea_Priority ,'warn2');}
	 });
	 /*4,6. To add color to High, Medium and low and to autocheck checkbox when priority is high*/
	 $('[name="ideapriority"]').on('change',function(){
	    if($('[name="ideapriority"]').prop('disabled')==false){		
		  var priority=$('[name="ideapriority"] option:selected');
	 	  if(priority.text()=='High'){
		    $('[name="ideapriority"]').removeClass('greenHiglight redHiglight yellowHiglight');
		    $('[name="obj_fast_track"]').prop( { checked:true, disabled:true })
		    if(!$('[name="ideapriority"]').hasClass('greenHiglight')) $('[name="ideapriority"]').addClass('greenHiglight')     
		  }else{
	  	    $('[name="ideapriority"]').removeClass('greenHiglight redHiglight yellowHiglight');
	   	    $('[name="obj_fast_track"]').prop( { checked:false, disabled:false })
	  	 	 if(priority.text()=='Low') 
			 		 {if(!$('[name="ideapriority"]').hasClass('redHiglight')) $('[name="ideapriority"]').addClass('redHiglight')}
	   		 if(priority.text()=='Medium') 
			  	{if(!$('[name="ideapriority"]').hasClass('yellowHiglight')) $('[name="ideapriority"]').addClass('yellowHiglight')}}
	  }
    });
	 $('[name="status"],[name="progress_text"],[name="obj_work_status"]').on('focusout change',function(){
		 var progress = $('[name="progress_text"]');
		 var progress_parent=progress.closest('table').closest('td');
		 var status_option=$('[name="status"] option:selected');
		 var w_status_box=$('[name="obj_work_status"]');
		 var work_status=$('[name="obj_work_status"] option:selected');
		 flag=false;//manipulating work status
      //Progress VALIDATION
	     if(progress.val()=="Started"||progress.val()==""){
		   if(progress.val()==""){
			addWarning(progress_parent,11);
		    $(w_status_box).removeClass('animation blueAnimation').siblings('warn3,tick').remove();
		  }else{
		       progress_parent.removeClass('animation').siblings('warn11,tick').remove();
		       if(work_status.text()=="On Hold"||work_status.text()=="Cancelled"){
			   if(!progress_parent.hasClass('animation')) progress_parent.addClass('animation').siblings('tick').remove();
			   flag=false;
		       }else{
			        progress_parent.removeClass('animation');
			       if(!progress_parent.siblings('tick').length) progress_parent.after(tick);
			       flag=true;}
		   };
	     }
	  else 
	   {//Other than Started,this block gets executed
		  progress_parent.removeClass('animation').siblings('warn11,tick').remove();
		  progress_parent.removeClass('animation');
		  if(!progress_parent.siblings('tick').length) progress_parent.after(tick);
		  flag=true;}	
	 //STATUS VALIDATION
	if($('[name="status"]').attr('type')==undefined){
	   if(status_option.text()=="Approved"||status_option.text()=="[--Select--]"){
		   if(status_option.text()=="[--Select--]"){
			 if(!$('[name="status"]').hasClass('animation')) 
			 addWarning($('[name="status"]'),12);
			 $(w_status_box).removeClass('animation blueAnimation').siblings('warn3,tick').remove();
		   }else{
		      $('[name="status"]').removeClass('animation').siblings('warn12').remove();
		      if(work_status.text()=="On Hold"||work_status.text()=="Cancelled"){
		      if(!$('[name="status"]').hasClass('animation')) $('[name="status"]').addClass('animation').siblings('tick').remove();
		      flag=false;} else{
			  $('[name="status"]').removeClass('animation');
			  if(!$('[name="status"]').siblings('tick').length) $('[name="status"]').after(tick);
			  if(!progress.val()=="Started") flag=true;
		    } 
		   }	
	    }else{ //Other than Approved Selected
		 $('[name="status"]').removeClass('animation').siblings('warn12').remove();
		 $('[name="status"]').removeClass('animation');
		 if(!$('[name="status"]').siblings('tick').length) $('[name="status"]').after(tick);
		 if(!progress.val()=="Started")  flag=true;
	     }
	}
	 //Adding ERROR for Work Status
	 if(progress.val()!=""&&status_option.text()!="[--Select--]"){
		 if(flag==true){ removeWarning(w_status_box,"warn3")}
		 else if(flag==false){ if(!w_status_box.hasClass('animation'))addWarning(w_status_box,3)}
	 }	
 
 });
 
//7. Feasibility % = (Business value (1 - 100) * .7 +Estimated Effort (1 - 100) *.5) / 100
	 $('[name="dlt_estimated_effrt"],[name="dlt_business_value"]').on('focusout blur',function () {
		
			 var business_val = $('[name="dlt_business_value"]').val();
			 var estimated_eff = $('[name="dlt_estimated_effrt"]').val();
			 var parse_businessval = parseInt($('[name="dlt_business_value"]').val());
			 var parse_estimatedval = parseInt($('[name="dlt_estimated_effrt"]').val());
			 var feasibility_field=$('label:contains(Feasibility %)').parent('td').siblings('td');
			 if(!isNaN(business_val) && !isNaN(estimated_eff) && (parse_businessval>0) && (parse_businessval<=100) && (parse_estimatedval>0) && (parse_estimatedval<=100)) {
				
				 var feasibility = (business_val*.7 + estimated_eff *.5)/100;
				 feasibility_field.children('span').text(feasibility);
				 removeWarning(feasibility_field.children('span'),'warn7');
			 }
			 else if(business_val=="")
				 $('[name="dlt_business_value"]').val(1);
			 else if(estimated_eff=="")
				 $('[name="dlt_estimated_effrt"]').val(1);
			 else{
				
				 addWarning(feasibility_field.children('span'),7);      
			 }
	 });
	 //5. Objective must be provided
	 $('[name="obj_objective"]').on('focusout blur',function () {
		 var objective = $('[name="obj_objective"]');
		 if (objective.val()=="") addWarning(objective,5);      
		 else removeWarning(objective,'warn5');    
	 });
		 
	 //5. Business Owner must be provided.
	 $('[name="obj_business_owner_text"]').on('focusout',function ()
	 {
		 window.setTimeout(function () 
		 {
		 var business_owner = $('[name="obj_business_owner_text"]');
		 var business_owner_val = $('[class="autosuggest-svl-cell"]').children('input[name="obj_business_owner_text"]').closest('tr').closest('td');
		 if (business_owner.val()=="") addWarning(business_owner_val,6);      
		 else removeWarning(business_owner_val,'warn6');    
		 },1000);
	 });
		 
	 //8. Finish Date cannot be less than Start Date & must be less than today�s date.
	 $('[name="schedule_finish"],[name="schedule_start"]').on('focusout change click',function (){
		 var start = $('[name="schedule_start"][class*="ppm_date_picker_input"]').val();  
		 var finish = $('[name="schedule_finish"][class*="ppm_date_picker_input"]').val(); 
		 var st_split = start.split("/");
		 var fn_split = finish.split("/");
		 var todayTimeStamp = +new Date; // Unix timestamp in milliseconds
		 var oneDayTimeStamp = 1000 * 60 * 60 * 24; // 
		 var diff = todayTimeStamp - oneDayTimeStamp
		 var currdate=new Date(diff); 
		 var start_date=new Date(st_split[2],st_split[0]-1,st_split[1]);
		 var finish_date=new Date(fn_split[2],fn_split[0]-1,fn_split[1]);
	
		 if((start_date>finish_date)||(finish_date<=currdate)){
			 addWarning($('[name="schedule_finish"]'),8);
		 }else removeWarning($('[name="schedule_finish"]'),'warn8');   
	 });
	
  //****************WARNING AREA(addWarn,removeWarn)*****************************
	 function addWarning(selector,num_w){
		 //New Warnings
		 if(selector.siblings('tick').length>0){ selector.siblings('tick').remove();}
		 if(selector.hasClass('blueAnimation')) {selector.removeClass("blueAnimation"); }
		 if(!selector.hasClass('animation')){
			 selector.addClass('animation');
			  selector.after(V_warnMsg(num_w))};
	 }; 
	 function removeWarning(selector,warning){
		 //New Ticks
		 $(warning).remove();
		 selector.removeClass("animation");
		 if(!selector.hasClass('blueAnimation'))  {selector.addClass("blueAnimation");}
		 if(!selector.siblings('tick').length) {
		 selector.after(tick)}; 
	 };//*******************WARNING AREA ENDS******************************************
  }//IdeaPage Validaition Ends
};//INIT PAGE CLOSED
window._val_global['page_settings']['timesheet'] = {
	"hash1": "#/timesheets/timesheet?timesheetId",
	"hash2": "action:pma.ideaProperties"
};