import { Component, AfterViewInit } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.css'
})
export class GoogleMapsComponent  {
  center = { lat: -23.540, lng: -47.433 };
  zoom = 14;

  locations = [
    { lat: -23.540, lng: -47.433, title: 'Ponto de Doação 1' },
    { lat: -23.545, lng: -47.430, title: 'Ponto de Doação 2' },
    { lat: -23.548, lng: -47.435, title: 'Ponto de Doação 3' },
  ];
}