export interface Room{
    TotalNumberRooms:number;
    AvailableRooms:number;
    BookedRooms:number
}

export interface RoomList{
    roomNo:number;
    roomType:string;
    amenities:string;
    price:number;
    photos:string;
    CheckinTime:Date;
    CheckoutTime:Date;
    rating:number;
}
