
import { defineSupportCode } from 'cucumber';
import kungFuPage from '../pageobjects/kungFu.page';

defineSupportCode(function({ Given }) {

  Given(/^I am on the main page$/, function() {
    kungFuPage.open();
  });

});
