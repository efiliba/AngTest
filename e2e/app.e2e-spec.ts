import { AngTestPage } from './app.po';

describe('ang-test App', function() {
  let page: AngTestPage;

  beforeEach(() => {
    page = new AngTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
