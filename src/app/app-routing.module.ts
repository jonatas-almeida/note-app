import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'tabs/tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  
  {
    path: 'tabs/tab1/:id',
    component: TaskEditComponent
  },
  {
    path: 'modal',
    loadChildren: () => import('./components/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'modal-edit',
    loadChildren: () => import('./components/modal-edit/modal-edit.module').then( m => m.ModalEditPageModule)
  },
  {
    path: 'modal-confirm',
    loadChildren: () => import('./components/modal-confirm/modal-confirm.module').then( m => m.ModalConfirmPageModule)
  },
  {
    path: 'task-details/:id',
    loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  },
  {
    path: 'finished',
    loadChildren: () => import('./finished/finished.module').then( m => m.FinishedPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
