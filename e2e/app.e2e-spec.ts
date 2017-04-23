import { FmkClientPage } from './app.po';

describe('fmk-client App', () => {
  let page: FmkClientPage;

  beforeEach(() => {
    page = new FmkClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
