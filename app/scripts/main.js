console.log('\'Allo \'Allo!');
$.getJSON('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBQXlctfxceml41s83EcsDRTGEOQe-Btq4', function(fonts){
    'use strict';
    for (var i = 0; i < fonts.items.length; i++) {      
     $('#controllo1, #controllo2')
         .append($('<option></option>')
         .attr('value', fonts.items[i].family)
         .text(fonts.items[i].family));
    }    
});
function addGoogleFont(FontName) {
    'use strict';
    $('head').append('<link href="https://fonts.googleapis.com/css?family=' + encodeURIComponent(FontName) + ' rel="stylesheet" type="text/css">');
}
function cambioFont(controllo, testarea) {
    'use strict';
    var fontScelto = $( controllo ).val();
    $( testarea ).css( 'font-family', fontScelto);
    addGoogleFont(fontScelto);
}
$( '#controllo1' ).change(function(){'use strict'; cambioFont('#controllo1','#extext1');});
$( '#controllo2' ).change(function(){'use strict'; cambioFont('#controllo2','#extext2');});
addGoogleFont();