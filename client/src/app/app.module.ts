
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';
import { CategroyComponent } from './components/categroy/categroy.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductComponent } from './components/product/product.component';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  // { path: '', component:  },

  {
    // { path: '**', redirectTo: 'home', pathMatch: 'full' }
    path: 'profile', component: UserComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'categroy', component: CategroyComponent },
      { path: 'add-product', component: AddProductComponent },
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    CategroyComponent,
    SideBarComponent,
    ProductComponent,
    AddProductComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
