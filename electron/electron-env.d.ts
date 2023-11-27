/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    DIST: string
    VITE_PUBLIC: string
  }
}

// declare module 'uuid'{
//   export function uuidv4(): string
// }

interface Window {
  ipcRenderer: import('electron').IpcRenderer
}
