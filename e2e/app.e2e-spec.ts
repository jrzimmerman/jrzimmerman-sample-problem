import { JrzimmermanSampleProblemPage } from './app.po';

describe('jrzimmerman-sample-problem App', function() {
  let page: JrzimmermanSampleProblemPage;

  beforeEach(() => {
    page = new JrzimmermanSampleProblemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
