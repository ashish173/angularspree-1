import { getAuthStatus } from './auth/reducers/selectors';
import { AppState } from './interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { CheckoutService } from './core/services/checkout.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  orderSub$: Subscription;

  constructor(
    private router: Router,
    private checkoutService: CheckoutService,
    private store: Store<AppState>
    ) {
    router
      .events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  ngOnInit() {
    this.store.select(getAuthStatus).
      subscribe(() => {
        this.orderSub$ = this.checkoutService.fetchCurrentOrder()
          .subscribe();
      });
  }

  ngOnDestroy() {
    this.orderSub$.unsubscribe();
  }

}
