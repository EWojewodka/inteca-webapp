import { Component } from '@angular/core';
import FatherCreator from './father/fatherCreator';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {Father} from './father/father';

@Component({
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})

export class FatherCreateStateModel {
  firstname: string;
  secondname: string;
  pesel: string;
  born: string;
}

@State<FatherCreateStateModel>({
  name: 'father_state',
  defaults: {
    firstname: '',
    secondname: ''
  }
})
export class FatherCreateState {

  @Action(AddFather)
  add({getState, patchState}: StateContext<FatherCreateStateModel>, {payload}: AddFather){
    const state = getState();
    patchState({
      firstname: [...state.firstname, payload],
      secondname: [...state.secondname, payload],
      pesel: [...state.pesel, payload],
      born: [...state.born, payload],
    });
  }
}

export class FamilyCreatorComponent {

  controller = new FatherCreator();
}
