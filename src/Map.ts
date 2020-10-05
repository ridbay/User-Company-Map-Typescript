import { Company } from "./Company";
import { User } from "./User";

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: -61,
        lng: 55,
      },
    });
  }
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
