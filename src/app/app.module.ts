import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ProductModule } from './product/product.module';
import { ContactModule } from './contact/contact.module';
import { ProfileModule } from './profile/profile.module';
import { AproposModule } from './apropos/apropos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    ContactModule,
    ProfileModule,
    AproposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
