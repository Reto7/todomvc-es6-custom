/**
 * Created by rk on 02.05.17.
 */
'use strict'
export default class{
    constructor($doc){
        this.$doc = $doc
    }

    renderItems(items){
        let $list = this.$doc.querySelector("#list")
        items.forEach((item) => {
            let $li = this.$doc.createElement("li")
            $li.innerText = item.text  // ev.target.value;
            $list.appendChild($li)
        })

    }
}