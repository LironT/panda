angular.module('panda').directive('commentList', function() {
	return {
		restrict: 'EA',
		replace: true,
		scope: {
			comments: '=commentList'
		},
		templateUrl: 'commentsList.html'
	}
});