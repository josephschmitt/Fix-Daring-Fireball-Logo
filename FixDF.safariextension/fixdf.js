(function(){
    var image,
        banner = document.querySelector('#Banner a img');
    
    function doUpdateLogo(altlogo) {
        image = altlogo + '.png';
    
        if (!banner) {return false;}
        banner.setAttribute('src', safari.extension.baseURI+image);
    }
    
    //Get the current value from the background page on startup
    safari.self.tab.dispatchMessage("getDFLogo");
    
    //Update the logo when the form changes
    safari.self.addEventListener("message", function(e) {
        doUpdateLogo(e.message);
    }, false);
})();