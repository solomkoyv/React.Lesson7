const allItems = [
  {
    url: "https://www.anapioficeandfire.com/api/characters/41",
    name: "Aegon IV",
    gender: "Male",
    culture: "",
    born: "135 AC, at King's Landing"
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/42",
    name: "Aegon Targaryen",
    gender: "Male",
    culture: "Valyrian",
    born: "In 281 AC or 282 AC, at Dragonstone"
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/43",
    name: "Aegon Targaryen",
    gender: "Male",
    culture: "Valyrian",
    born: "In 26 AC"
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/44",
    name: "Aegon Targaryen",
    gender: "Male",
    culture: "Valyrian",
    born: ""
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/45",
    name: "Aegon Targaryen",
    gender: "Male",
    culture: "Valyrian",
    born: "In or between 50 AC and 59 AC"
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/46",
    name: "Aegon V",
    gender: "Male",
    culture: "",
    born: "200 AC, at King's Landing"
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/47",
    name: "Aegor Rivers",
    gender: "Male",
    culture: "",
    born: "In 172 AC"
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/48",
    name: "Aelinor Penrose",
    gender: "Female",
    culture: "Valyrian",
    born: ""
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/49",
    name: "Aemma Arryn",
    gender: "Female",
    culture: "",
    born: "In 82 AC"
  },
  {
    url: "https://www.anapioficeandfire.com/api/characters/50",
    name: "Aemon Blackfyre",
    gender: "Male",
    culture: "Valyrian",
    born: "In 184 AC"
  }
];
const item = {
  url: "https://www.anapioficeandfire.com/api/characters/50",
  name: "Aemon Blackfyre",
  gender: "",
  culture: "",
  born: ""
};

const _transformItem = data => {
  if (Array.isArray(data)) {
    return data.map(item => {
      isSet(item);
      item["id"] = _extractId(item);
      return item;
    });
  } else {
    isSet(item);
    data["id"] = _extractId(item);
    return { ...data };
  }
};

function isSet(data) {
  for (const key in data) {
    if (!data[key]) {
      data[key] = "no data :(";
    }
  }
  return data;
}

function _extractId(item) {
  const idRegExp = /\/([0-9]*)$/;
  return item.url.match(idRegExp)[1];
}

// function arrItems(allItems) {
//   return allItems.map(item => {
//     for (const key in item) {
//       if (!item[key]) {
//         item[key] = "no data :(";
//       }
//     }
//     item["id"] = _extractId(item);
//     return item;
//   });
// }

console.log(_transformItem(item));
