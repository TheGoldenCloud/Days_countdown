import { app, BrowserWindow,ipcMain, ipcRenderer } from 'electron';
import path from 'node:path';
import fs from 'node:fs'
//import menu from './menubar.ts'

process.env.DIST = path.join(__dirname, '../dist');
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public');

let win: BrowserWindow | null;
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

function createWindow() {
  win = new BrowserWindow({
    width: 350,
    height: 700,
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  
  win.webContents.on('did-finish-load', () => {
    // ipcMain.on('eventData',(event,data)=>{
    //   console.log(data);
    // })

    

    ipcMain.on('eventData', (event, data) => {
  
      fs.readFile('./public/data.json', 'utf8', function readFileCallback(err, fileData){
        if (err){
            console.log(err);
        } else {
  
          let obj = JSON.parse(fileData);
  
          obj.events.push(data);
          
          let json = JSON.stringify(obj);
          
          fs.writeFile('./public/data.json', json, 'utf8', (err) => {
              if (err) throw err;
              console.log('The data has been appended to the file!');
          });
      }});
    });

  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'));
  }

  win.webContents.openDevTools();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(createWindow);
