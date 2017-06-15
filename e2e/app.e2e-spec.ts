import { MatChunkTestPage } from './app.po';

describe('mat-chunk-test App', () => {
  let page: MatChunkTestPage;

  beforeEach(() => {
    page = new MatChunkTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
