'use strict'

export default class {


    // $ ist nur eine Namenskonvention fuer DOM Knoten
    constructor($doc){
        console.log("running controller.js - constructor")

        $doc.addEventListener("click", ()=> {
            console.log(this)
        })

    }
}