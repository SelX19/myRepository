$(document).ready(function () {

  $("main#spapp > section").height($(document).height() - 60);
  console.log("aaa")
  var app = $.spapp({
    defaulView: "#home",
    templateDir: "./templates/",
    pageNotFound: 'error_404'
  });

  // define routes


  app.route({
    view: 'login',
    load: 'login.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: '404',
    load: '404.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'about-us',
    load: 'about-us.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'blog',
    load: 'blog.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'bmi-calculator',
    load: 'bmi-calculator.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'class-details',
    load: 'class-details.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'class-timetable',
    load: 'class-timetable.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'contact',
    load: 'contact.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'gallery',
    load: 'gallery.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'services',
    load: 'services.html',
    onCreate: function () { },
    onReady: function () { }
  });

  app.route({
    view: 'team',
    load: 'team.html',
    onCreate: function () { },
    onReady: function () { }
  });



  // run app
  app.run();

});