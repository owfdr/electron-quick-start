/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("systemData", {
  os: process.platform,
  arch: process.arch,
  version: process.version,
  askForData: () => ipcRenderer.invoke("asking-for-data"),
});
