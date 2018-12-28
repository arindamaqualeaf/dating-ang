import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { FindSolemateComponent } from './component/find-solemate/find-solemate.component';
import { DownloadAppComponent } from './component/download-app/download-app.component';
import { LastAddedComponent } from './component/last-added/last-added.component';
import { BlogComponent } from './component/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FindSolemateComponent,
    DownloadAppComponent,
    LastAddedComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
