import { Hw15Page } from './app.po';

describe('hw15 App', function() {
  let page: Hw15Page;

  beforeEach(() => {
    page = new Hw15Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
