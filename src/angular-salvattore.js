(function () {
  'use strict';

  angular.module('nk.salvattore', [])
    .directive('salvattore', function($log, $window) {

      function compile(scope, element, attrs) {
        if (!$window.salvattore) {
          return $log.error('Could not find `window.salvattore`!');
        }

        // First add the required `data-columns` attribute
        element.attr('data-columns', true);
        // And then initialize salvattore.
        $window.salvattore.register_grid(element[0]);
      }

      return {
        restrict: 'A',
        link: compile
      };

    });

})();
