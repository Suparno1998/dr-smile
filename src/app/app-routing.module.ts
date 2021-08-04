import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreathComponent } from './breath/breath.component';
import { BrushComponent } from './brush/brush.component';
import { CancerComponent } from './cancer/cancer.component';
import { ChildrenComponent } from './children/children.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CovidComponent } from './covid/covid.component';
import { DietComponent } from './diet/diet.component';
import { ErisionComponent } from './erision/erision.component';
import { FluorideComponent } from './fluoride/fluoride.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SmileComponent } from './smile/smile.component';
import { SmokingComponent } from './smoking/smoking.component';
import { WisdomComponent } from './wisdom/wisdom.component';


const routes: Routes = [
  {path : "form", component : FormComponent},
  {path : "news", component : NotificationsComponent},
  {path : "covid", component : CovidComponent},
  {path : "fluoride",component : FluorideComponent},
  {path : "erision",component : ErisionComponent},
  {path : "cancer",component : CancerComponent},
  {path : "breath",component : BreathComponent},
  {path : "diet",component : DietComponent},
  {path : "children",component : ChildrenComponent},
  {path : "smoking",component : SmokingComponent},
  {path : "brush",component : BrushComponent},
  {path : "coffee",component : CoffeeComponent},
  {path : "wisdom",component : WisdomComponent},
  {path : "smile",component : SmileComponent},
  {path : "" , component : HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
