import { Component } from '@angular/core';
import { MatAnchor, MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  AvgClickRateWidgetComponent,
  AvgOpenRateWidgetComponent,
  EventsWidgetComponent,
  TasksInProgressWidgetComponent,
  TeamWidgetComponent, TodosWidgetComponent,
  TotalProjectsWidgetComponent,
  TotalSubscribersWidgetComponent,
  TotalTasksWidgetComponent,
  UniqueVisitorsWidgetComponent
} from '@elementar/store/widgets';

@Component({
  standalone: true,
  imports: [
    MatMiniFabButton,
    MatDivider,
    MatLabel,
    MatIcon,
    MatFabButton,
    MatIconButton,
    MatButton,
    MatAnchor,
    MatFormField,
    MatSelect,
    MatCheckbox,
    MatOption,
    TotalSubscribersWidgetComponent,
    AvgOpenRateWidgetComponent,
    AvgClickRateWidgetComponent,
    UniqueVisitorsWidgetComponent,
    TotalTasksWidgetComponent,
    TotalProjectsWidgetComponent,
    EventsWidgetComponent,
    TeamWidgetComponent,
    TasksInProgressWidgetComponent,
    TodosWidgetComponent
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
}
