import {Component, Input,OnInit} from '@angular/core';
import {SupabaseService} from "../supabase.service";

@Component({
  selector: 'app-telechargement',
  templateUrl: './telechargement.component.html',
  styleUrls: ['./telechargement.component.css']
})
export class TelechargementComponent {
 @Input() lien: string = '';



}
