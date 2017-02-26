import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Upper3LetterPipe} from "./pipes/upper2Letter.pipe";
import {IncreasePipe} from "./pipes/increase.pipe";
import {HttpHeroComponent} from "./Components/http-hero/http-hero.component";
import {HttpApiComponent} from "./Components/http-api/http-api.component";
import {RedBorderDirective} from "./directives/red-border.directive";

import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {StarRatingModule} from "./Components/star-rating/star-rating.module";

import {MaterialModule} from "@angular/material";
import 'hammerjs';
import {ModalModule} from "./Components/ng2-modal/index";
import {RateAngComponent} from "./Components/rate-ang1/rate-ang1.component";

@NgModule({
  imports: [
        CommonModule,
      BrowserModule,
      FormsModule,
      StarRatingModule,     // star rating    https://www.npmjs.com/package/angular-star-rating
      MaterialModule,
      ModalModule,           // https://www.npmjs.com/package/@strictd/ng2-modal
  ],
    declarations: [
        Upper3LetterPipe,
        IncreasePipe,
        HttpHeroComponent,
        HttpApiComponent,
        RedBorderDirective,
        RateAngComponent
    ],
    exports: [
        Upper3LetterPipe,
        IncreasePipe,
        HttpHeroComponent,
        HttpApiComponent,
        RedBorderDirective,
        StarRatingModule,     // star rating
        ModalModule,           // https://www.npmjs.com/package/@strictd/ng2-modal
        RateAngComponent
    ],
    entryComponents: [
            ],
    bootstrap: [  ]
})
export class SharedModule { }

