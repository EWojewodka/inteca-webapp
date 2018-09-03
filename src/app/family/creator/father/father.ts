import Person from './../person';

export default class Father extends Person{
  public born: string;

  constructor(firstname, secondname, pesel, born){
    super(firstname, secondname, pesel);
    this.born = born;
  }

}
