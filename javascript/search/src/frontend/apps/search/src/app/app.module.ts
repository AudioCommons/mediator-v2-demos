import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MaterialModule} from './materialModule';
// import { OrderModule } from 'ngx-order-pipe'; //TODO
//import {MatInputModule, MatFormFieldControl} from '@angular/material';

import {KnalledgeEdgeService} from '@colabo-knalledge/f-store_core/knalledge-edge.service';
import {KnalledgeNodeService} from '@colabo-knalledge/f-store_core/knalledge-node.service';
import {KnalledgeMapService} from '@colabo-knalledge/f-store_core/knalledge-map.service';

// Puzzle modules
import { RimaAaaModule } from '@colabo-rima/f-aaa';
import { AudioCommonMediatorModule } from '@audio-commons/mediator-search';
import { AudioCommonPlayerModule } from '@audio-commons/play-player';

// import {IndexComponent} from './index/index.component';

import { AppRoutingModule } from './app-routing.module';

var moduleDeclarations = [
  AppComponent,
  // IndexComponent,

];

var moduleImports = [
  BrowserModule
  ,FormsModule
  // ,ReactiveFormsModule

  , HttpClientModule
  // Material
  , BrowserAnimationsModule
  , MaterialModule
  , FlexLayoutModule
  // , FlexLayoutModule
  , AppRoutingModule
  // , OrderModule
  // ,
  // MatInputModule,
  // MatFormFieldControl
  // rima

  // Puzzle modules
  , RimaAaaModule
  , AudioCommonMediatorModule
  , AudioCommonPlayerModule
];
// moduleImports.push(MainModule);

moduleImports.push(AppRoutingModule);

import {GlobalEmittersArrayService} from '@colabo-puzzles/f-core/code/puzzles/globalEmitterServicesArray';

declare var window:any;

// old external way of declaring puzzles' config
// export var Plugins:any = window.Config.Plugins;

@NgModule({
  declarations: moduleDeclarations,
  imports: moduleImports,
  entryComponents: [
    // You must include your dialog class in the list of entryComponents in your module definition so that the AOT compiler knows to create the ComponentFactory for it.
    // @see: https://material.angular.io/components/dialog/overview#aot-compilation
    // AdvancedDialog,
    // NotificationComponent
  ],
  providers: [
    KnalledgeEdgeService, KnalledgeNodeService, KnalledgeMapService,

    // old external way of injecting puzzles' config
    // through Plugins service
    // {provide: "Plugins", useValue: Plugins},

    // provide ng build error: "Can't resolve all parameters for GlobalEmitterService"
    // {provide: GlobalEmitterService, useClass: GlobalEmitterService},
    {provide: GlobalEmittersArrayService, useClass: GlobalEmittersArrayService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
