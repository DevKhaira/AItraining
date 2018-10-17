
import { defineSupportCode } from 'cucumber';
import kungFu from '../pageobjects/kungFu.page';

defineSupportCode(function({ When }) {
  When('I explore the page', function() {
    kungFu.decision('./test/learn/route.json');
  });

  When('I click the CTA button', function() {
    kungFu.clickCTA();
  });

});
