'use strict'
export default class Store {
    // hier kein Zugriff auf VIEW!

    addItem(item) {

        //Content-Type: application/json

    }

    getItems(){
        // fetch gibt ein Promis zurueck
        return fetch ('http://localhost:3100/items')
            .then((resp) => {
                // TODO hier muesste man noch 200 oder 500 abfragen ...
                return resp.json()
                })
    }
}