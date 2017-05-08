/**
 * Created by rk on 02.05.17.
 */
'use strict'
export default class{
    constructor($doc){
        this.$doc = $doc
        this.onAddItemCallbackFromController = null  /* neu */

        // queryselector ist ein CSS selector, deshalb fuer ein ID Feld die #  (oder ein . bei class=)
        let $input = this.$doc.querySelector(".new-todo")

        $input.addEventListener("change", this.onChangeInput.bind(this))
    }

    // ist somit unit-testbar
    // target ist der ausloesende Event! kommt hier also von $input.addEventListener
    onChangeInput(ev){
        console.log("Feldinhalt neu: " +ev.target.value)
        // TODO HAUSAUFGABE -- wenn "change" Event auftritt, soll Controller onAddItem(item) aufgerufen werden
        //this.onAddItemHandler(ev.target.value)
        
        // TODO, hier uebergeben wir einen String, im Controller ist ein "item" aber nicht nur ein String, sondern ein Objekt
        this.onAddItemCallbackFromController(ev.target.value)   /* neu */

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
   
    
    // FULL ITEM LIST
     renderItems(items){
         let $list = this.$doc.querySelector(".todo-list")
         $list.innerHTML = items.map(this.renderItem)
         // items.forEach((item) => {
         //     this.renderItem(item)
         // })
     }

     // SINGLE ITEM
    renderItem(item){
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }
}
