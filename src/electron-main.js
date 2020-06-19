const { app, BrowserWindow, ipcMain } = require("electron");
const sql = require("mssql");
const path = require('path');
const url = require('url')

async function connectToDatabase() {
  const result = undefined
  try {
    const configuration = new sql.ConnectionPool({
      user: "sa",
      password: "3QuDRJ.f9)",
      server: "localhost",
      port: 1433,
      database: "L4ActivityDb",
      options: { encrypt: true},
    });

    const hola = await configuration.connect();
    var request = new sql.Request(hola);
    result = await request.query(`SELECT * FROM Treatments`)

    console.log('RESULT:')
    console.log(result)
  } catch(err) {
    console.log(err)
  }

  return result
}

let mainWindow;
function createWindow() {
  const startUrl =  'http://localhost:3000' || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true,
  });

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadURL(startUrl)
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => mainWindow = null);
}


/* TODO: Yo uneed to know how ti mplement this. U:U
   *useEffect(() => {
   *  if (isElectron()) {
   *    console.log(electron.ipcRenderer);
	 *    electron.ipcRenderer.on('request', (event: any, arg: any) => {
   *      console.log('DATA::')
   *      console.log(arg)
	 *    })
	 *  }
   *});
   */

app.commandLine.appendSwitch('ignore-certificate-errors');

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0)
    createWindow();
});
