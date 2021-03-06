angular.module('testpage', []).
/**
 * @param 'main' CSS Selector for element whose height is to be set on other elements
 * @param 'others' Array of CSS Selector of elements whose height is to be set
 * @param 'offset' Any variance required from the height being set to the element
 */
directive('setequalheight', function($timeout) {
  return {
    link: setequalheightLinker,
    restrict: 'A',
    replace: false
  }

  function setequalheightLinker(scope, element, attribute) {
    $timeout(function () {
      scope.$apply(function(){
        var params = JSON.parse(attribute.setequalheight);
        var mainElement = element[0].querySelector(params.main);
        var mainElementHeight = mainElement.offsetHeight;
        for(var i=0; i<params.others.length; i++) {
          var otherElement;
          // To select current element on which directive is placed
          if(params.others[i]=="") {
            otherElement= element[0];
          }
          else {
            otherElement= element[0].querySelector(params.others[i]);
          }
          if(otherElement && otherElement != null) {
            offset = params.offset && params.offset[i] ? params.offset[i] : 0;
            otherElement.style.height = (mainElementHeight - offset) + 'px';
          }
        }
      });
   },1200);
 }
});
