import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NodeTestService } from './services/node-test.service';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

import { AdminModule } from './modules/admin/admin.module';
import { BirlasoftModule } from './modules/birlasoft/birlasoft.module';
import { GeModule } from './modules/ge/ge.module';
import { GenpactModule } from './modules/genpact/genpact.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [NodeTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
