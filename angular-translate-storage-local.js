angular.module('pascalprecht.translate').factory('$translateLocalStorage', [
  '$window',
  '$translateCookieStorage',
  function ($window, $translateCookieStorage) {
    var localStorageAdapter = (function() {
      var langKey;
      
      return {
        get: function (name) {
          if(!langKey) {
            langKey = $window.localStorage.getItem(name);
          }
          
          return langKey;
        },
        set: function (name, value) {
          langKey=value;
          $window.localStorage.setItem(name, value);
        }
      };
    }());
    var $translateLocalStorage = 'localStorage' in $window && $window.localStorage !== null ? localStorageAdapter : $translateCookieStorage;
    return $translateLocalStorage;
  }
]);