'use strict';

const shell = require('electron').shell;
const path = require('path');
const BrowserWindow = require('browser-window');

function openFilterWindow(filterCtx) {
    let filterWindow = new BrowserWindow({
        title: 'Betwixt Url Filter',
        icon: 'gfx/icon.png',
        width: 400,
        height: 200
    });

    filterWindow.loadURL('file://' + __dirname + '/filter/filter.html');

    filterWindow.on('closed', () => {
        filterCtx.isDirty = true;
    });
}


function buildMenu(app, options, filterCtx) {
    const template = [
        {
            label: 'Edit',
            submenu: [
                {
                    label: 'Undo',
                    accelerator: 'CmdOrCtrl+Z',
                    role: 'undo'
                },
                {
                    label: 'Redo',
                    accelerator: 'Shift+CmdOrCtrl+Z',
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Cut',
                    accelerator: 'CmdOrCtrl+X',
                    role: 'cut'
                },
                {
                    label: 'Copy',
                    accelerator: 'CmdOrCtrl+C',
                    role: 'copy'
                },
                {
                    label: 'Paste',
                    accelerator: 'CmdOrCtrl+V',
                    role: 'paste'
                },
                {
                    label: 'Select All',
                    accelerator: 'CmdOrCtrl+A',
                    role: 'selectall'
                }
            ]
        },
        {
            label: 'Tools',
            submenu: [
                {
                    label: 'Root Certificate',
                    click: () => {
                        shell.showItemInFolder(path.resolve(options.sslCaDir, 'certs', 'ca.pem'));
                    }
                },
                {
                    label: 'Filter Urls',
                    click: () => {
                        openFilterWindow(filterCtx);
                    }
                }
            ]
        }
    ];

    if (process.platform === 'darwin') {
        template.unshift({
            label: app.getName(),
            submenu: [
                {
                    label: 'Quit',
                    accelerator: 'Command+Q',
                    click: () => app.quit()
                }
            ]
        });
    }

    return template;
}

module.exports = buildMenu;
