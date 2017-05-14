/**
 * Created by rk on 02.05.17.
 */
'use strict'
/* private methoden, diese werden nicht exportiert, somit auch nicht zugreifbar */
const onChangeInput = Symbol()
const renderItem = Symbol()

export default class{
    constructor($doc){
        this.$doc = $doc
        this.$list = this.$doc.querySelector(".todo-list")
        this.onAddItemCallbackFromController = null  /* neu */

        // queryselector ist ein CSS selector, deshalb fuer ein ID Feld die #  (oder ein . bei class=)
        let $input = this.$doc.querySelector(".new-todo")

        // bei eventhandler waere "this" der $input, wir wollen aber die View, deshalb das binding
        //$input.addEventListener("change", this.onChangeInput.bind(this))
        $input.addEventListener("change", this[onChangeInput].bind(this))
    }

    // ist somit unit-testbar
    // target ist der ausloesende Event! kommt hier also von $input.addEventListener
    [onChangeInput](ev){
        console.log("Feldinhalt neu: " +ev.target.value)
        let item = {
            id: Date.now(),
            title: ev.target.value
        }
        //  hier uebergeben wir einen String,
        // im Controller ist ein "item" aber nicht nur ein String, sondern ein Objekt
        this.onAddItemCallbackFromController(item)   /* neu TODO besser handler nennen*/

        // let $list = this.$doc.querySelector("#list")
        // let $li = this.$doc.createElement("li")
        // $li.innerText = ev.target.value;
        // $list.appendChild($li)
    }

    // TODO hier bekommen wir die ganze addItem Funktion vom Controller, hier weisen wir einfach die ganze Funktion einer Variable zu
    // Die Variable wird dann hier in der View benuetzte (nicht diese onAddItemHandler Funktion! Die wird 1x vom Controller aufgerufen)
    onAddItemHandler(controllerFunktion){
        console.log('View.onAddItemHandler : ' + controllerFunktion)
        this.onAddItemCallbackFromController = controllerFunktion       /* neu */
    }

    addItem(item){
        console.log('(view) item add: ' +item)
        let $elem = document.createElement('div')   // obwohl wir ja kein div brauchen ... siehe weiter unten
        //let html = this.renderItem(item)
        let html = this[renderItem](item)
        $elem.innerHTML = html
        this.$list.appendChild($elem.childNodes[0])  // <li> ist das 1. Element innerhalb <div>
    }
    
    // FULL ITEM LIST
     renderItems(items){
         //this.$list.innerHTML = items.map(this.renderItem)
         this.$list.innerHTML = items.map(this[renderItem]).join('')
         // items.forEach((item) => {
         //     this.renderItem(item)
         // })
     }

    // SINGLE ITEM
    [renderItem](item){
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }
}
