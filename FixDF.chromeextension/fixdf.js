(function(){
    var image,
        banner = document.querySelector('#Banner a img'),
        logos = ['', '_phils', '_giants', '_rangers'];
    
    function doUpdateLogo(altlogo) {
        image = 'dflogo'+logos[altlogo]+'.png';
    
        if (!banner) {return false;}
        banner.setAttribute('src', chrome.extension.getURL(image));
    }
    
    //Get the current value from the background page on startup
    chrome.extension.sendRequest(null, function(response) {
        doUpdateLogo(response);
    });
    
    //Update the logo when the form changes
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        doUpdateLogo(request);
        sendResponse({});
    });
})();