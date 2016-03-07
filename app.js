var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function($scope, $mdSidenav, studentService) {
  var allStudents = [];

  
  $scope.subgroups = [1,2];
  $scope.selectedsubgroups = [1,2];
  $scope.isChosenOnly = false;
  //$scope.toggle = function (item, list) {
  //  var idx = list.indexOf(item);
  //  if (idx >-1) {
  //    list.splice(idx, 1);
  //  } else {
  //    list.push(item);
  //  }
  //};
  $scope.exists = function(item, list) {
    return list.indexOf(item) > -1;
  };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
  //$scope.filterBySubgroup = function (student) {
  //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
  //};

  $scope.filterByChosen = function(student) {
      if ($scope.isChosenOnly) {
          if (student.isChosenProject) {
              console.log(student);
              return true;
          } else {
              return false;
          }
      } else {
          return true;
      }
  };
  
  $scope.selected = null;
  $scope.students = allStudents;
  $scope.selectStudent = selectStudent;
  $scope.toggleSidenav = toggleSidenav;
  
  loadStudents();
  
  function loadStudents() {
    studentService.loadAll()
      .then(function(students){
        allStudents = students;
        $scope.students = [].concat(students);
        $scope.selected = $scope.students[0];
      })
  }
  
  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }
  
  function selectStudent(student) {
    $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
    $scope.toggleSidenav('left');
  }

}]);

