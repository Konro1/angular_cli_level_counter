import { LevelCounterPage } from './app.po';

describe('level-counter App', function() {
  let page: LevelCounterPage;

  beforeEach(() => {
    page = new LevelCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
