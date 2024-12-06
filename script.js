//java scripp
//this handles silly things like pages





//quite similar to how i handle kermit the frog if you know what i mean

var mainapp= angular.module("myapp",['ngRoute']);
        mainapp.config(['$routeProvider',
          function($routeProvider){
        $routeProvider.
        when('/home',{
            templateUrl:'home.htm'
            
        }).
        when('/about',{
            templateUrl:'about.htm'
         }).
								when('/blackrocket',{
            templateUrl:'blackrocket.htm'
         }).
								when('/toysurvival',{
            templateUrl:'toysurvival.htm'
         }).
								when('/angrybots',{
            templateUrl:'angrybots.htm'
         }).
								when('/clumsybird',{
            templateUrl:'clumsybird.htm'
         }).
								when('/astray',{
            templateUrl:'astray.htm'
         }).
								when('/elasticman',{
            templateUrl:'elasticman.htm'
         }).
								when('/run3',{
            templateUrl:'run3.htm'
         }).
								when('/tetris',{
            templateUrl:'tetris.htm'
         }).
								when('/slope',{
            templateUrl:'slope.htm'
         }).
								when('/snake',{
            templateUrl:'snake.htm'
         }).
								when('/russianroulette',{
            templateUrl:'russianroulette.htm'
         }).
								
								when('/airforceairman',{
  templateUrl:'airforceairman.htm'
         }).
								
									when('/thehouse',{
  templateUrl:'thehouse.htm'
         }).
								
										when('/2048',{
  templateUrl:'2048.htm'
         }).
								
								when('/superctf',{
            templateUrl:'superctf.htm'
         }).
								when('/minesweeper',{
            templateUrl:'minesweeper.htm'
         }).
								when('/solitare',{
            templateUrl:'solitare.htm'
         }).
								when('/core',{
            templateUrl:'core.htm'
         }).
								
								when('/connect4',{
            templateUrl:'connect4.htm'
         }).
								
								when('/amongus',{
            templateUrl:'amongus.htm'
         }).
								
								when('/dungeonclicker',{
            templateUrl:'dungeonclicker.htm'
         }).
								
								when('/drifthunters',{
            templateUrl:'drifthunters.htm'
         }).
								
								when('/paperio',{
            templateUrl:'paperio.htm'
         }).
								
									when('/moto3xm',{
            templateUrl:'moto3xm.htm'
         }).
								
								when('/1v1lol',{
            templateUrl:'1v1lol.htm'
         }).
								
								when('/10morebullets',{
            templateUrl:'10morebullets.htm'
         }).
								
								when('/ducklife4',{
            templateUrl:'ducklife4.htm'
         }).
								
								when('/speedracer',{
            templateUrl:'speedracer.htm'
         }).
								
								when('/shellshockers',{
            templateUrl:'shellshockers.htm'
         }).
								
								when('/retrobowl',{
            templateUrl:'retrobowl.htm'
         }).
								
								when('/basketbros',{
            templateUrl:'basketbros.htm'
         }).
								
								when('/tilefall',{
            templateUrl:'tilefall.htm'
         }).
								
								when('/fnf',{
            templateUrl:'fnf.htm'
         }).
								
								when('/driftboss',{
            templateUrl:'driftboss.htm'
         }).
								
								when('/fireboyandwatergirl1',{
            templateUrl:'fireboyandwatergirl1.htm'
         }).
								
								when('/vex4',{
            templateUrl:'vex4.htm'
         }).
								
								when('/madnesssierranevada',{
            templateUrl:'madnesssierranevada.htm'
         }).
								
								when('/tanukisunset',{
            templateUrl:'tanukisunset.htm'
         }).
								
								when('/zombsroyale',{
            templateUrl:'zombsroyale.htm'
         }).

        otherwise({
          redirectTo:'/home'
        });
        }]);