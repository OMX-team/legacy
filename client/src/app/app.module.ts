import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./components/user/user.component";
import { ProductsComponent } from "./components/products/products.component";
import { CategroyComponent } from "./components/categroy/categroy.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { ProductComponent } from "./components/product/product.component";
import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProfilComponent } from "./components/profil/profil.component";
import { StartRatingComponent } from "./components/start-rating/start-rating.component";
import { ServicesService } from "./components/services/services.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FirstPageComponent } from "./components/first-page/first-page.component";
import { SecondPageComponent } from "./components/second-page/second-page.component";
import { AuthService } from "./components/auth-service/auth.service";
import { HomeComponent } from "./components/home/home.component";
import { VerifyEmailComponent } from './components/verify-email/verify-email.component'
import { FreindsComponent } from "./components/freinds/freinds.component";

// const appRoutes: Routes = [{ path: "profile/:id", component: ProfilComponent }];
const appRoutes: Routes = [

  { path: "profile/:id", component: ProfilComponent },
  { path: "verify_Email", component: VerifyEmailComponent },
  {
    path: "home", component: HomeComponent, children:
      [
        { path: "quick", component: SecondPageComponent },
      ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "dashboard", component: UserComponent,
    children: [
      { path: "add-product", component: AddProductComponent },
      { path: "category", component: CategroyComponent },
      {
        path: "products", component: ProductsComponent
      },
    ]
  },
];



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    CategroyComponent,
    SideBarComponent,
    ProductComponent,
    NavbarComponent,
    FirstPageComponent,
    SecondPageComponent,
    AddProductComponent,
    ProductCardComponent,
    ProfilComponent,
    StartRatingComponent,
    HomeComponent,
    VerifyEmailComponent,

    FreindsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    // ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],

  providers: [ServicesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
