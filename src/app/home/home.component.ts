import { Component , OnInit} from '@angular/core';
import {SupabaseService} from "../supabase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  photos: {id : number,time : string,url : string} [] = [];
  constructor(private supabaseService: SupabaseService) {
  }
  async ngOnInit() {
    this.supabaseService.getPhotos().then((photos : any) => {
      this.photos = photos;
      console.log(this.photos);
    });
  }

}
