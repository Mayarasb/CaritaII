import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  private mapsLoaded = false;

  constructor() {}

  loadGoogleMaps(apiKey: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.mapsLoaded) {
        resolve(); // Se já está carregado, apenas resolve a Promise
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        this.mapsLoaded = true;
        resolve();
      };

      script.onerror = (error) => {
        console.error('Erro ao carregar o Google Maps', error);
        reject(error);
      };

      document.body.appendChild(script);
    });
  }
}