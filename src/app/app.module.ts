import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { SharedModule } from './shared/index';
import { UserModule } from './user/index';
import { HomeModule } from './home/index';
import { LayoutModule } from './layout/index';
import { CoreModule } from './core/index';
import { StoreModule } from '@ngrx/store';
import { reducer } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LayoutModule,
    CoreModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
