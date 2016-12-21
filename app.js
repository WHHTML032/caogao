var app = angular.module("myApp",['me-lazyload']);


app.controller('cont', ['$scope','$http','$timeout',function($scope,$http,$timeout) {
	$scope.arr = [];
	$http.get('home.json').success(function(res){
		$scope.arr = res.data.gallery;
	});
	
	//使用swiper插件需要使用angular的定时器
	$timeout(function(){
		$scope.swiper=new Swiper('.swiper-container',{
			loop: true,
		    speed: 500,
		    autoplay:2000,
		    autoplayDisableOnInteraction:false,
		    // 如果需要分页器
		    pagination: '.swiper-pagination'
		});
	},50);
}]);

//懒加载的使用
app.controller('lazy',['$scope','$http',function($scope,$http){
	$scope.arr = [];
	$http.get('home.json').success(function(res){
		$scope.arr = res.data.sections;
	});
}]);