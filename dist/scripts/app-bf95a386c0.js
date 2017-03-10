(function(){angular.module("client",["ngSanitize","ui.router","ngResource","ngAnimate","ngEnter","anim-in-out","angular-growl","NgActive","ngFileUpload","ngTagsInput","fileModel"])}).call(this),function(){var Ctrl;Ctrl=function($scope,$state,growl,Session){return $scope.user={email:"",password:""},$scope.uiState={loading:!1},$scope.register=function(form){return form.$submitted=!0,form.$valid?Session.register({user:$scope.user}).$promise.then(function(data){return growl.success(MESSAGES.REGISTER_SUCCESS),$state.go("auth.login")})["catch"](function(err){return growl.success(MESSAGES.REGISTER_FAILED)}):void 0}},angular.module("client").controller("RegisterCtrl",Ctrl)}.call(this),function(){var Ctrl;Ctrl=function($scope,$state,growl,Session){return $scope.creds={email:"",password:""},$scope.uiState={loading:!1},$scope.login=function(form){return $scope.uiState.loading=!0,form.$submitted=!0,form.$valid?Session.login({user:$scope.creds}).$promise.then(function(data){return Session.setSession(data),growl.success(MESSAGES.LOGIN_SUCCESS),$state.go("account.settings")})["finally"](function(){return $scope.uiState.loading=!1}):void 0}},angular.module("client").controller("LoginCtrl",Ctrl)}.call(this),function(){var Ctrl;Ctrl=function($scope,$state,growl,User){return $scope.form={email:"",password:"",third_party:"n24"},$scope.integrate=function(){return User.integrate({third_party:$scope.form}).$promise.then(function(data){})["catch"](function(err){})}},angular.module("client").controller("SettingsCtrl",Ctrl)}.call(this),function(){angular.module("client").config(["$stateProvider","$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider){return $locationProvider.html5Mode(!0),$urlRouterProvider.otherwise("/"),$stateProvider.state("auth",{templateUrl:"app/pages/auth/index.html",controller:"AuthCtrl","abstract":!0}).state("auth.register",{url:"/",templateUrl:"app/pages/auth/register/index.html",controller:"RegisterCtrl",unauthenticated:!0}).state("auth.login",{url:"/login",templateUrl:"app/pages/auth/login/index.html",controller:"LoginCtrl",unauthenticated:!0})}])}.call(this),function(){var Ctrl;Ctrl=function($scope,$state,growl){},angular.module("client").controller("AuthCtrl",Ctrl)}.call(this),function(){angular.module("client").config(["$stateProvider","$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider){return $locationProvider.html5Mode(!0),$stateProvider.state("account",{url:"/account",templateUrl:"app/pages/account/index.html",controller:"AccountCtrl","abstract":!0}).state("account.settings",{url:"/settings",templateUrl:"app/pages/account/settings/index.html",controller:"SettingsCtrl"})}])}.call(this),function(){var Ctrl;Ctrl=function($scope,$state,growl){},angular.module("client").controller("AccountCtrl",Ctrl)}.call(this),function(){angular.module("client").component("spinner",{template:'<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"> <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path> <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(192 20 20)"> <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform> </path> </svg>',bindings:{}})}.call(this),function(){var Ctrl;Ctrl=function($scope,Auth,$rootScope,$state){return $scope.user=Auth.getUser(),$scope.uiState={showDropdown:!1},$scope.openDropdown=function(){return $scope.uiState.showDropdown=!$scope.uiState.showDropdown},$scope.logout=function(){return localStorage.clear(),$state.go("login",{reload:!0})}},angular.module("client").directive("sidebar",function(){return{restrict:"E",replace:!0,templateUrl:"app/components/sidebar/index.html",controller:Ctrl}})}.call(this),function(){angular.module("client").filter("range",function(){return function(input,total){var i;for(total=parseInt(total),i=0;total>i;)input.push(i+1),i++;return input}}),angular.module("client").directive("pagination",function(){return{restrict:"E",replace:!0,templateUrl:"app/components/pagination/index.html",scope:{count:"=",page:"=",onChange:"&",perPage:"<"},link:function($scope,element,attrs){return $scope.perpage=$scope.perPage?parseInt($scope.perPage):DEFAULT_PER_PAGE,$scope.$watch("count",function(newValue,oldValue){return $scope.originalCount=Math.ceil($scope.count/$scope.perpage),$scope.pageCount=$scope.originalCount>20?20:$scope.originalCount}),$scope.page||($scope.page=1),$scope.queryPage=function(params){return"prev"===params?$scope.page--:"next"===params?$scope.page++:$scope.page=params,$scope.onChange({page:$scope.page})}}}})}.call(this),function(){var Ctrl;Ctrl=function(){var ctrl;ctrl=this},angular.module("client").component("integrateModal",{templateUrl:"/app/components/integration_modal/index.html",controller:Ctrl,bindings:{integration_type:"<"}})}.call(this),function(){var Ctrl;Ctrl=function($scope,Auth,$rootScope){},angular.module("client").directive("header",function(){return{restrict:"E",replace:!0,templateUrl:"app/components/header/index.html",controller:Ctrl}})}.call(this),function(){var module;module=function($resource,BASE_ENDPOINT,$http){var User;return User=$resource(BASE_ENDPOINT+"/third_party_integration",null,{integrate:{method:"POST"}})},angular.module("client").factory("User",module)}.call(this),function(){this.DATE_FORMAT="MMM DD, YYYY hh:mm:ss",this.TIMESTAMP_FORMAT="MMM DD, hh:mm A",this.DEFAULT_PER_PAGE=20,String.prototype.formatDate=function(){return this.toString()?moment(new Date(this.toString())).format(TIMESTAMP_FORMAT):moment()},String.prototype.formatTimestamp=function(){return this.toString()?moment(new Date(this.toString())).format(TIMESTAMP_FORMAT):moment()},String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},String.prototype.toFloat=function(){return parseFloat(this)},String.prototype.formatMoney=function(){return parseFloat(this).formatMoney()},String.prototype.removeUnderscore=function(){return this.replace(/_/g," ")},String.prototype.capitalize=function(){return this.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()})},String.prototype.toPercent=function(){var util_label;return util_label=this.split("/"),parseFloat((util_label[0]/util_label[1]*100).formatMoney())}}.call(this),function(){var module;module=function($resource,BASE_ENDPOINT,$http){var Session;return Session=$resource(BASE_ENDPOINT+"/auth",null,{register:{method:"POST",url:BASE_ENDPOINT+"/auth/sign_up"},login:{method:"POST",url:BASE_ENDPOINT+"/auth/log_in"}}),Session.setSession=function(data){return localStorage.setItem("access_token",data.access_token),localStorage.setItem("user_id",data.user_id),Session.setHeaders(data)},Session.setHeaders=function(data){return $http.defaults.headers.common.AccessToken=localStorage.getItem("access_token")||null,$http.defaults.headers.common.UserId=localStorage.getItem("user_id")||null},Session},angular.module("client").factory("Session",module)}.call(this),function(){var module;module=function($resource,Session){var user;return user=null,{getUser:function(){return user},setUser:function(obj){user=obj},removeUser:function(){user=null,localStorage.removeItem("access_token"),localStorage.removeItem("user_id")}}},angular.module("client").factory("Auth",module)}.call(this),function(){angular.module("client").run(["$rootScope","$location","$state","$window","$http","Session","Auth",function($rootScope,$location,$state,$window,$http,Session,Auth){return $rootScope.$on("$stateChangeStart",function(event,toState,toParams,fromState,fromParams){return toState.unauthenticated?localStorage.getItem("access_token")?(event.preventDefault(),console.log("DASHBOARD",$state.go("account.settings"))):console.log("no auth needed"):localStorage.getItem("access_token")?console.log("loaded AuthToken"):(event.preventDefault(),console.log("redirected to login"),$state.go("auth.login"))})}])}.call(this),function(){angular.module("client").config(["$stateProvider","$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider){return $locationProvider.html5Mode(!0)}])}.call(this),function(){angular.module("client").factory("httpInterceptor",["$q","$rootScope","$injector","growl",function($q,$rootScope,$injector,growl){return{responseError:function(response){var message,ref,ref1,title;if(401===(ref=response.status)||403===ref||422===ref||500===ref){switch(title=response.data.message||"Oops!",message=response.data.error||(null!=(ref1=response.data.errors)?ref1.join("<br><br>"):void 0)||"Something went wrong",response.status){case 401:case 403:growl.error(MESSAGES.ACCESS_DENIED),$injector.get("Auth").removeUser();break;case 422:growl.error(message);break;case 500:growl.error(MESSAGES.INTERNAL_SERVER_ERROR)}return $q.reject(response)}}}}]).config(["$httpProvider",function($httpProvider){return $httpProvider.interceptors.push("httpInterceptor")}])}.call(this),function(){angular.module("client").constant("BASE_ENDPOINT","http://screenfo-webapp.herokuapp.com"),this.DATE_FORMAT="MMM DD, YYYY hh:mm:ss",this.DEFAULT_PER_PAGE=20,this.YEAR_FILTER_RANGE=5,this.MESSAGES={UPDATE_SUCCESS:"Updated successfully",UPDATE_ERROR:"Update error",CREATE_SUCCESS:"Created successfully",DELETE_SUCCESS:"Deleted successfully",INTERNAL_SERVER_ERROR:"Some crazy weird stuff happened. Fix this, we will.",BAD_REQUEST:"Error 400, bad request",FORM_ERROR:"Marked fields are blank or have invalid value",INVALID_CREDS:"Invalid username or password",NO_DATA:"No more data to get",INVALID_FILE_SIZE:"File should be less than 10 mb",TIMEOUT:"Connection has timed out",LOGIN_SUCCESS:"Login success",LOGOUT_SUCCESS:"Logout success",REGISTER_SUCCESS:"Registered successfully",REGISTER_FAILED:"Register failed"},this.ACTIVATE_WARNING={title:"Are you sure?",type:"warning",showCancelButton:!0,confirmButtonColor:"#4fc95a",confirmButtonText:"Yes, active this user!",closeOnCancel:!0,closeOnConfirm:!0,animation:!0},this.DEACTIVATE_WARNING={title:"Are you sure?",type:"warning",showCancelButton:!0,confirmButtonColor:"#ff604f",confirmButtonText:"Yes, deactive this user!",closeOnCancel:!0,closeOnConfirm:!0,animation:!0},this.DELETE_WARNING={title:"Are you sure?",type:"warning",showCancelButton:!0,confirmButtonColor:"#ff604f",confirmButtonText:"Yes, delete this record!",closeOnCancel:!0,closeOnConfirm:!0,animation:!0},this.UPDATE_WARNING={title:"Are you sure?",type:"warning",showCancelButton:!0,confirmButtonColor:"#ff604f",confirmButtonText:"Yes, update record!",closeOnCancel:!0,closeOnConfirm:!0,animation:!0}}.call(this),function(){angular.module("client").config(["growlProvider",function(growlProvider){return growlProvider.globalDisableCountDown(!0),growlProvider.globalDisableIcons(!0),growlProvider.globalDisableCloseButton(!0),growlProvider.globalTimeToLive(4e3)}])}.call(this),function(){var module;module=angular.module("ngEnter",[]),module.directive("ngEnter",function(){return function(scope,element,attrs){return element.bind("keydown keypress",function(event){return 13===event.which?(scope.$apply(function(){scope.$eval(attrs.ngEnter)}),event.preventDefault()):void 0})}})}.call(this),function(){var module;module=angular.module("NgActive",[]),module.directive("ngActive",["$location",function($location){return{restrict:"A",link:function($scope,$element,$attrs){return $scope.location=$location,$scope.$watch("location.$$url",function(currentUrl){return $element.attr("href")===$location.$$path.split("/").splice(0,3).join("/")?$element.addClass("active"):$element.removeClass("active")})}}}])}.call(this),function(){var module;module=angular.module("fileModel",[]),module.directive("fileModel",["$parse",function($parse){return{restrict:"A",link:function(scope,element,attrs){var isMultiple,model,modelSetter;model=$parse(attrs.fileModel),isMultiple=attrs.multiple,modelSetter=model.assign,element.bind("change",function(){var values;values=[],angular.forEach(element[0].files,function(item){var value;value={name:item.name,size:item.size,url:URL.createObjectURL(item),_file:item},values.push(value)}),scope.$apply(function(){isMultiple?modelSetter(scope,values):modelSetter(scope,values[0])})})}}}])}.call(this),function(){var module;module=angular.module("ToggableField",[]),module.directive("toggableField",["$location",function($location){return{restrict:"C",scope:{isDisabled:"="},link:function($scope,$element,$attrs){return $scope.isDisabled?$element.addClass("disabled"):void 0}}}])}.call(this),angular.module("client").run(["$templateCache",function($templateCache){$templateCache.put("app/components/header/index.html","<div class=header><div class=header-container><span class=app-title>ScreeNfo</span></div></div>"),$templateCache.put("app/components/integration_modal/index.html",""),$templateCache.put("app/components/pagination/index.html",'<div class=row><div class=col-md-12><ul class="pagination-sm pagination pull-right"><li ng-class="{disabled: page == 1}"><a ng-click="queryPage(\'prev\')">Previous</a></li><li ng-repeat="n in [] | range:pageCount" ng-class="{active:  n == page}"><a ng-bind=n ng-click=queryPage(n)></a></li><li ng-if="pageCount &gt;= 10"><span>....</span></li><li ng-if="pageCount &gt;= 10"><a ng-bind=originalCount ng-click=queryPage(originalCount)></a></li><li ng-class="{disabled: page == pageCount}"><a ng-click="queryPage(\'next\')">Next</a></li></ul></div></div>'),$templateCache.put("app/components/sidebar/index.html",'<div class=sidebar-panel><div class=brand><img src=/vendor/images/logo.png class=logo></div><div class="nav-profile dropdown"><a ng-click=openDropdown() class=dropdown-toggle><div class=user-image><img alt=user src=/vendor/images/ninja.png title=user class="avatar img-circle"></div><div class="user-info expanding-hidden">Admin<small ng-bind=user.role class=bold></small></div></a><div ng-if=uiState.showDropdown class=dropdown-menu><a href=# class=dropdown-item>Settings</a><div class=dropdown-divider></div><a ng-click=logout() class=dropdown-item>Logout</a></div></div><nav><p class=nav-title>MENU</p><ul class=nav><li><a href=/admin/dashboard><i class="material-icons text-primary">dashboard</i><span>Dashboard</span></a></li><li><a href=/admin/schools><i class="material-icons text-success">assignment</i><span>Schools</span></a></li><li><a href=/admin/programs><i class="material-icons text-success">folder</i><span>Programs</span><span>Schools</span></a></li><li><a href=/admin/users><i class="material-icons text-success">folder</i><span>Users</span></a></li></ul></nav></div>'),$templateCache.put("app/pages/account/index.html","<div class=wrapper><header></header><div class=main><ui-view></ui-view></div></div>"),$templateCache.put("app/pages/auth/index.html","<div class=wrapper><header></header><div class=main><ui-view></ui-view></div></div>"),$templateCache.put("app/pages/account/settings/index.html",'<div class=settings-container><div class=title-label><span class=title-text>Account Settings</span></div><div class=row><div class="col-md-4 no-padding mtop-25"><div class=account-info><div class=img-container><img src=/vendor/images/logo.png></div><div class="pull-right profile-edit"><span>Edit Profile</span></div></div></div><div class="col-md-8 no-padding"><div class="row mtop-25"><div class=col-md-12><div class=messaging-container><div class=title-label><span class=title-text>Global Messaging</span></div><div class=messaging-form><textarea ng-model=message placeholder="Write a message..." class=form-control></textarea></div><div class=pull-right><div class=btn-send><a class="btn btn-default">Send</a></div></div></div></div><div class=col-md-12><div class=integration-container><div class=title-label><span class=title-text>Integrations</span></div><div class=integration-list><div class=img-container-n24><img src=/vendor/images/n24-logo.png></div><div class=img-container-pivotal><img src=/vendor/images/ptracker-logo.svg><span>(Soon)</span></div><div class=img-container-slack><img src=/vendor/images/slack-logo.png><span>(Soon)</span></div><div class=img-container-skype><img src=/vendor/images/skype-logo.png><span>(Soon)</span></div></div><div class=integration-form><form name=integrationForm><div class=form-horizontal><div class=form-group><input ng-model=creds.email placeholder="Email Address" class=form-control></div><div class=form-group><input type=password ng-model=creds.password placeholder=Password class=form-control></div><div class=form-group><a ng-click=integrate() class="btn btn-default">Integrate Account</a></div></div></form></div></div></div></div></div></div></div>'),$templateCache.put("app/pages/auth/login/index.html",'<div class=box><div class=inner-container><div class=header-label><span>Login</span></div><div class=img-container><img src=/vendor/images/logo.png></div><form name=loginForm><div class=form-horizontal><div class=form-group><input type=email name=email ng-model=creds.email placeholder=Email required ng-enter=login(loginForm) class=form-control></div><div class=form-group><input type=password name=password ng-model=creds.password placeholder=Password required ng-enter=login(loginForm) class=form-control></div><div class=form-group><a ng-show=!uiState.loading ng-click=login(loginForm) class="btn btn-block btn-default">Login</a><spinner ng-show=uiState.loading></spinner></div></div></form></div></div>'),$templateCache.put("app/pages/auth/register/index.html",'<div class=box><div class=inner-container><div class=header-label><span>Register</span></div><div class=img-container><img src=/vendor/images/logo.png></div><form name=registerForm><div class=form-horizontal><div class=form-group><input type=email name=email ng-model=user.email placeholder=Email required ng-enter=register(registerForm) class=form-control></div><div class=form-group><input type=password name=password ng-model=user.password placeholder=Password required ng-enter=register(registerForm) class=form-control></div><div class=form-group><a ng-click=register(registerForm) class="btn btn-block btn-default">Register</a></div></div></form><div class=signup-link><span>Already a member, </span><a ui-sref=auth.login class=link>click here</a></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-bf95a386c0.js.map
