angular.module('pascalprecht.translate').factory('$translateLocalStorage', [
  '$window',
  '$translateCookieStorage',
  function ($window, $translateCookieStorage) {
    var localStorageAdapter = {
        get: function (name) {
          return $window.localStorage.getItem(name);
        },
        set: function (name, value) {
          $window.localStorage.setItem(name, value);
        }
      };
    var hasLocalStorageSupport = 'localStorage' in $window && $window.localStorage !== null;
    if (hasLocalStorageSupport) {
      var testKey = 'pascalprecht.translate.storageTest';
      try {
        $window.localStorage.setItem(testKey, 'foo');
        $window.localStorage.removeItem(testKey);
      } catch (e){
        hasLocalStorageSupport = false;
      }
    }
    var $translateLocalStorage = hasLocalStorageSupport ? localStorageAdapter : $translateCookieStorage;
    return $translateLocalStorage;
  }
]);