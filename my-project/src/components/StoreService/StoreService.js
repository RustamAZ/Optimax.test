export default class StoreService {
    getCards() {
        return fetch("http://localhost:3000/data/cardData.json")
    }
}