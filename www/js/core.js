var db;

// If you want to prevent dragging, uncomment this section
/*
 function preventBehavior(e) 
 { 
 e.preventDefault(); 
 };
 document.addEventListener("touchmove", preventBehavior, false);
 */

/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
 see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
 for more details -jm */
/*
 function handleOpenURL(url)
 {
 // TODO: do something with the url passed in.
 }
 */

function onBodyLoad()
{		
    document.addEventListener("deviceready", onDeviceReady, false);
}

/* When this function is called, Cordova has been initialized and is ready to roll */
/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
 see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
 for more details -jm */
function onDeviceReady()
{
    var root = this;
    cb = window.plugins.childBrowser;
    
    if(cb != null) {
        cb.onLocationChange = function(loc){ root.locChanged(loc); };
        cb.onClose = function(){root.onCloseBrowser(); };
        cb.onOpenExternal = function(){root.onOpenExternal(); };        
    }
    
    db = window.openDatabase('hymns', '1.0', 'hymns', 3145728); // 3MB of browser storage allocated
    db.transaction(populateDB, errorCB, successCB);
    db.transaction(queryDB, errorCB);
}

function onCloseBrowser() {
}

function locChanged(loc) {
}

function onOpenExternal() {
}

$( window ).bind( "orientationchange", function( event ) {

});