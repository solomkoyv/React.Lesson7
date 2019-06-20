export default class GotService {
  _apiBase = "https://www.anapioficeandfire.com/api";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch${url}, recived ${res.status}`);
    }
    return await res.json();
  };
  getAllCharacters = async () => {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);
    return res.map(this._transformCharacter);
  };
  getCharacter = async id => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  };
  getAllBooks = async () => {
    const books = await this.getResource(`/books?page=5&pageSize=10`);
    return books.map(this._transformBook);
  };
  getBook = async id => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  };
  getAllHouses = async () => {
    const houses = await this.getResource(`/houses?page=5&pageSize=10`);
    return houses.map(this._transformHouse);
  };
  getHouse = async id => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  };
  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      dead: char.dead,
      culture: char.culture
    };
  }
  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    };
  }
  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released
    };
  }
}

// const got = new GotService();
// got.getAllCharacters().then(res => console.log(res));
// got.getCharacter(5).then(res => console.log(res));
// got.getAllBooks().then(res => console.log(res));
// got.getBook(4).then(res => console.log(res));
// got.getAllHouses().then(res => console.log(res));
// got.getHouse(21).then(res => console.log(res));
