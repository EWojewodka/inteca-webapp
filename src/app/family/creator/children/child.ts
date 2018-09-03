import Person from './../person';

export default class Child extends Person {
  sex: string;
  constructor(firstname, secondname, pesel, sex){
    super(firstname, secondname, pesel);
    this.sex = sex;
  }
}
