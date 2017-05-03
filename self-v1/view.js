/**
 * Created by rk on 02.05.17.
 */
'use strict'
export default class{
    constructor($doc){
        this.$doc = $doc

        // queryselector ist ein CSS selector, deshalb fuer ein ID Feld die #
        let $input = this.$doc.querySelector("#new-todo")

        $input.addEventListener("change", this.onChangeInput.bind(this))
    }

    // ist somit unit-testbar
    // target ist der ausloesende Event! kommt hier also von $input.addEventListener
    onChangeInput(ev){
        console.log("Feldinhalt neu: " +ev.target.value)
        // TODO HAUSAUFGABE -- wenn "change" Event auftritt, soll Controller onAddItem(item) aufgerufen werden

        // let $list = this.$doc.querySelector("#list")
        // let $li = this.$doc.createElement("li")
        // $li.innerText = ev.target.value;
        // $list.appendChild($li)
    }

    renderItems(items){
        let $list = this.$doc.querySelector("#list")
        $list.innerHTML = items.map(this.renderItem)
        // items.forEach((item) => {
        //     this.renderItem(item)
        // })

    }

    renderItem(item){
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }
}