import { HttpPostPage } from './app.po';

describe('http-post App', function() {
  let page: HttpPostPage;

  beforeEach(() => {
    page = new HttpPostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
