import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProjectsPage } from './projects';

@NgModule({
  declarations: [
    ProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ProjectsPage
  ]
})
export class ProjectsPageModule { }
