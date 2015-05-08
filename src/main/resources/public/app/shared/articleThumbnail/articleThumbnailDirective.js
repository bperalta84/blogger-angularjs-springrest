//create a directive with the following isolated scope
// "title":"Black and white2",
// "imageUrl":"assests/img/photography/img1.jpg",
// "date": "Feb 6, 2014",
// "content":"This is a black and white image2"
angular.module("app")
.directive("myArticleThumbnail",function(){
	return {
		scope: {
			articleId:"@",
			title:"@",
			date:"@",
			description:"@",
			imageUrl:"@",
			authorName:"@",
			authorId:"@"
			
		},
		templateUrl: "app/shared/articleThumbnail/articleThumbnailView.html",
		link: function(scope,ele,attrs){
			scope.$watch(function(scope){
				return scope.title;
			}, function(newVal){
				scope.articleName=scope.title.replace(/ /g,"-");
				
				
			})
		}
	
	}
});