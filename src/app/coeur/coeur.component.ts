import {Component, Input} from '@angular/core';
import {SupabaseService} from "../supabase.service";


@Component({
  selector: 'app-coeur',
  templateUrl: './coeur.component.html',
  styleUrls: ['./coeur.component.css']
})
export class CoeurComponent {
  @Input() url: string = "";
  constructor(private supabaseService: SupabaseService) {
  }
  addLike() {

  }
}
