// src/app/supabase.service.ts

import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, PostgrestResponse } from '@supabase/supabase-js';
import {async} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://cglilllifuqqciafllkl.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnbGlsbGxpZnVxcWNpYWZsbGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDYxODYsImV4cCI6MjAwOTU4MjE4Nn0.UwpOPm5iI-2DkdJi9JNptVJrLOB6Uv4XqeIhx6kT7n0'
    );
  }

  async getImages(): Promise<any[]> {
    try {
      const { data, error } = await this.supabase.from('images').select('*');
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des images :', error);
      throw error;
    }
  }

  async getPhotos(): Promise<any[]> {
    try {
      const { data, error } = await this.supabase.from('photos').select('*');
      if (error) {
        throw error;
      }
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des images :', error);
      throw error;
    }
  }

  async addLike(id : number) {
    this.supabase.from('photos').update({ like: 1}).eq('id', id);
  }
}
