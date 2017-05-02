'use strict'
console.log("running app.js")

import Controller from './controller'
import View from './view'

let view = new View(window.document)   // hier wird der dom der View uebergeben,
let ctrl = new Controller(view)        // controller arbeitet dann nur noch mit der view, nie mehr direkt auf dem dom!
