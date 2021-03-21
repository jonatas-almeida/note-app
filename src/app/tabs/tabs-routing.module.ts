import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskEditComponent } from '../components/task-edit/task-edit.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tabs/tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tabs/tab1/:id',
        component: TaskEditComponent
      },
      {
        path: 'task-details/:id',
        loadChildren: () => import('../task-details/task-details.module').then( m => m.TaskDetailsPageModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('../components/modal/modal.module').then( m => m.ModalPageModule)
      },
      {
        path: 'modal-edit',
        loadChildren: () => import('../components/modal-edit/modal-edit.module').then( m => m.ModalEditPageModule)
      },
      {
        path: 'modal-confirm',
        loadChildren: () => import('../components/modal-confirm/modal-confirm.module').then( m => m.ModalConfirmPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
