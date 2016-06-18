# SetEqualHeight
Set one element’s height as height to other elements using angularjs

##Usage

Directive parameters:

>  setequalheight='{"main": ".child.three", "others": [".child.two .line", ".child.one", ".details"], "offset":["48","0", "0"]}'

where,

* 'main' CSS Selector for element whose height is to be set on other elements
* 'others' Array of CSS Selector of elements whose height is to be set
* 'offset' Any variance required from the height being set to the element
