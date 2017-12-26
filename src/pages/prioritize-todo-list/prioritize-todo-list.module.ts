import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrioritizeTodoListPage } from './prioritize-todo-list';

@NgModule({
  declarations: [
    PrioritizeTodoListPage,
  ],
  imports: [
    IonicPageModule.forChild(PrioritizeTodoListPage),
  ],
})
export class PrioritizeTodoListPageModule {}
