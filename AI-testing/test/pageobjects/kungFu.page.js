
import Page from './page';

const fs = require('fs');
const path = require('path');
const scrollRoute = './test/learn/scrollRoute.json';
const testContext = require('../testContext'); 

class KungFuPage extends Page  {
  /**
  * define elements
  */

  get bottomPage()    { return $('#sidebar-footer'); }
  get CTA()           { return "//*[contains(text(), 'Start training with your free taster session')]"; }

  /**
   * define or overwrite page methods
   */

  clickCTA(retries = 0) {
    try {
      $$(this.CTA)[this.clickVisibleElement(this.CTA)].click();
    } 
    catch (err) {
      if (retries < 10){
        this.clickCTA(retries + 1);
      } else {
        err;
      }
    }
  }

  clickVisibleElement( selector, retries = 0 ) {
    try {
      const arrayVisible = browser.isVisible(selector);
      return arrayVisible.indexOf(true);
    } catch (err) {
      if (retries < 10){
        this.clickVisibleElement (selector, retries + 1);
      } else {
        err;
      }
    }
  };

  isAtBottom () {
    this.bottomPage.waitForVisible();
    return this.bottomPage.isVisible();
  }

  open () {
    browser.url('/');
  }

  decision (fileLocation) {
    const route = this.choose(fileLocation);
    testContext.route = route;
    this.applyBehaviour(route);
  }

  choose (fileLocation) {
    const selection = JSON.parse(fs.readFileSync(path.join(process.cwd(), fileLocation)));
    const value = Object.values(selection).reduce((a, b) => a + b, 0);
    const randomiseValue = Math.floor(Math.random() * value);
    const place = (this.selectPlace(selection, randomiseValue));
    return place;
  }

  selectPlace (selection, value) {
    let accumulation = 0;
    let returnValue;
    Object.keys(selection).forEach(function(key) {
      if (value >= accumulation) {
        returnValue = key;
        }
      accumulation += selection[key];
    })
    return returnValue
  }

  applyBehaviour (key) {
    switch(key) {
      case 'scroll':
          this.scrollUpAndDown();
          break;
      case 'refresh':
          browser.refresh();
          break;
      case 'pause':
          browser.pause(5000);
          break;
      default:
          console.log(key + ' something wrong');
    }
  }

  scrollUpAndDown() {
    const scrollValue = this.choose(scrollRoute);
    testContext.scrollRoute = scrollValue;
    const scrollDistance = browser.windowHandleSize().value.height * scrollValue;
    browser.scroll( 0 , scrollDistance);
    browser.scroll( 0, -scrollDistance);
  }
}

export default new KungFuPage();
