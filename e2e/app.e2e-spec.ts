import { PromiseObservablePage } from './app.po';

describe('promise-observable App', () => {
  let page: PromiseObservablePage;

  beforeEach(() => {
    page = new PromiseObservablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
