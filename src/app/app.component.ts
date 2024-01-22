import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  asset?: string;
  loadError = false;

  #http: HttpClient = inject(HttpClient);

  loadAsset(src: string): void {
    this.#http.get(`assets/${src}`, { responseType: 'text' }).subscribe({
      next: (response: any) => {
        this.asset = response;
      },
      error: () => {
        this.loadError = true;
      }
    });
  }
}
