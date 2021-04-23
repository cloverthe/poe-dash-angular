import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { GamerComponent } from './gamer/gamer.component';
import { GamerService } from './gamer.service';

@NgModule({
  declarations: [
    AppComponent,
    GamerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GamerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
