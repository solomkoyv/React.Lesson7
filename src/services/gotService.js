export default class GotService {
  _apiBase = "https://www.anapioficeandfire.com/api";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch${url}, recived ${res.status}`);
    }
    return await res.json();
  };

  getAllItems = async typeItems => {
    const res = await this.getResource(`/${typeItems}`);
    return res.map(this._transformItem(res));
  };

  getItem = async (typeItems, idItem) => {
    const res = await this.getResource(`/${typeItems}/${idItem}`);
    return this._transformItem(res);
  };

  // getAllCharacters = async () => {
  //   const res = await this.getResource(`/characters?page=5&pageSize=10`);
  //   return res.map(this._transformCharacter);
  // };
  // getCharacter = async id => {
  //   const character = await this.getResource(`/characters/${id}`);
  //   return this._transformCharacter(character);
  // };
  // getAllBooks = async () => {
  //   const res = await this.getResource(`/books/`);
  //   return res.map(this._transformBook);
  // };
  // getBook = async id => {
  //   const book = await this.getResource(`/books/${id}`);
  //   return this._transformBook(book);
  // };
  // getAllHouses = async () => {
  //   const houses = await this.getResource(`/houses/`);
  //   return houses.map(this._transformHouse);
  // };
  // getHouse = async id => {
  //   const house = await this.getResource(`/houses/${id}`);
  //   return this._transformHouse(house);
  // };

  // isSet = data => {
  //   if (data) {
  //     return data;
  //   } else {
  //     return "no data :(";
  //   }
  // };

  isSet = data => {
    for (const key in data) {
      if (!data[key]) {
        data[key] = "no data :(";
      }
    }
    return data;
  };

  _extractId = item => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  };

  // itemId = url => {
  //   return url.slice(url.lastIndexOf("/") + 1);
  // };

  _transformItem = data => {
    if (Array.isArray(data)) {
      return data.map(item => {
        this.isSet(item);
        item["id"] = this._extractId(item);
        return item;
      });
    } else {
      this.isSet(data);
      data["id"] = this._extractId(data);
      return { ...data };
    }
  };

  // _transformCharacter = char => {
  //   return {
  //     id: this._extractId(char),
  //     // id: char.url.slice(char.url.lastIndexOf("/") + 1)
  //     // id: this.itemId(char.url)
  //     name: this.isSet(char.name),
  //     gender: this.isSet(char.gender),
  //     born: this.isSet(char.born),
  //     dead: this.isSet(char.dead),
  //     culture: this.isSet(char.culture)
  //   };
  // };
  // _transformBook = book => {
  //   return {
  //     id: this._extractId(book),
  //     name: this.isSet(book.name),
  //     numberOfPages: this.isSet(book.numberOfPages),
  //     publisher: this.isSet(book.publisher),
  //     released: this.isSet(book.released)
  //   };
  // };
  // _transformHouse = house => {
  //   return {
  //     id: this._extractId(house),
  //     // id: `H- ${this.itemId(house.url)}`
  //     name: this.isSet(house.name),
  //     region: this.isSet(house.region),
  //     words: this.isSet(house.words),
  //     titles: this.isSet(house.titles),
  //     overlord: this.isSet(house.overlord),
  //     ancestralWeapons: this.isSet(house.ancestralWeapons)
  //   };
  // };
}

// const got = new GotService();
// got.getAllCharacters().then(res => console.log(res));
// got.getCharacter(5).then(res => console.log(res));
// got.getAllBooks().then(res => console.log(res));
// got.getBook(4).then(res => console.log(res));
// got.getAllHouses().then(res => console.log(res));
// got.getHouse(21).then(res => console.log(res));
