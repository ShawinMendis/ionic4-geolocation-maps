import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoomProperty: 4;

  constructor() {}
}
