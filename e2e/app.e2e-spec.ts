import { MoviesFrontEndPage } from './app.po';

describe('movies-front-end App', () => {
  let page: MoviesFrontEndPage;

  beforeEach(() => {
    page = new MoviesFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
