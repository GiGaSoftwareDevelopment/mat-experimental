import { Component } from '@angular/core';
import {
  MatAnchor,
  MatButton,
  MatFabAnchor,
  MatFabButton,
  MatIconAnchor,
  MatIconButton, MatMiniFabAnchor, MatMiniFabButton
} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    MatAnchor,
    MatButton,
    MatFabAnchor,
    MatFabButton,
    MatIcon,
    MatIconAnchor,
    MatIconButton,
    MatMiniFabAnchor,
    MatMiniFabButton,
    MatTooltip,
    RouterLink
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}
