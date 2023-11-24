import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
// window.ipcRenderer.on('main-process-message', (_event, message) => {
//   console.log(message)
// })

//For reciving meessages 
// window.ipcRenderer.on('main-process-message1', (_event, message) => {
//   console.log(message)
// })
//ipcRenderer.send('messageFromRenderer', 'Hello from renderer!');

//
// window.ipcRenderer.on('client-process-message', () => {
//   window.ipcRenderer.send("Sent from client");
// })


