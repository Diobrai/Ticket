import {Reservations} from "./reservations";

export class ReservationsList {
  static db:Reservations[]=[];
  constructor(){}
  AddReservation(reservation: Reservations){
    ReservationsList.db.push(reservation);
  }

  GetReservation(company: string,place:string,date:string):Reservations[]{
    let reservation=ReservationsList.db.filter(r=>r.company==company&&r.place.toString()==place&&r.date==date);
    return reservation;
  }

  AllReservation():Reservations[]{
    return ReservationsList.db;
  }


}
