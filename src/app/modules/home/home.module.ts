import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './components/home-routing.module';
import { PeopleTableComponent } from '../../components/people-table/people-table.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PeopleTableComponent],
})
export class HomeModule {}
