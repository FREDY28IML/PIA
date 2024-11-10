import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  imports: [IonicModule],  
  standalone: true,  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { } 

  ngOnInit() {}

  
  entrar() {
    this.router.navigate(['/portada']);
  }
}
