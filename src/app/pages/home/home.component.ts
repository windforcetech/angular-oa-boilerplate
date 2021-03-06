import {Component} from '@angular/core';
import {PageTrack} from '../../decorators/PageTrack';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@PageTrack('HomeComponent')
export class HomeComponent {
  public radarChartLabels: string [] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

  public chartClicked(e: any): void {
    console.log(e);
    throw new Error('test');
  }

  public chartHovered(e: any): void {
    console.log(e);

  }

}
