import { AngularFire2DemoPage } from './app.po';

describe('angular-fire2-demo App', () => {
  let page: AngularFire2DemoPage;

  beforeEach(() => {
    page = new AngularFire2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
