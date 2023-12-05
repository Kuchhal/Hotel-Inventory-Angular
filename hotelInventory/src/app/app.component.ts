import { Component, ViewChild, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { ContainerComponent } from "./container/container.component";

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RoomsComponent, ContainerComponent]
})
export class AppComponent implements AfterViewInit{
  title = 'hotelInventory';
  // role = 'Admin';
  @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
  // @ViewChild('name',{static:true}) name!:ElementRef;
  ngAfterViewInit(){
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.NoOfRooms = 50;
    // console.log(this.name);
  }
}
