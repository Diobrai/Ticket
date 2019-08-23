import {User} from "./user";
import {Company} from "./company";
import {Gare} from "./Gare";

export class UserData {
  static db:Array<User>=[];

  constructor(){
    let c= new Company();
    c.name='Bani Transport';
    let g=new Gare();
    g.name='Bamako';
    g.company='Bani Transport';
    UserData.db.push({username:'Alou',company:c,password:'123456',gare:g});
  }
  getUserByUsernameAndGare(username,gare?): Array<User>{
    if(gare){
      return  UserData.db.filter(u=>u.username==username && u.gare.name==gare);

    }else {
      return  UserData.db.filter(u=>u.username==username);
    }
  }
  addUser(user:User):void{
    UserData.db.push(user);
  }
}
