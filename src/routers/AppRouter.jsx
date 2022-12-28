import { Basket } from '@/components/basket';
import { Footer, Navigation } from '@/components/common';
import * as ROUTES from '@/constants/routes';
import {STRIPE_PUBLIC_KEY} from '@/constants/constants';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import * as view from '@/views';
import AdminRoute from './AdminRoute';
import ClientRoute from './ClientRoute';
import PublicRoute from './PublicRoute';
import { Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();
export const stripe = loadStripe(STRIPE_PUBLIC_KEY);

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Basket />
      <Elements stripe={stripe}>

      <Switch>
        <Route
          component={view.Search}
          exact
          path={ROUTES.SEARCH}
        />
        <Route
          component={view.Home}
          exact
          path={ROUTES.HOME}
        />
        <Route
          component={view.Shop}
          exact
          path={ROUTES.SHOP}
        />
        <Route
          component={view.FeaturedProducts}
          exact
          path={ROUTES.FEATURED_PRODUCTS}
        />
        <Route
          component={view.RecommendedProducts}
          exact
          path={ROUTES.RECOMMENDED_PRODUCTS}
        />
        <PublicRoute
          component={view.SignUp}
          path={ROUTES.SIGNUP}
        />
        <PublicRoute
          component={view.SignIn}
          exact
          path={ROUTES.SIGNIN}
        />
        <PublicRoute
          component={view.ForgotPassword}
          path={ROUTES.FORGOT_PASSWORD}
        />
        <Route
          component={view.ViewProduct}
          path={ROUTES.VIEW_PRODUCT}
        />
        <Route
          component={view.ViewCategory}
          path={ROUTES.VIEW_CATEGORY}
        />
        <ClientRoute
          component={view.UserAccount}
          exact
          path={ROUTES.ACCOUNT}
        />
        <ClientRoute
          component={view.EditAccount}
          exact
          path={ROUTES.ACCOUNT_EDIT}
        />
        <PublicRoute
          component={view.Checkout}
          path={ROUTES.CHECKOUT}
        />
        <AdminRoute
          component={view.Dashboard}
          exact
          path={ROUTES.ADMIN_DASHBOARD}
        />
         <AdminRoute
          component={view.ImportProducts}
          path={ROUTES.IMPORT_PRODUCTS}
        />
        <AdminRoute
          component={view.Products}
          path={ROUTES.ADMIN_PRODUCTS}
        />
         <AdminRoute
          component={view.SiteContent}
          path={ROUTES.ADMIN_CONTENT}
        />
         <AdminRoute
          component={view.Users}
          path={ROUTES.ADMIN_USERS}
        />
        <AdminRoute
          component={view.AddProduct}
          path={ROUTES.ADD_PRODUCT}
        />
       
        <AdminRoute
          component={view.EditProduct}
          path={`${ROUTES.EDIT_PRODUCT}/:id`}
        />
        <PublicRoute component={view.PageNotFound} />
      </Switch>
      </Elements>
      <Footer />
    </>
  </Router>
);

export default AppRouter;
