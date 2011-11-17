// ==UserScript==
// @include http://*.mail.live.com/*
// @include https://*.mail.live.com/*
// ==/UserScript==

var oexRemoveHotmailAd = function()
{
  
  window.addEventListener('DOMContentLoaded', function()
  {
    function removeElementByID(id)
    {
      var elem = document.getElementById(id);
      if (elem != null) elem.parentNode.removeChild(elem);
    }
	function addFullscreenButton()
    {
      var tagli = document.createElement('div');
	  tagli.className="ToolbarItem";
	  tagli.setAttribute("id","Fullscreen");
	  var taga = document.createElement('a');
	  var text = document.createTextNode('Fullscreen');
	  taga.appendChild(text);
	  tagli.appendChild(taga);
	  var data = document.getElementById('AfterMoveToPipe');
	  if(data!=null) data.parentNode.insertBefore(tagli,data);
	  taga.onclick = function(){
	    var head = document.getElementById('HeaderContainer');
		if( head != null ){
			head.style.display="none";
		}
		var elem = document.getElementById('Middle');
		if( elem != null ){
			elem.style.background="#FFFFFF";
			elem.style.zIndex="2147483647";
			elem.style.top="0em";
			elem.style.left="0px";
			
		}
		removeElementByID('Fullscreen');
		addFullscreenButtonBack();	
	  };  
    }
	function addFullscreenButtonBack()
    {
      var tagli = document.createElement('div');
	  tagli.className="ToolbarItem";
	  tagli.setAttribute("id","FullscreenBack");
	  var taga = document.createElement('a');
	  var text = document.createTextNode('Normal');
	  taga.appendChild(text);
	  tagli.appendChild(taga);
	  var data = document.getElementById('AfterMoveToPipe');
	  if(data!=null) data.parentNode.insertBefore(tagli,data);
	  taga.onclick = function(){
		var head = document.getElementById('HeaderContainer');
		if( head != null ){
			head.style.display="block";
		}
		var elem = document.getElementById('Middle');
		if( elem != null ){
			elem.style.background="";
			elem.style.zIndex="2147483647";
			elem.style.top="4.6em";
			elem.style.left="3px";
		}
		removeElementByID('FullscreenBack');
		addFullscreenButton();
	  };  
    }
	addFullscreenButton();
	removeElementByID('Crm120x60_1');
	removeElementByID('Ad300x600_0');
	removeElementByID('Crm300x125_0');
    removeElementByID('Crm120x60_0_p');
    removeElementByID('SkyscraperContent');
    var elem = document.getElementById('MainContent');
    if (elem != null){
		elem.style.right = '0px';
		elem.style.marginRight='0px';
	}
  },false);
  
}();

