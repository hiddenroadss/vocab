import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <div *ngIf="email">
        <span class="text-white">{{ email }}</span>
        <span class="material-symbols-outlined"> account_box </span>
      </div>
      <button (click)="logout()" class="ml-4" *ngIf="email">Logout</button>
      <button (click)="signIn()" class="ml-4" *ngIf="!email">Sign In</button>
    </div>
  `,
  styles: [],
})
export class UserProfileComponent {
  email = this.authService.loggedUser;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.authService.signOut();
  }

  signIn() {
    this.router.navigate(['/auth/login']);
  }
}
