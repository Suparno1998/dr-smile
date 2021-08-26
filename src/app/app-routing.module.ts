import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { AllSmilesComponent } from './all-smiles/all-smiles.component';
import { BreathComponent } from './breath/breath.component';
import { BrushComponent } from './brush/brush.component';
import { CancerComponent } from './cancer/cancer.component';
import { CheckReviewsComponent } from './check-reviews/check-reviews.component';
import { ChildrenComponent } from './children/children.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CookieComponent } from './cookie/cookie.component';
import { CosmoComponent } from './cosmo/cosmo.component';
import { CovidComponent } from './covid/covid.component';
import { CrownComponent } from './crown/crown.component';
import { DenturesComponent } from './dentures/dentures.component';
import { DietComponent } from './diet/diet.component';
import { ErisionComponent } from './erision/erision.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { FillingComponent } from './filling/filling.component';
import { FluorideComponent } from './fluoride/fluoride.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ImplantComponent } from './implant/implant.component';
import { LoginComponent } from './login/login.component';
import { OrthoComponent } from './ortho/ortho.component';
import { PeadoComponent } from './peado/peado.component';
import { RctComponent } from './rct/rct.component';
import { ScalingComponent } from './scaling/scaling.component';
import { SmileComponent } from './smile/smile.component';
import { SmokingComponent } from './smoking/smoking.component';
import { TeamComponent } from './team/team.component';
import { WisdomComponent } from './wisdom/wisdom.component';


const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: '/home'},
  {path : 'robots',redirectTo : 'robots.txt'},
  {path : 'sitemap',redirectTo : 'sitemap.xml'},
  {path : 'login',component : LoginComponent},
  {path : 'check',component : CheckReviewsComponent},
  {path : "form", component : FormComponent},
  {path : "home" ,component : HomeComponent},
  {path : "team", component : TeamComponent},
  {path : "privacy", component : CookieComponent},
  {path : "review", component : AllReviewsComponent},
  {path : "smiles", component : AllSmilesComponent},
  //oral cavity components
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
  // service components
  {path : "filling",component : FillingComponent},
  {path : "rct",component : RctComponent },
  {path : "scaling",component : ScalingComponent},
  {path : "extraction",component : ExtractionComponent},
  {path : "dentures",component : DenturesComponent },
  {path : "crown",component : CrownComponent},
  {path : "implant",component : ImplantComponent},
  {path : "ortho",component : OrthoComponent},
  {path : "cosmo",component : CosmoComponent},
  {path : "peado",component : PeadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
