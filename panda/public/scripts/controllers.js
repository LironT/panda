"use strict";

angular.module('panda').controller('mainCtrl', ['$scope', 'Comments', function ($scope, Comments) {
  let initComments = () => {
    $scope.newComment = {userEmail: '', comment: ''};

    Comments.getComments().then((comments) => {
      return $scope.comments = comments.plain();
    });
  };
  initComments();

  $scope.addComment = (comment) => {
    Comments.addComment(comment).finally(() => {
      initComments();
    });
  };
}]);
