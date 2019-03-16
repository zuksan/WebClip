$(document).ready(function() {
	$("#popup_clip").focus();	// clip button get focus
	$("#popup_clip").click(function(){
		chrome.tabs.getSelected(null, function(tab) {	//default to select current tab
			var url = tab.url ? tab.url.replace(/#.*$/, '') : ''; // drop #hash
	        var favicon;
	        var delay;
			
	        if (tab.favIconUrl && tab.favIconUrl != '' 
			&& tab.favIconUrl.indexOf('chrome://favicon/') == -1) {
				// favicon appears to be a normal url
	            favicon = tab.favIconUrl;
	            delay = 0;
	        }
	        else {
				// couldn't obtain favicon as a normal url, try chrome://favicon/url
	            favicon = 'chrome://favicon/' + url;
	            delay = 100; // larger values will probably be more reliable
	        }
			
	        setTimeout(function() {
				/// set favicon wherever it needs to be set here
	            console.log('delay', delay, 'tabId', tab.id, 'favicon', favicon);
			}, delay);
			
	        var faviconImgTag = '<img src="';
	        faviconImgTag += tab.favIconUrl;
	        faviconImgTag += '" height="25" width="25">';
	        $("#res_favicon").get(0).innerHTML=faviconImgTag;
	        $("#res_url").get(0).innerHTML=url + ' '+ tab.title;
	        //Get Input Element
	    	//var copyDiv = document.getElementsByTagName('div')[1];
	    	var copyDiv = $("#res_url");
			copyDiv.select();
	    	//Give the text element focus
	    	//copyDiv.focus();

	    	//Select all content
	    	//document.execCommand('SelectAll');

	    	//Copy Content
	    	var copy = function (e) {
				e.preventDefault();
				var text = "";
				switch($('input:radio:checked').val()) 
				{
					case "MD": {
						text += '[' + tab.title + '](' + url + ')';	//md url
						break;
					}
					case "MDICON": {
						/*
						text += '![](';
						text += tab.favIconUrl;
						text += ')';
						*/
						text += '<img src="';
						text += tab.favIconUrl;
						text += '" width="11px"> ';
						text += '[' + tab.title + '](' + url + ')';	//md url
						break;
					}
					case "RAW": {
						text += url; 
						break;
					}
					default : ;
				}				
				if (e.clipboardData) {
					e.clipboardData.setData('text/plain', text);
				} else if (window.clipboardData) {
					window.clipboardData.setData('Text', text);
				}
			}
	    	window.addEventListener('copy', copy);
	    	document.execCommand('copy');
	    	window.removeEventListener('copy', copy);
	        document.execCommand('copy');

	        // var obj={};
	        // obj.title = tab.title;
	        // obj.url = url;
	        // var str= JSON.stringify(obj);
			//alert('send message: '+str);
			window.close();	//CLIP后自动关闭Popup页
	    });
	});
});
