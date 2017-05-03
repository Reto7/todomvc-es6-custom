'use strict'

export default class {


    // $ ist nur eine Namenskonvention fuer DOM Knoten
    constructor(view) {
        console.log("running controller.js - constructor")

        let items = this.getItems()
        view.renderItems(items)

        //view.onAddItem(this.onAddItem)

    }

    onAddItem(item){
        // save to db
        // render item on view
    }

    // // ist somit unit-testbar
    // // target ist der ausloesende Event! kommt hier also von $input.addEventListener
    // onChangeInput(ev){
    //     console.log("Feldinhalt neu: " +ev.target.value)
    //     // let $list = this.$doc.querySelector("#list")
    //     // let $li = this.$doc.createElement("li")
    //     // $li.innerText = ev.target.value;
    //     // $list.appendChild($li)
    // }

    /*
    $doc.addEventListener("click", ()=> {
        console.log(this)
    })
    */


    // fake/mock aus model (store) lesen
    getItems(){
        return [

            {title: 'Einkaufen'}
            ,{title: 'Auto waschen'}
        ]
    }

}