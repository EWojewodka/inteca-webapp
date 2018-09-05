/**
* Person presentation as js object.
* @see Father
* @see Child
*/
export default class Person {
  firstname: string;
  secondname: string;
  pesel: string;
  dateOfBirth: string;

  constructor(firstname, secondname, pesel, dateOfBirth){
    this.firstname = firstname;
    this.secondname = secondname;
    this.pesel = pesel;
    this.dateOfBirth = dateOfBirth;
  }
}
