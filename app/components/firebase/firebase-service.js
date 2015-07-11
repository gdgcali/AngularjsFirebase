(function(){
'use strict';

angular
  .module('gdg.chats.service', [])
  .factory('chats', chats);

  chats.$inject = ['WebService'];


  var path = 'chats';
function chats(WebService) {
  var list = []; //TODO update this
  return {
    getAll: function() {
      return WebService.get(path)
    },

    getDetail: function(id) {
      return WebService.get(path+'/'+id)
    },

    destroy: function(id) {
      return WebService.del(path+'/'+id)
    },

    update: function(id, data) {
      return WebService.put(path+'/'+id, data)
    },

    save: function(data) {
      return WebService.post(path, data)
    }
  };

};



})();