const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, globalShortcut} = electron;


require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});


let mainWindow;

//App ready
app.on('ready', function(){

    //Create new window
    mainWindow = new BrowserWindow({});
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    }));

    mainWindow.on('closed', function() {
        app.quit();
    });

    registerShortcuts();
});


/*  Default alarm shortcut config:
    F4  - Alarm 0 (abort)
    1-8 - Alarm 1-8             
*/
function registerShortcuts() {

    globalShortcut.register('F4',() => { 
        mainWindow.webContents.send('trigger', 0);
    });
    
    globalShortcut.register('F6',() => { 
        mainWindow.webContents.send('trigger', 75);
        
    });
    globalShortcut.register('F9',() => { 
        mainWindow.webContents.send('trigger', 74);
    });
    globalShortcut.register('F8',() => {
        mainWindow.webContents.send('trigger', 88);
    });

    
    globalShortcut.register('Shift+F4',() => { 
        mainWindow.webContents.send('trigger', 0);
    });
    
    globalShortcut.register('Shift+F6',() => { 
        mainWindow.webContents.send('trigger', 75);
        
    });
    globalShortcut.register('Shift+F9',() => { 
        mainWindow.webContents.send('trigger', 74);
    });
    globalShortcut.register('Shift+F8',() => {
        mainWindow.webContents.send('trigger', 88);
    });
    //Shortcut Plus
    globalShortcut.register('=',() => { 
        mainWindow.webContents.send('trigger', 999);
    });
    globalShortcut.register('Shift+=',() => { 
        mainWindow.webContents.send('trigger', 999);
    });
    //Shortcut Shift+Hashtag
    globalShortcut.register('?',() => { 
        mainWindow.webContents.send('trigger', 998);
    });
    globalShortcut.register('Shift+?',() => { 
        mainWindow.webContents.send('trigger', 998);
    });
        
       //Shorcut ü 
   
    globalShortcut.register(';',() => { 
        mainWindow.webContents.send('trigger', 997);
    });
    globalShortcut.register('Shift+;',() => { 
        mainWindow.webContents.send('trigger', 997);
    });

      //Shortcut ü ?
    globalShortcut.register('[',() => { 
        mainWindow.webContents.send('trigger', 995);
    });
    globalShortcut.register('Shift+[',() => { 
        mainWindow.webContents.send('trigger', 995);
    });

    globalShortcut.register('-',() => { 
        mainWindow.webContents.send('trigger', 996);
    });
    globalShortcut.register('Shift+-',() => { 
        mainWindow.webContents.send('trigger', 996);
    });

    globalShortcut.register('Alt+A',() => { 
        mainWindow.webContents.send('trigger', 137);
    });
    globalShortcut.register('Shift+Alt+A',() => { 
        mainWindow.webContents.send('trigger', 137);
    });
    // this stops the alarm
    globalShortcut.register('F10',() => { 
        mainWindow.webContents.send('trigger', 'holdup');
    });
    globalShortcut.register('Shift+F10',() => { 
        mainWindow.webContents.send('trigger', 'holdup');
    });
    // this stops the alarm


    // this is a secret alarm
    globalShortcut.register('F7',() => { 
        mainWindow.webContents.send('trigger', 73);
    });
    globalShortcut.register('Shift+F7',() => { 
        mainWindow.webContents.send('trigger', 73);
    });
    // this is a secret alarm


    //Other alam levels
    globalShortcut.register('Alt+y',() => { 
        mainWindow.webContents.send('trigger', 1);
    });
    globalShortcut.register('Alt+x',() => { 
        mainWindow.webContents.send('trigger', 2);
    });
    globalShortcut.register('Alt+c',() => { 
        mainWindow.webContents.send('trigger', 3);
    });
    globalShortcut.register('Alt+v',() => { 
        mainWindow.webContents.send('trigger', 4);
    });
    globalShortcut.register('Alt+b',() => { 
        mainWindow.webContents.send('trigger', 5);
    });
    globalShortcut.register('Alt+n',() => { 
        mainWindow.webContents.send('trigger', 6);
    });
    globalShortcut.register('Alt+m',() => { 
        mainWindow.webContents.send('trigger', 7);
    });
    globalShortcut.register('Alt+,',() => { 
        mainWindow.webContents.send('trigger', 8);
    });
    globalShortcut.register('0',() => { 
        mainWindow.webContents.send('trigger', 431);
    });


    globalShortcut.register('Shift+Alt+y',() => { 
        mainWindow.webContents.send('trigger', 1);
    });
    globalShortcut.register('Shift+Alt+x',() => { 
        mainWindow.webContents.send('trigger', 2);
    });
    globalShortcut.register('Shift+Alt+c',() => { 
        mainWindow.webContents.send('trigger', 3);
    });
    globalShortcut.register('Shift+Alt+v',() => { 
        mainWindow.webContents.send('trigger', 4);
    });
    globalShortcut.register('Shift+Alt+b',() => { 
        mainWindow.webContents.send('trigger', 5);
    });
    globalShortcut.register('Shift+Alt+n',() => { 
        mainWindow.webContents.send('trigger', 6);
    });
    globalShortcut.register('Shift+Alt+m',() => { 
        mainWindow.webContents.send('trigger', 7);
    });
    globalShortcut.register('Shift+Alt+,',() => { 
        mainWindow.webContents.send('trigger', 8);
    });
    globalShortcut.register('Shift+0',() => { 
        mainWindow.webContents.send('trigger', 431);
    });



}