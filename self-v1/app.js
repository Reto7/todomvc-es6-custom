'use strict'
console.log("running app.js")

import Controller from './controller'
import View from './view'
import Store from './store'

let view = new View(window.document)   // hier wird der dom der View uebergeben,
let store = new Store()
let ctrl = new Controller(view, store)        // controller arbeitet dann nur noch mit der view, nie mehr direkt auf dem dom!
