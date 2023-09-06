import {Component, Input} from '@angular/core';
import {SupabaseService} from "../supabase.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @Input() url: string = "";
  like : number = 0;


  addLike(){
    this.like++;
  }
}