app.service('studentService', ['$q', function($q) {

    var students= [{
        "isChosenProject": 1,
        "name": "Bohdan Tsybulskyi",
        "codeSourceUrl": "https://github.com/JustBo/cv",
        "websiteUrl": "http://justbo.github.io/cv/",
        "photo": "images/students/tsybulskyi.jpg",
        "cvUrl": "https://www.dropbox.com/s/vaat01ieilzbag9/cv.pdf?dl=0"
    }, {
        "isChosenProject": 0,
        "name": "Khrystyna Dmyterko",
        "codeSourceUrl": "https://github.com/KhrystynaDm/personalpage",
        "websiteUrl": "http://khrystynadm.github.io/personalpage",
        "photo": "images/students/dmyterko.jpg",
        "cvUrl": "https://www.dropbox.com/s/wtwwutn5hceeqor/html_Dmyterko.pdf"
    }, {
        "isChosenProject": 0,
        "name": "Yuriy Grebinyuk",
        "codeSourceUrl": "https://github.com/EccL/CV-final-version",
        "websiteUrl": "http://eccl.github.io/CV-final-version/",
        "photo": "images/students/grebinyuk.jpg",
        "cvUrl": "https://www.dropbox.com/s/nxohl2ruz38xhvn/Grebinyuk%20Yuriy%20Resume.pdf?dl=0"
    }, {
        "isChosenProject": 0,
        "name": "Mykhailo Dovhanych",
        "codeSourceUrl": "https://github.com/dovganych/Misha.Dovhanych",
        "websiteUrl": "http://dovganych.github.io/Misha.Dovhanych/",
        "photo": "images/students/no-photo.gif",
        "cvUrl": "https://www.dropbox.com/home?preview=Mykhailo_Dovhanych_CV.pdf"
    }, {
        "isChosenProject": 0,
        "name": "Natalia Bilivitina",
        "codeSourceUrl": "https://github.com/NataBilya/main-project",
        "websiteUrl": "http://natabilya.github.io/main-project",
        "photo": "images/students/bilivitina.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Nazar Liteplo",
        "codeSourceUrl": "https://github.com/NazarLiteplo/cv",
        "websiteUrl": "http://nazarliteplo.github.io/cv/",
        "photo": "images/students/liteplo.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Oleksandr Kudryavtsev",
        "codeSourceUrl": "https://github.com/okudr/CV-page",
        "websiteUrl": "http://okudr.github.io/CV-page/",
        "photo": "images/students/kudravtsev.jpg",
        "cvUrl": "https://github.com/okudr/CV-page/blob/gh-pages/files/my-resume-eng.pdf"
    }, {
        "isChosenProject": 0,
        "name": "Pavlo Pomirko",
        "codeSourceUrl": "https://github.com/patriotua14/website1",
        "websiteUrl": "http://patriotua14.github.io/website1.",
        "photo": "images/students/pomirko.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Taras Rudyk",
        "codeSourceUrl": "https://github.com/TarasRudyk/rudyktars_last",
        "websiteUrl": "http://tarasrudyk.github.io/rudyktars_last/",
        "photo": "images/students/rudyk.JPG",
        "cvUrl": "https://github.com/TarasRudyk/rudyktars_last/blob/gh-pages/filestore/TRudyk_DD.pdf"
    }, {
        "isChosenProject": 0,
        "name": "Vasyl Bilak",
        "codeSourceUrl": "https://github.com/VasyaBilak/www",
        "websiteUrl": "http://vasyabilak.github.io/www/",
        "photo": "images/students/bilak.jpg",
        "cvUrl": "https://www.dropbox.com/s/lyhgk3n85ku994l/RESUME.pdf?dl=0"
    }, {
        "isChosenProject": 0,
        "name": "Ihor Kokotko",
        "codeSourceUrl": "https://github.com/igorkokotko/ThisIS",
        "websiteUrl": "http://igorkokotko.github.io/ThisIS/",
        "photo": "images/students/kokotko.jpg",
        "cvUrl": "http://rabota.ua/ua/cv/8694746"
    }, {
        "isChosenProject": 0,
        "name": "Nazar Burka",
        "codeSourceUrl": "https://github.com/nazarburka/NB",
        "websiteUrl": "http://nazarburka.github.io/NB/",
        "photo": "images/students/burka.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Nazarii Ornat",
        "codeSourceUrl": "https://github.com/NazariiOrnat/First-Step",
        "websiteUrl": "http://nazariiornat.github.io/First-Step",
        "photo": "images/students/ornat.jpg",
        "cvUrl": "https://www.dropbox.com/s/iig32s50zz3hsem/CV_Ornat_Nazarii.docx?dl=0"
    }, {
        "isChosenProject": 0,
        "name": "Oleksandr Sayuk",
        "codeSourceUrl": "https://github.com/olexandrsayuk/final_project.git",
        "websiteUrl": "http://olexandrsayuk.github.io/final_project/",
        "photo": "images/students/sayuk.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Ostap Lipinskiy",
        "codeSourceUrl": "https://github.com/TvikSS/My-web.",
        "websiteUrl": "http://tvikss.github.io/My-web./",
        "photo": "images/students/lipinskiy.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Roman Kormylo",
        "codeSourceUrl": "https://github.com/RomanKormylo/CV.git",
        "websiteUrl": "http://romankormylo.github.io/CV/",
        "photo": "images/students/kormylo.jpg",
        "cvUrl": "https://www.dropbox.com/s/9npch7agze4g9gj/Roman%20Kormylo%20CV.pdf?dl=0"
    }, {
        "isChosenProject": 0,
        "name": "Vadym Karlashchuk",
        "codeSourceUrl": "https://github.com/karlashchuk/final_project",
        "websiteUrl": "http://karlashchuk.github.io/final_project/",
        "photo": "images/students/karlaschuk.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Yurii Zinko",
        "codeSourceUrl": "https://github.com/yurazinko/personal-site/",
        "websiteUrl": "http://yurazinko.github.io/personal-site/",
        "photo": "images/students/zinko.jpg",
        "cvUrl": "https://docs.google.com/document/d/1MqgjzaRUSeYycD1B8v7URnLdR6lm_wzgR9xlvZRiois/edit?usp=sharing"
    }, {
        "isChosenProject": 0,
        "name": "Stepan Fortuna",
        "codeSourceUrl": "https://sf-portfolio-stepfort.c9users.io/index.html",
        "websiteUrl": "https://github.com/StepFort/JPEG/blob/gh-pages/015.jpg",
        "photo": "images/students/fortuna.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Oksana Shyshka",
        "codeSourceUrl": "https://github.com/shobok/Project",
        "websiteUrl": "http://shobok.github.io/Project/",
        "photo": "images/students/shyshka.jpg",
        "cvUrl": "https://www.dropbox.com/s/2iwui7o4wv9pw22/resume__shyshka%20oksana_eng.doc?dl=0"
    }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(students);
      }
  };
}]);
