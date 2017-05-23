'use strict'
export default class Store {
    // hier kein Zugriff auf VIEW!

    addItem(item) {

        //Content-Type: application/json

    }

    getItems(){
        // fetch gibt ein Promis zurueck
        return fetch ('http://localhost:3100/itemsX')
            .then((resp) => {
                //  hier noch 200 oder 500 abfragen
                if(resp.ok) {
                    return resp.json
                } else {
                    return Promise.reject(resp)
                }
            })
    }
}