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
    var elem = document.getElementById('MainContent');
    if (elem != null) elem.style.right = '0px';
  },false);
}();

