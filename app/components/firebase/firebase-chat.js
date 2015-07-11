  (function(){
  'use strict';

  angular.module(
    'gdg.chats.chat',
    [
      'ui.router'
    ])
    .config(
      [ '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

          $stateProvider

          .state('app.chats.chat', {
            url: '/chats-gdg-cali',
            views: {
              'content@' : {
                templateUrl: './app/components/firebase/chats.html',
               controller: function(utils,  chatsLista , $log ,Notif, chats, $modal, $window, $firebaseArray) {
                  var vm = this;
                  var ref = new Firebase("https://radiant-heat-5907.firebaseio.com/");
                  vm.mensajes = $firebaseArray(ref);   

                        vm.mensaje = function(){
                        ref.push({ 'autor': vm.mensajes.autor, 'mensaje': vm.mensajes.mensaje });
                        vm.mensajes.autor = '';
                        vm.mensajes.mensaje = '';
                                                } 
                                             

              
                },
                controllerAs: 'vm'
              }
            }
          })

          
        }
      ]
    )


  })();