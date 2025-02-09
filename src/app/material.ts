import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
    imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatDividerModule, MatMenuModule, MatCardModule, MatButtonToggleModule, MatBadgeModule,
        MatExpansionModule
    ],
    exports: [MatIconModule, MatButtonModule, MatToolbarModule, MatDividerModule, MatMenuModule, MatCardModule, MatButtonToggleModule, MatBadgeModule,
        MatExpansionModule
    ]

})

export class MaterialModule{}

