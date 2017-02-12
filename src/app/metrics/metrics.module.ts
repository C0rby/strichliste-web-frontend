import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetricsComponent} from './metrics.component';
import {RouterModule} from '@angular/router';
import {MetricsService} from './metrics.service';
import {MetricsOverviewComponent} from './metrics-overview/metrics-overview.component';
import {ChartsModule} from 'ng2-charts';
import {MetricsStore} from './metrics.store';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      {path: '', component: MetricsComponent}
    ])
  ],
  declarations: [MetricsComponent, MetricsOverviewComponent],
  providers: [MetricsService, MetricsStore]
})
export class MetricsModule {
}
