export default class GotService {
  _apiBase = "https://anapioficeandfire.com/api/";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch${url}` + `, recived ${res.status}`);
    }
    return await res.json();
  };
  getAllCharacters = () => {
    return this.getResource(`/characters?page=5&pageSize=10`);
  };
  getCharacter = id => {
    return this.getResource(`/characters/${id}`);
  };
  getAllBooks = () => {
    return this.getResource(`/books?page=5&pageSize=5`);
  };
  getBook = id => {
    return this.getResource(`/books/${id}`);
  };
  getAllHouses = () => {
    return this.getResource(`/houses?page=5&pageSize=5`);
  };
  getHouse = id => {
    return this.getResource(`/houses/${id}`);
  };
}

// const got = new GotService();
// got.getAllCharacters().then(res => console.log(res));
// got.getCharacter(5).then(res => console.log(res));
// got.getAllBooks().then(res => console.log(res));
// got.getBook(4).then(res => console.log(res));
// got.getAllHouses().then(res => console.log(res));
// got.getHouse(21).then(res => console.log(res));
