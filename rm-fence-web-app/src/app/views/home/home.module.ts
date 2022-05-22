import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@shared/shared.module';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedMaterialModule } from '@shared/shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { WINDOW_PROVIDERS } from '@shared/helpers/window.helper';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    SharedModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NguCarouselModule
  ],
  providers: [WINDOW_PROVIDERS]
})
export class HomeModule { }
