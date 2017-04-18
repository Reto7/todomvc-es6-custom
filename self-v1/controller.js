'use strict'

export default class {


    // $ ist nur eine Namenskonvention fuer DOM Knoten
    constructor($doc) {
        console.log("running controller.js - constructor")

        this.$doc = $doc
        // queryselector ist ein CSS selector, deshalb fuer ein ID Feld die #
        let $input = $doc.querySelector("#new-todo")
        $input.addEventListener("change", this.onChangeInput.bind(this))
    }

    // ist somit unit-testbar
    // target ist der ausloesende Event! kommt hier also von $input.addEventListener
    onChangeInput(ev){
        console.log("Feldinhalt neu: " +ev.target.value)
        let $list = this.$doc.querySelector("#list")
        let $li = this.$doc.createElement("li")
        $li.innerText = ev.target.value;
        $list.appendChild($li)
    }

    /*
    $doc.addEventListener("click", ()=> {
        console.log(this)
    })
    */

}