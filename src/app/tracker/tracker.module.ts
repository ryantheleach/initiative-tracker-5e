import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { CreatureListComponent } from './creature/creature-list.component';
import { CreatureComponent } from './creature/creature.component';
import { EncounterComponent } from './encounter/encounter.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { metaReducers, reducers } from './store';
import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';

const COMPONENTS = [
  TrackerComponent,
  PlayButtonComponent,
  CreatureListComponent,
  CreatureComponent,
  EncounterComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    TrackerRoutingModule,
    StoreModule.forFeature('tracker', reducers, { metaReducers }),
  ],
  providers: []
})
export class TrackerModule { }
