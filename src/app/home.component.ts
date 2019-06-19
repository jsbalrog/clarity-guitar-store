import {Component, OnInit} from '@angular/core';
import {DataService} from './core/data.service';
import {IGuitar} from './models/guitar';

@Component({
  template: `
  <div class="content-container">
    <div class="content-area">
      <h3>All Guitars</h3>
      <div class="clr-row">
        <div class="clr-col-lg-5 clr-col-md-8 clr-col-12" *ngFor="let guitar of guitars">
          <div class="card">
            <div class="card-block">
              <div class="card-title">
                {{ guitar.make }} {{ guitar.model }}
              </div>
              <div class="card-text">
                Type: {{ guitar.type }}<br>
                Year: {{ guitar.year }}<br>
                Price: \${{ guitar.price }}<br>
                <a [routerLink]="['/edit-guitar', guitar.id]"> Edit </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="sidenav">
      <section class="sidenav-content">
        <a href="..." class="nav-link active">
          Nav Element 1
        </a>
        <a href="..." class="nav-link">
          Nav Element 2
        </a>
      </section>
    </nav>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  private guitars: IGuitar[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllGuitars().subscribe(
      (data: IGuitar[]) => this.guitars = data,
      (err) => console.log("Error getting guitars", err)
    );
  }
}
