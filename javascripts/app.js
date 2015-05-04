 // create a module
 var app = angular.module( 'angularApp', [] ); 
     // Create a controller for the view
     app.controller("SimpleController", function( $scope ){
            
        // $scope is the view Model
        // Add initial comments to the $scope
        $scope.comments = ["This is the first comment!",
        "Here's the second one!",
        "And this is one more.",
        "Here is another one!",
        ];
        //Add a method to the controller for addCommentFromInputBox
        $scope.addCommentFromInputBox = function (){
          if($.inArray($scope.newComment, $scope.comments) ===-1)
          $scope.comments.push( $scope.newComment );
          }
        });

    var main = function () {
    "use strict";
	var scope = angular.element($("#container")).scope();

    $(".comment-input button").on("click", function (event) {
        scope.addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            scope.addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
