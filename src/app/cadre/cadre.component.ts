import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-cadre',
  templateUrl: './cadre.component.html',
  styleUrls: ['./cadre.component.css']
})
export class CadreComponent {
@Input() url: string = "";
}
