import { AngularPlayPage } from './app.po';

describe('angular-play App', () => {
  let page: AngularPlayPage;

  beforeEach(() => {
    page = new AngularPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
