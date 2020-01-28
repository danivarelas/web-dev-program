import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule } from '@angular/router';
import { CharacterDetailGuard } from './character-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'characters', component: CharactersListComponent },
      {
        path: 'characters/:id',
        canActivate: [CharacterDetailGuard],
        component: CharacterDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class CharacterModule { }
