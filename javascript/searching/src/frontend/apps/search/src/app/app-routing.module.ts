import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SoundResultsComponent } from '@audio-commons/mediator-search';

import {RimaRegisterComponent} from '@colabo-rima/f-aaa/rima-register/rima-register.component';
import { RimaLoginComponent } from '@colabo-rima/f-aaa/rima-login/rima-login.component';

// import {TopiChatTalkForm} from '@colabo-topichat/talk';

const routes: Routes = [
  {//default route
    path: '',
    redirectTo: '/play',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SoundResultsComponent
  },
  {
    path: 'play',
    component: SoundResultsComponent
  },
  // same route but with the roomId provided
  {
    path: 'play/room/:roomId',
    component: SoundResultsComponent
  },
  // same route but with the soundId provided
  {
    path: 'play/sound/:soundId',
    component: SoundResultsComponent
  },
  // same route but with the roomId and soundId provided
  {
    path: 'play/room/:roomId/sound/:soundId',
    component: SoundResultsComponent
  },
  {
    path: 'rima-register',
    component: RimaRegisterComponent
  },
  {
    path: 'rima-login',
    component: RimaLoginComponent
  }

/*
  - routes
    -    .when('/chat/:rooms/', {

    -     .when('/chat/:rooms/:sounds', {

    -     .when('/chat/:sounds', {

    -  .when('/chat', {

*/

];

@NgModule({
  exports: [
    // makes router directives available for use in
    // other components that will need them
    RouterModule
  ],
  imports: [
    // initialize RouterModule with routes
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
