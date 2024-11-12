import { Component } from '@angular/core';
import { InviteToEditFilesInFolderNotification, MentionedInCommentNotification } from '@elementar/store/notifications';
import { NotificationDefDirective, NotificationListComponent } from '@elementar/components/notifications';

@Component({
  selector: 'app-invite-to-editor-files-in-folder-notification-example',
  standalone: true,
  imports: [
    InviteToEditFilesInFolderNotification,
    MentionedInCommentNotification,
    NotificationDefDirective,
    NotificationListComponent
  ],
  templateUrl: './invite-to-editor-files-in-folder-notification-example.component.html',
  styleUrl: './invite-to-editor-files-in-folder-notification-example.component.scss'
})
export class InviteToEditorFilesInFolderNotificationExampleComponent {
  notifications = [
    {
      actor: {
        id: 3,
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: 'assets/avatars/1.svg'
      },
      notifier: {
        id: 4,
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: 'assets/avatars/6.svg'
      },
      payload: {
        folderName: 'My New Project'
      },
      isNew: true,
      type: 'inviteToEditFilesInFolder',
      createdAt: '2 hours ago'
    }
  ];
}
