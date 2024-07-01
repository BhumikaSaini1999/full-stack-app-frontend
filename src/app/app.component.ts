import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ProductListComponent, ProductCategoryMenuComponent, SearchComponent, CartStatusComponent, LoginStatusComponent, OktaAuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'},
  providers: []
})
export class AppComponent {
  title = 'angular-ecommerce';
}
