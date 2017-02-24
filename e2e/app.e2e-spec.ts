import { MatChunkTestPage } from './app.po';

describe('mat-chunk-test App', () => {
  let page: MatChunkTestPage;

  beforeEach(() => {
    page = new MatChunkTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
