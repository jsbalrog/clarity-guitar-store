import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';
import {IGuitar} from '../models/guitar';
import {OldGuitar} from '../models/old-guitar';

@Component({
  selector: 'app-edit-guitar',
  template: `
    <div class="content-container">
      <div class="content-area">
        <div class="col-lg-5">
          <div class="well bs-component">
            <form class="form-horizontal">
              <fieldset>
                <legend>Edit Guitar</legend>
                <div class="form-group">
                  <label for="inputMake" class="col-lg-3 control-label">Make</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="inputMake" placeholder="Make" name="make">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputModel" class="col-lg-3 control-label">Model</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="inputModel" placeholder="Model"  name="model">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputYear" class="col-lg-3 control-label">Year</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="inputYear" placeholder="Year"  name="year">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-lg-8 col-lg-offset-3">
                    <button type="button" class="btn btn-primary" (click)="saveChanges()">Save</button>
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
export class EditGuitarComponent implements OnInit {

  selectedGuitar: IGuitar;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.params['id']);
    this.dataService.getGuitarById(id).subscribe(
      (data: IGuitar) => {
        this.selectedGuitar = data;
      },
      (err: any) => console.log(err)
    );

    this.dataService.getOldGuitarById(id).subscribe(
      (data: OldGuitar) => console.log('Old guitar make: ', data.make)
    );
  }

  saveChanges(): void {
    console.warn('Save changes to guitar not yet implemented.');
  }
}
