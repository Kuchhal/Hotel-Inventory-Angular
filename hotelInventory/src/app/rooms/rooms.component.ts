import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
    selector: 'hinv-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent]
})
export class RoomsComponent implements OnInit{

  HotelName = "Hilton-Grand";
  NoOfRooms = 20;
  RoomDetails : Room = {
    TotalNumberRooms:20,
    BookedRooms:10,
    AvailableRooms:5
  }
  // | null = null; to make null the created object
  roomList:RoomList[] = [{
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
  }
]
  hiddenRooms = false;
  selectedRoom!:RoomList;
  constructor(){}
  ngOnInit(): void {
  }
  toggle(){
    this.hiddenRooms = !this.hiddenRooms;
  }

  selectRoom(room:RoomList){
    this.selectedRoom = room;
  }

}
