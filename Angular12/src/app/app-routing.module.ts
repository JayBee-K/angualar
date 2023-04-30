import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./index/index.component";
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', component: IndexComponent}, // Đường dẫn không có thì sẽ lấy ra component mặc định
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
