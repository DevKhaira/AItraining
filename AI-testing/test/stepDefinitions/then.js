import { defineSupportCode } from 'cucumber';
import kungFuPage from '../pageobjects/kungFu.page';

defineSupportCode(function({ Then }) {
  Then(/^I should be at the bottom of the page$/, function() {
    expect(kungFuPage.isAtBottom()).to.be.false;
  });
  
});
