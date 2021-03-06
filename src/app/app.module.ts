import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NodeTestService } from './services/node-test.service';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [NodeTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
