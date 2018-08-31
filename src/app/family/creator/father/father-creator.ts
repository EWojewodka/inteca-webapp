import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

export default class FatherCreator implements OnInit{
  title = "Creator of fathers";
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      firstname: ['', Validators.required ],
      secondname: ['', Validators.required ],
      pesel: ['', Validators.required ],
      born: ['', Validators.required ]
    });
  }

  addFather(firstname,secondname,pesel, born){
    this.store.dispatch(new AddFather({firstname,secondname,pesel, born}));
  }

  ngOnInit(){}

}

export interface Father {
  firstname: string;
  secondname: string;
  pesel: string;
  born: string;
}

export class AddFather {
  static readonly type = "[Father] Add";

  constructor(public payload: Father){}
}

export class FatherStateModel {
  fathers: Father[];
}

@State<FatherStateModel>({
  name: 'fathers',
  defaults: {
    fathers: []
  }
})
export class FatherState {

  @Selector()
  static getFathers(state: FatherStateModel) {
    return state.fathers;
  }

  @Action(AddFather)
  add({getState, patchState }: StateContext<FatherStateModel>, { payload }: AddFather) {
    const state = getState();
    patchState({
      users: [...state.fathers, payload]
    });
  }
}
