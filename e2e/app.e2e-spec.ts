import { RssPage } from './app.po';

describe('rss App', function() {
  let page: RssPage;

  beforeEach(() => {
    page = new RssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
