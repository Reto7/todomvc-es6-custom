'use strict'
export default class Store {
    // hier im Store haben wir kein Zugriff auf VIEW!
    // deshalb koennen wir hier zwar den 404 behandeln, aber nicht ausgeben. das macht dann besser der Controller

    addItem(item) {
        //Content-Type: application/json

    }

    getItems(){
        // fetch gibt ein Promis zurueck
        return fetch ('http://localhost:3100/items')
        //return fetch ('http://10.43.18.161:3100/items')
            .then((resp) => {
                //  hier noch 200, 500, 404 usw. abfragen, testen mit http://localhost:3100/itemsX
                if(resp.ok) {
                    console.log("RESPONSE", resp.toString)
                    return resp.json()
                } else {
                    return Promise.reject(resp)
                }
            })
    }
}