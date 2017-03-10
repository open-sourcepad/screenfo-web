(function() {
  var module;

  module = function($resource, BASE_ENDPOINT, $http) {
    var Session;
    Session = $resource(BASE_ENDPOINT + "/auth", null, {
      register: {
        method: 'POST',
        url: BASE_ENDPOINT + "/auth/sign_up"
      },
      login: {
        method: 'POST',
        url: BASE_ENDPOINT + "/auth/log_in"
      }
    });
    Session.setSession = function(data) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user_id", data.user_id);
      return Session.setHeaders(data);
    };
    Session.setHeaders = function(data) {
      return $http.defaults.headers.common.AccessToken = localStorage.getItem('access_token') || null;
    };
    return Session;
  };

  angular.module('client').factory('Session', module);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvc2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXMiOlsic2VydmljZXMvc2Vzc2lvbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxTQUFDLFNBQUQsRUFBVyxhQUFYLEVBQXlCLEtBQXpCO0FBRVAsUUFBQTtJQUFBLE9BQUEsR0FBVSxTQUFBLENBQWEsYUFBRCxHQUFlLE9BQTNCLEVBQW1DLElBQW5DLEVBQ1I7TUFDRSxRQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsTUFBUjtRQUNBLEdBQUEsRUFBUSxhQUFELEdBQWUsZUFEdEI7T0FGSjtNQUlFLEtBQUEsRUFDRTtRQUFBLE1BQUEsRUFBUSxNQUFSO1FBQ0EsR0FBQSxFQUFRLGFBQUQsR0FBZSxjQUR0QjtPQUxKO0tBRFE7SUFZVixPQUFPLENBQUMsVUFBUixHQUFvQixTQUFDLElBQUQ7TUFDbEIsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsSUFBSSxDQUFDLFlBQTFDO01BQ0EsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0MsSUFBSSxDQUFDLE9BQXJDO2FBQ0EsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsSUFBbkI7SUFIa0I7SUFLcEIsT0FBTyxDQUFDLFVBQVIsR0FBb0IsU0FBQyxJQUFEO2FBQ2xCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUE5QixHQUE0QyxZQUFZLENBQUMsT0FBYixDQUFxQixjQUFyQixDQUFBLElBQXdDO0lBRGxFO1dBS3BCO0VBeEJPOztFQTBCVCxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBQyxPQUF6QixDQUFpQyxTQUFqQyxFQUE0QyxNQUE1QztBQTFCQSIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSA9ICgkcmVzb3VyY2UsQkFTRV9FTkRQT0lOVCwkaHR0cCktPlxyXG5cclxuICBTZXNzaW9uID0gJHJlc291cmNlIFwiI3tCQVNFX0VORFBPSU5UfS9hdXRoXCIsIG51bGwsXHJcbiAgICB7XHJcbiAgICAgIHJlZ2lzdGVyOlxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgICAgdXJsOiBcIiN7QkFTRV9FTkRQT0lOVH0vYXV0aC9zaWduX3VwXCJcclxuICAgICAgbG9naW46XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICB1cmw6IFwiI3tCQVNFX0VORFBPSU5UfS9hdXRoL2xvZ19pblwiXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgU2Vzc2lvbi5zZXRTZXNzaW9uID0oZGF0YSktPlxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NfdG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfaWRcIiwgZGF0YS51c2VyX2lkKVxyXG4gICAgU2Vzc2lvbi5zZXRIZWFkZXJzKGRhdGEpXHJcblxyXG4gIFNlc3Npb24uc2V0SGVhZGVycyA9KGRhdGEpLT5cclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uLkFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpIHx8IG51bGxcclxuICAgICMgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfaWQnKSB8fCBudWxsXHJcblxyXG5cclxuICBTZXNzaW9uXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnY2xpZW50JykuZmFjdG9yeSgnU2Vzc2lvbicsIG1vZHVsZSlcclxuIl19
