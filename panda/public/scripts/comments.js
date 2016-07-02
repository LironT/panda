'use strict';

angular.module('panda').service('Comments', function(Restangular) {
  var that = this;

  this.all = Restangular.all('/comments');
  const gravatarSRCPrefix = 'https://www.gravatar.com/avatar/';

  this.getComments = () => {
    return that.all.customGET('commentsList');
  };

  this.addComment = (comment) => {
    comment.gravatarSRC = gravatarSRCPrefix + md5(comment.userEmail.trim().toLowerCase());
    return that.all.customPOST(comment, 'addComment')
  };
});