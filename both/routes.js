Router.configure({
    layoutTemplate: "appLayout"
});

Router.route("/", {
    name : "landingPage",
    template : "introPage",
    onAfterAction: function () {
        if (Meteor.userId()) {
            this.redirect('/home');
        } 
    }
});

Router.route("/about", {
    name : "about",
    template : "about"
});

Router.route("/success", {
    name : "success",
    template : "introAccountPage"
});

Router.route("/home", {
    name: "home",
    template: "dashboard",
    onBeforeAction: function () {
        if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/search", {
    name: "search",
    template: "searchboard",
    onBeforeAction: function () {
        if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

//below are me pages
Router.route("/mywishlist", {
    name : "mywishlist",
    template : "mywishlist",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/myposteditems", {
    name : "myposteditems",
    template : "myposteditems",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});
//below are sections
Router.route("/sportsequipment", {
    name : "sportsequipment",
    template : "sportsequipment",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/dormsupplies", {
    name : "dormsupplies",
    template : "dormsupplies",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/apparel/men", {
    name : "men",
    template : "men",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/apparel/women", {
    name : "women",
    template : "women",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/apparel/unisex", {
    name : "unisex",
    template : "unisex",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/books/textbooks", {
    name : "textbooks",
    template : "textbooks",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/books/novels", {
    name : "novels",
    template : "novels",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/books/others", {
    name : "booksothers",
    template : "booksothers",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/electronics/desktop", {
    name : "desktop",
    template : "desktop",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/electronics/laptop", {
    name : "laptop",
    template : "laptop",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/electronics/phone", {
    name : "phone",
    template : "phone",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/electronics/gaming", {
    name : "gaming",
    template : "gaming",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/electronics/tv", {
    name : "tv",
    template : "tv",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/electronics/headphones", {
    name : "headphones",
    template : "headphones",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/electronics/cameras", {
    name : "cameras",
    template : "cameras",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/electronics/others", {
    name : "electronicsothers",
    template : "electronicsothers",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});

Router.route("/freegiving", {
    name : "freegiving",
    template : "freegiving",
    onBeforeAction: function () {
      if (!Meteor.userId()) {
            this.render('introPage');
        } else {
            this.next();
        }
    }
});