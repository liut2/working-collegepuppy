Session.set("ifClickSignin", "foo");
Session.set("usernameExists", "false");
Session.set("emailExists", "false");
Session.set("veriSent", "false");
Session.set("emailNotExists", "false");
Session.set("pswShort", "false");

Session.set("usernameRequire", "false");
Session.set("emailRequire", "false");

if (Meteor.isClient) {
    Template.introPage.created = function () {
        if (Accounts._verifyEmailToken) {
            Accounts.verifyEmail(Accounts._verifyEmailToken, function (err) {
                if (err != null) {
                    if (err.message = 'Verify email link expired [403]') {
                        console.log('Sorry this verification link has expired.')
                    }
                } else {
                    console.log('Thank you! Your email address has been confirmed.')
                }
            });
        }
    };
    Template.introPage.helpers({
        "ifClickSignin": function () {
            return Session.equals("ifClickSignin", "bar");
        }
    });

    Template.signupForm.helpers({
        "usernameExists": function () {
            //console.log(Session.equals("usernameExists", "true"));
            return Session.equals("usernameExists", "true");
        },
        "emailExists": function () {
            //console.log(Session.equals("usernameExists", "true"));
            return Session.equals("emailExists", "true");
        },
        "veriSent": function () {
            return Session.equals("veriSent", "true");
        },
        "pswShort": function () {
            return Session.equals("pswShort", "true");
        },
        "usernameRequire": function () {
            return Session.equals("usernameRequire", "true");
        },
        "emailRequire": function () {
            return Session.equals("emailRequire", "true");
        }
    });

    Template.signupForm.events({
        "click #toSignin": function (e, t) {
            Session.set("ifClickSignin", "bar");
        },

        'submit form': function (event, template) {
            //event for handling registering
            event.preventDefault();
            var emailVar = template.find('#banner-email').value;
            var passwordVar = template.find('#banner-phone').value.trim();
            var usernameVar = template.find("#banner-name").value;
            var collegeVar = template.find("#banner-college").value;
            var user = Meteor.users.findOne({
                "profile.username": usernameVar.trim()
            });
            var email = Meteor.users.findOne({
                "emails.address": emailVar.trim()
            });

            Session.set("usernameRequire", "false");
            Session.set("emailRequire", "false");
            if (usernameVar === "") {
                Session.set("usernameRequire", "true");
                throw new Meteor.Error(404, 'fail');
            }
            if (emailVar === "") {
                Session.set("emailRequire", "true");
                throw new Meteor.Error(404, 'fail');
            }


            Session.set("usernameExists", "false");
            Session.set("emailExists", "false");
            Session.set("pswShort", "false");

            if (user) {
                Session.set("usernameExists", "true");

                throw new Meteor.Error(404, 'fail');
            }
            if (email) {
                Session.set("emailExists", "true");


                throw new Meteor.Error(404, 'fail');
            }
            if (passwordVar.length < 8) {
                Session.set("pswShort", "true");
                throw new Meteor.Error(404, 'fail');
            }

            Accounts.createUser({
                email: emailVar,
                password: passwordVar,
                profile: {
                    username: usernameVar,
                    college: collegeVar
                }

            });
            Session.set("usernameExists", "false");
            Session.set("emailExists", "false");
            Session.set("pswShort", "false");
            Session.set("veriSent", "true");
            Router.go("success");
        }
    });

    Template.signinForm.events({
        //event for handling login
        'submit form': function (event, template) {
            event.preventDefault();
            var emailVar = template.find('#banner-email').value;
            var passwordVar = template.find('#banner-phone').value;

            var email = Meteor.users.findOne({
                "emails.address": emailVar.trim()
            });

            Session.set("emailNotExists", "false");
            Meteor.loginWithPassword(emailVar, passwordVar, function (err) {
                if (err) {
                    Session.set("emailNotExists", "true");
                    throw new Meteor.Error(404, 'fail');
                } else {
                    console.log('Welcome back Meteorite!');
                }
            });
        },
        "click #signupinsigninform": function (e, t) {
            Session.set("ifClickSignin", "foo");
        }
    });
    Template.signinForm.helpers({
        "emailNotExists": function () {
            //console.log(Session.equals("usernameExists", "true"));
            return Session.equals("emailNotExists", "true");
        },
    });

    Template.check.created = function () {
        if (Accounts._verifyEmailToken) {
            Accounts.verifyEmail(Accounts._verifyEmailToken, function (err) {
                if (err != null) {
                    if (err.message = 'Verify email link expired [403]') {
                        console.log('Sorry this verification link has expired.')
                    }
                } else {
                    console.log('Thank you! Your email address has been confirmed.')
                }
            });
        }
    };




}