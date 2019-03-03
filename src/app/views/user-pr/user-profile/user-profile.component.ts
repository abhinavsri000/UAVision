import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  ngOnInit(){}
/*   @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    let mapProp = {
      center: new google.maps.LatLng(20.5937, 78.9629),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
} */
}
