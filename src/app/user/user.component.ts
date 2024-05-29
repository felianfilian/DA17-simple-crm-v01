import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIcon, MatTooltipModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(public dialog: MatDialog) {}
  name = 'mario';
  animal = 'yoshi';

  openDialog() {
    this.dialog.open(UserComponent);
}
