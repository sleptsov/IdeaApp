import { TabsPage } from './page-objects/tabs.po';
import { CommonPage } from './page-objects/common.po';

describe('Tabs Page', () => {
  let commonPage: CommonPage = new CommonPage();
  let tutorialPage: TabsPage = new TabsPage();
  commonPage.navigateTo('/');

  it('should have a title saying Idea App', () => {
    commonPage.getTitle().then(title => {
      expect(title).toEqual('Idea App');
    });
  });

});
