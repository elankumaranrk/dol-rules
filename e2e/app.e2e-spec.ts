import { DolRulesCheckerPage } from './app.po';

describe('dol-rules-checker App', function() {
  let page: DolRulesCheckerPage;

  beforeEach(() => {
    page = new DolRulesCheckerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
