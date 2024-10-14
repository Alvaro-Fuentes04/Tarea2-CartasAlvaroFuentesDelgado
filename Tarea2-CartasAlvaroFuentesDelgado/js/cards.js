//DEFINITION OF CARDS CLASS
export class Card {
  name;
  point;

  constructor(name, point = null) {
    this.name = name;
    this.point = point;
  }
};
