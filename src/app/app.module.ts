import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomNumberDirective } from './custom-directive/custom-number.directive';
import { CustomStyleDirective } from './custom-directive/custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomNumberDirective,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
