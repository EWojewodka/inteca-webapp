import Person from './../person';

export default class Child extends Person {
  sex: string;
  constructor(firstname, secondname, pesel,dateOfBirth,  sex){
    super(firstname, secondname, pesel, dateOfBirth);
    this.sex = sex;
  }
}
