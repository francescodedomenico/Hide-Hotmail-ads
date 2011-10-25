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
	
	//var temp = document.all("MainContent");
	
    removeElementByID('Crm120x60_0_p');
    removeElementByID('SkyscraperContent');
	var elem = document.getElementById('MainContent');
	try{
		elem.style.right = '0px';
	}catch(e){}
  },false);
}();

