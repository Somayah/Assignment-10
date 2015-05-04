# Assignment-10

####a.	Do you find the code to be simpler when using AngularJS? If so, how? If not, why?
Yes it is simpler, since I just needed to create one controller (SimpleController) that house the logic of the main view of the index.html page. This view is connected to the controllers by view module ($scope). $scope.comments is used to intitialize comments. 

####b.	Would a beginner to front-end development find the code to be simpler? Why or why not?
Yes, they would because it is not required to deal with another structure of framework or install software. All what they need is download angular.min.js from https://angularjs.org/ and follow some tutorial about how to create modules and controllers and connecting it with the view. Also, there are bunch of directives and filters that available in https://docs.angularjs.org/api
    
####c.	How might the structure provided by AngularJS simplify building larger web applications?
AngularJs structure would minimize the size of the application by having a SPA (Single Page Application) which contains controllers of multiple views that will be loaded into that page. Thus, in case of changing any part of the web application, developer can only go to that specific part (view) and change it because of the dependencies injunction. Moreover, there are other AngularJS functions such that there are two way data-binding that makes most of the code base disappear. 
