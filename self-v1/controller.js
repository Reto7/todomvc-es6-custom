'use strict'

export default class {


    // $ ist nur eine Namenskonvention fuer DOM Knoten
    constructor(view) {
        console.log("running controller.js - constructor")

        // Variable bzw. Array enthaellt ALLE items
        this.meineItems = []

        // fake/mock model (store) simulieren
        this.addItem({title: 'staubsaugen'})
        this.addItem({title: 'telefonieren'})
        this.addItem({title: 'Koffer packen'})

        // aus store lesen
        let items = this.getItems()

        view.renderItems(items)

        view.onAddItemHandler(this.onAddItem)   /* neu */
      //view.onAddItem(this.onAddItem)   
        

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


    onAddItem(it){
        console.log('Controller.onAddItem : ' + it)
        // save to db
        addItem({title: it})
        // render item on view
        view.renderItems(items)
    }

    // fake/mock aus model (store) lesen
    getItems(){
        return this.meineItems
    }

    addItem(item){
        console.log('item add: ' +item)
        this.meineItems.push(item)
    }

}
