'use strict'

export default class {


    // $ ist nur eine Namenskonvention fuer DOM Knoten
    constructor(view, store) {
        console.log("running controller.js - constructor")

        this.view = view;
        this.store = store;

        // Variable bzw. Array enthaellt ALLE items
        this.meineItems = []

        // fake/mock model (store) simulieren
        //this.addItem({title: 'staubsaugen'})
        //this.addItem({title: 'telefonieren'})

        // aus store lesen
        // hier kommt nun ein Promise zurueck!!
        this.getItems().then((items)=>{
            view.renderItems(items)
        })




        view.onAddItemHandler(this.onAddItem.bind(this))   /* this context auf CONTROLLER */
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


    onAddItem(item){
        console.log('Controller.onAddItem : ' + item)
        this.view.addItem(item)
        // save to db

        // render item on view
        //view.renderItems(items)
    }

    // fake/mock aus model (store) lesen
    getItems(){
        //return this.meineItems

        // hier kommt nun ein Promise zurueck!!
        return this.store.getItems()
    }

    addItem(item){
        console.log('item add: ' +item)
        this.meineItems.push(item)
    }

}
