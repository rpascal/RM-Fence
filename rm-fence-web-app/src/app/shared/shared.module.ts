import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';

// SERVICES
import { AppLoaderService } from './services/app-loader/app-loader.service';

const classesToInclude: any[] = [

]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [
    AppLoaderService
  ],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule { }
