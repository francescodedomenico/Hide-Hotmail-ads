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
    removeElementByID('Crm120x60_0_p');
    removeElementByID('SkyscraperContent');
	document.getElementById("contentRight").className = 
    document.getElementById("contentRight").className.replace( /(?:^|\s)WithSkyscraper(?!\S)/ , '' );
  },false);
}();

