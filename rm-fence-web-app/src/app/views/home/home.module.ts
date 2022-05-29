import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { WindowRefService } from '@shared/services/window-ref/window-ref.service';
import { SharedMaterialModule } from '@shared/shared-material.module';
import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    ServicesSectionComponent,
    WhyUsSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    SharedModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NguCarouselModule,
  ],
  providers: [
    WindowRefService
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
