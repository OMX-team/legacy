import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";
//////////////
import { HomeComponent } from "./components/home components/home/home.component";
import { NavbarComponent } from "./components/home components/navbar/navbar.component";
import { FirstPageComponent } from "./components/home components/first-page/first-page.component";
import { SecondPageComponent } from "./components/home components/second-page/second-page.component";
//////////////
import { UserDashBoardComponent } from "./components/userDashBoard/userDashBoard.component";
import { ProductsComponent } from "./components/userDashBoard/products/products.component";
import { CategroyComponent } from "./components/categroy/categroy.component";
import { SideBarComponent } from "./components/userDashBoard/side-bar/side-bar.component";
import { ProductComponent } from "./components/product/product.component";
import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";
import { AddProductComponent } from "./components/userDashBoard/add-product/add-product.component";
import { ProductCardComponent } from "./components/profile cmponents/product-card/product-card.component";
import { ProfilComponent } from "./components/profile cmponents/profil/profil.component";
import { StartRatingComponent } from "./components/profile cmponents/start-rating/start-rating.component";
import { FreindsComponent } from "./components/freinds/freinds.component";
import { ServicesService } from "./components/services/services.service";
import { VerifyEmailComponent } from "./components/verify-email/verify-email.component";
import { AuthService } from "./components/auth-service/auth.service";
import { TestUploadComponent } from "./components/test-upload/test-upload.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "dashboard/:id",
    component: UserDashBoardComponent,
    pathMatch: "full",
    children: [
      { path: "add-product", component: AddProductComponent },
      { path: "category", component: CategroyComponent },
      { path: "products", component: ProductsComponent }
    ]
  },
  { path: "dashboard/:id/add-product", component: AddProductComponent },
  { path: "dashboard/:id/category", component: CategroyComponent },
  { path: "dashboard/:id/products", component: ProductsComponent },
  { path: "profile/:id", component: ProfilComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserDashBoardComponent,
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
    TestUploadComponent,
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
export class AppModule {}
