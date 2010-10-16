(function(){
    var altlogo = safari.extension.settings ? safari.extension.settings.altlogo : Math.round(Math.random()),
        image = altlogo ? 'dflogo_phils.png' : 'dflogo.png'
    
    if (safari.extension.settings) {
        safari.extension.settings.addEventListener('change', function(e) {
            if (e.key == 'altlogo') {
                altlogo = e.newValue;
                updateLogo();
            }
        });
    }
    
    function updateLogo() {
        document.querySelector('#Banner a img').setAttribute('src', safari.extension.baseURI+image);
    }
    updateLogo();
})();