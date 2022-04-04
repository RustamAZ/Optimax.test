export default class StoreService {
    getProducts() {
        return fetch("http://localhost:3000/data/cardData.json")
    }
}