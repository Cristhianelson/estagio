import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component'
import { QuestionarioComponent } from './questionario/questionario.component'

const appRoutes: Routes = [
    {
        path: 'avaliacao',
        component: AdminComponent
    },
    {
        path: 'questionario',
        component: QuestionarioComponent
    },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);