import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit, OnChanges {
  @Input() data!: any;
  day!: string;
  dayNo!: number;
  month!: string;
  days = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
  months = [
    'Oca',
    'Şub',
    'Mar',
    'Nis',
    'May',
    'Haz',
    'Tem',
    'Ağu',
    'Eyl',
    'Eki',
    'Kas',
    'Ara',
  ];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dayNo = new Date(this.data.date).getDate();
      this.day = this.days[new Date(this.data.date).getDay()];
      this.month = this.months[new Date(this.data.date).getMonth()];
    }
  }

  ngOnInit(): void {}
}
