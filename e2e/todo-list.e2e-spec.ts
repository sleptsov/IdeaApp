import { CommonPage } from './page-objects/common.po';

describe('Todo List Page', () => {
  let commonPage: CommonPage = new CommonPage();
  commonPage.navigateTo('/');

  it('should have a title saying ToDo App', () => {
    commonPage.getTitle().then(title => {
      expect(title).toEqual('ToDo App');
    });
  });

});
