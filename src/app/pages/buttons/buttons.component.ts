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
    MatTooltip
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}