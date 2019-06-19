import { Component, OnInit } from '@angular/core';
import {IGuitar} from '../models/guitar';

@Component({
  selector: 'app-add-guitar',
  template: `
    <div class="content-container">
      <div class="content-area">
        <div class="clr-col-lg-5">
          <div class="well bs-component">
            <form (ngSubmit)="saveGuitar(addGuitarForm.value)" class="form-horizontal">
              <fieldset>
                <legend>Add New Guitar</legend>
                <div class="form-group">
                  <label for="inputTitle" class="col-lg-3 control-label">Title</label>
                  <div class="clr-col-lg-8">
                    <input type="text" class="form-control" id="inputTitle" placeholder="Title" name="title" ngModel>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAuthor" class="col-lg-3 control-label">Author</label>
                  <div class="clr-col-lg-8">
                    <input type="text" class="form-control" id="inputAuthor" placeholder="Author" name="author" ngModel>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputYear" class="col-lg-3 control-label">Year</label>
                  <div class="clr-col-lg-8">
                    <input type="text" class="form-control" id="inputYear" placeholder="Year Published" name="publicationYear" ngModel>
                  </div>
                </div>
                <div class="form-group">
                  <div class="clr-col-lg-8 col-lg-offset-3">
                    <button type="submit" class="btn btn-primary">Save</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AddGuitarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  saveGuitar(formValues: any): void {
    const newGuitar: IGuitar = <IGuitar> formValues;
    newGuitar.id = 0;
    console.log(newGuitar);
    console.warn('Save new guitar not yet implemented.');
  }

}
