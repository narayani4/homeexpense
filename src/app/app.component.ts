import { Component } from '@angular/core';
//import * as angular from "angular";
//declare var angular: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent  {
  title = 'Your are creating an account for Home Expense';
 place1: string;
 language1: string;
 name: string;
 pass:string;
 regexp = "/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/"; 
 angular: any;
 
  search(place: string, language: string) {
    this.place1 = place;
    this.language1 = language;
    console.log(this.place1, this.language1);
  }
  validation(Fname: string)
  {
this.name=Fname;
console.log(this.name);
  }
  validation1(pword: string)
  {
this.pass=pword;
console.log(this.pass);
  }


 /* myFunc()
  {
  angular.module('myApp', [])
  .controller('myCtrl', ['$scope', function($scope) {
      $scope.str=1;
      $scope.myFunc = function() 
      {
        $scope.str++;
      };
  }]);

  }*/
}
