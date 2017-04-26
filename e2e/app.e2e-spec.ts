import { NgNodePage } from './app.po';

describe('ng-node App', () => {
  let page: NgNodePage;

  beforeEach(() => {
    page = new NgNodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
