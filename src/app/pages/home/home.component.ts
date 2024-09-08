import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServicesService } from '../../services/user-services.service';
import { IApiUsers } from '../../interfaces/iapi-users.interface';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

usersServices = inject(UserServicesService);
arrUsers:IUser[] = [];

ngOnInit(){
  
  this.usersServices.getAllObservable().subscribe((data: IApiUsers) => {
    console.log(data)
    this.arrUsers = data.results
  })

  //tenemos en data.results la lista de usuarios
}

}
