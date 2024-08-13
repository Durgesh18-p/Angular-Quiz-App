import { Routes } from '@angular/router';
import { GamepageComponent } from './components/gamepage/gamepage.component';
import { RulesComponent } from './components/rules/rules.component';

export const routes: Routes = [
  {
    path : '',
    component : RulesComponent
  },
{
  path : 'game-page',
  component : GamepageComponent
}
];
