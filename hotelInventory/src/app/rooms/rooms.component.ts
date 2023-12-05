import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { strict } from 'assert';


@Component({
    selector: 'hinv-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent, HeaderComponent]
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit{

  HotelName = "Hilton-Grand";
  NoOfRooms = 20;
  title = '';
  @ViewChild(HeaderComponent) headerComponent!:HeaderComponent; //, {static:true}
  RoomDetails : Room = {
    TotalNumberRooms:20,
    BookedRooms:10,
    AvailableRooms:5
  }
  // | null = null; to make null the created object
  roomList:RoomList[] = [];
  hiddenRooms = false;
  constructor(){}
  ngAfterViewInit(): void {
    this.headerComponent.title = "Room View";
  }
  ngDoCheck(): void {
    console.log('On changes');
  }
  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomList = [{
      roomNo:1,
      roomType:'Deluxe',
      amenities:'Wifi, Air-Conditioner, TV, Kitchen',
      price: 500,
      photos:'https://logowik.com/content/uploads/images/hilton-hotels-resorts4207.jpg',
      CheckinTime:new Date('11-Nov-2021'),
      CheckoutTime:new Date('12-Nov-2021'),
      rating:4.3
    },
    {
      roomNo:2,
      roomType:'VIP',
      amenities:'Wifi, Air-Conditioner, TV, Kitchen, Body-Spa',
      price: 1000,
      photos:'https://logowik.com/content/uploads/images/hilton-hotels-resorts4207.jpg',
      CheckinTime:new Date('11-Nov-2021'),
      CheckoutTime:new Date('12-Nov-2021'),
      rating:4.5
    },{
      roomNo:3,
      roomType:'Premium',
      amenities:'Wifi, Air-Conditioner, TV, Kitchen, Body-Spa, Pool',
      price: 1500,
      photos:'https://logowik.com/content/uploads/images/hilton-hotels-resorts4207.jpg',
      CheckinTime:new Date('11-Nov-2021'),
      CheckoutTime:new Date('12-Nov-2021'),
      rating:4.8
    }]
  }
  toggle(){
    this.hiddenRooms = !this.hiddenRooms;
    this.title = 'Best List';
  }

  selectRoom(room:RoomList){
    console.log(room);
  }
  addRoom(){
    const room:RoomList = {
      roomNo:4,
      roomType:'Gold',
      amenities:'Wifi, Air-Conditioner, TV, Kitchen, Body-Spa, Pool,Clubbing',
      price:2000,
      photos:'https://logowik.com/content/uploads/images/hilton-hotels-resorts4207.jpg',
      CheckinTime:new Date('11-Nov-2021'),
      CheckoutTime:new Date('12-Nov-2021'),
      rating:5
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList,room]; //changeDetection:ChangeDetectionStrategy.OnPush
  }
}
