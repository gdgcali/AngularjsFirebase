(function(){
'use strict';

angular.module(
  'gdg.chats',
  [
    'ui.router',
  ])
  .config(
    [ '$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider, $firebaseArray) {

        $stateProvider
        .state('app.chats', {
          abstract: true,
          url: 'chats-gdg',
           resolve: {
            chatsLista: ['chats',
              function(chats) {
                 return [
          
        ]
              }
            ]
            
          }
        })
      }
    ]
  ) //config


})();