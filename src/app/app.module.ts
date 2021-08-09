import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CovidComponent } from './covid/covid.component';
import { AdviceComponent } from './advice/advice.component';
import { FluorideComponent } from './fluoride/fluoride.component';
import { ErisionComponent } from './erision/erision.component';
import { CancerComponent } from './cancer/cancer.component';
import { BreathComponent } from './breath/breath.component';
import { DietComponent } from './diet/diet.component';
import { ChildrenComponent } from './children/children.component';
import { BrushComponent } from './brush/brush.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { WisdomComponent } from './wisdom/wisdom.component';
import { SmileComponent } from './smile/smile.component';
import { SmokingComponent } from './smoking/smoking.component';
import { DenturesComponent } from './dentures/dentures.component';
import { RctComponent } from './rct/rct.component';
import { ScalingComponent } from './scaling/scaling.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { CrownComponent } from './crown/crown.component';
import { FillingComponent } from './filling/filling.component';
import { ImplantComponent } from './implant/implant.component';
import { OrthoComponent } from './ortho/ortho.component';
import { CosmoComponent } from './cosmo/cosmo.component';
import { PeadoComponent } from './peado/peado.component';
import { TeamComponent } from './team/team.component';
import { OralComponent } from './oral/oral.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    FormComponent,
    HomeComponent,
    NotificationsComponent,
    CovidComponent,
    AdviceComponent,
    FluorideComponent,
    ErisionComponent,
    CancerComponent,
    BreathComponent,
    DietComponent,
    ChildrenComponent,
    BrushComponent,
    CoffeeComponent,
    WisdomComponent,
    SmileComponent,
    SmokingComponent,
    DenturesComponent,
    RctComponent,
    ScalingComponent,
    ExtractionComponent,
    CrownComponent,
    FillingComponent,
    ImplantComponent,
    OrthoComponent,
    CosmoComponent,
    PeadoComponent,
    TeamComponent,
    OralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
