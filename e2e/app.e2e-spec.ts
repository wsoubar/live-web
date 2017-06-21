import { LiveWebPage } from './app.po';

describe('live-web App', () => {
  let page: LiveWebPage;

  beforeEach(() => {
    page = new LiveWebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
