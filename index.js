// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require("electron-updater")
const log = require('electron-log');


const path = require('path')
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');
log.info(app.getVersion())

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.maximize()
  // mainWindow.setResizable(false)
  // and load the index.html of the app.
  mainWindow.loadFile('./web/html/index.html')
  mainWindow.show()

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  log.info(log_message)
})
autoUpdater.on('update-downloaded', (info) => {
  log.info('Update downloaded');
});
app.on('window-all-closed', () => {
  app.quit();
});
app.on('ready', function () {
  autoUpdater.checkForUpdatesAndNotify();
});
