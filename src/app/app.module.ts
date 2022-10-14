import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    DogsListComponent,
    DogDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, MatIconModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
