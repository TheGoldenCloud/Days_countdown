// import { Menu } from "electron";

// const { app, Menu,BrowserView } = require('electron')

// // const isMac = process.platform === 'darwin'

// // const template: Electron.MenuItemConstructorOptions[] = [
// //   // { role: 'appMenu' }
// //   ...(isMac
// //     ? [{
// //         label: app.name,
// //         submenu: [
// //           { role: 'about' },
// //           // { type: 'separator' },
// //           // { role: 'services' },
// //           // { type: 'separator' },
// //           // { role: 'hide' },
// //           // { role: 'hideOthers' },
// //           // { role: 'unhide' },
// //           // { type: 'separator' },
// //           { role: 'quit' }
// //         ]
// //       }]
// //     : []),
// //   // { role: 'fileMenu' }
// //   // {
// //   //   label: 'File',
// //   //   submenu: [
// //   //     isMac ? { role: 'close' } : { role: 'quit' }
// //   //   ]
// //   // },
// //   // { role: 'editMenu' }
// //   // {
// //   //   label: 'Edit',
// //   //   submenu: [
// //   //     { role: 'undo' },
// //   //     { role: 'redo' },
// //   //     { type: 'separator' },
// //   //     { role: 'cut' },
// //   //     { role: 'copy' },
// //   //     { role: 'paste' },
// //   //     ...(isMac
// //   //       ? [
// //   //           { role: 'pasteAndMatchStyle' },
// //   //           { role: 'delete' },
// //   //           { role: 'selectAll' },
// //   //           { type: 'separator' },
// //   //           {
// //   //             label: 'Speech',
// //   //             submenu: [
// //   //               { role: 'startSpeaking' },
// //   //               { role: 'stopSpeaking' }
// //   //             ]
// //   //           }
// //   //         ]
// //   //       : [
// //   //           { role: 'delete' },
// //   //           { type: 'separator' },
// //   //           { role: 'selectAll' }
// //   //         ])
// //   //   ]
// //   // },
// //   // { role: 'viewMenu' }
// //   // {
// //   //   label: 'View',
// //   //   submenu: [
// //   //     { role: 'reload' },
// //   //     { role: 'forceReload' },
// //   //     { role: 'toggleDevTools' },
// //   //     { type: 'separator' },
// //   //     { role: 'resetZoom' },
// //   //     { role: 'zoomIn' },
// //   //     { role: 'zoomOut' },
// //   //     { type: 'separator' },
// //   //     { role: 'togglefullscreen' }
// //   //   ]
// //   // },
// //   // { role: 'windowMenu' }
// //   {
// //     label: 'Window',
// //     submenu: [
// //       { role: 'minimize' },
// //       { role: 'quit' },
// //       // { role: 'zoom' },
// //       // ...(isMac
// //       //   ? [
// //       //       { type: 'separator' },
// //       //       { role: 'front' },
// //       //       { type: 'separator' },
// //       //       { role: 'window' }
// //       //     ]
// //       //   : [
// //       //       { role: 'close' }
// //       //     ])
// //     ]
// //   },
// //   // {
// //   //   role: 'help',
// //   //   submenu: [
// //   //     {
// //   //       label: 'Learn More',
// //   //       click: async () => {
// //   //         const { shell } = require('electron')
// //   //         await shell.openExternal('https://electronjs.org')    //Postavi ovde guide
// //   //       }
// //   //     }
// //   //   ]
// //   // }
// // ]


// // module.exports = Menu.buildFromTemplate(template);

// // // 


// // const template: Menu = [{
// //     label: 'Edit',
// //     submenu: [
// //         { role: 'undo' },
// //         { role: 'redo' },
// //     ]
// // },
// // {
// //     label: 'View',
// //     submenu: [
// //         { role: 'reload' },
// //     ]
// // },
// // { role: 'window', submenu: [{ role: 'minimize' }, { role: 'close' }] },
// // {
// //     role: 'help',
// //     submenu: [{
// //         label: 'Learn More',
// //         click() {
// //             require('electron').shell.openExternal('https://electron.atom.io');
// //         }
// //     }]
// // }
// // ];

// export default template;
