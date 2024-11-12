import { Component, input, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { IconComponent } from '@elementar/components/icon';
import { AvatarComponent, DicebearComponent } from '@elementar/components/avatar';
import { Notification } from '@elementar/components/notifications';

@Component({
  selector: 'emr-invite-to-edit-files-in-folder',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    RouterLink,
    MatButton,
    IconComponent,
    AvatarComponent,
    DicebearComponent
  ],
  templateUrl: './invite-to-edit-files-in-folder.notification.html',
  styleUrl: './invite-to-edit-files-in-folder.notification.scss'
})
export class InviteToEditFilesInFolderNotification {
  notification = input.required<Notification>();
}
