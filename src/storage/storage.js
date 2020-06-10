export class Storage {
  constructor(storageName = 'gameScoreboard', initialValue = '[]') {
    this.storageName = storageName

    // check if localStorage contains any data from previous games
    if(!localStorage.getItem(storageName)) {
      // if none, create new item for our game
      localStorage.setItem(storageName, initialValue)
    }
  }

  // loads data from previous games
  getData() {
    return JSON.parse(localStorage.getItem(this.storageName))
  }

  // updates data in localStorage
  update(data) {
    localStorage.setItem(this.storageName, JSON.stringify(data))
  }
}