Cloudinary.config({
	cloud_name: 'amdd9',
	api_key: '357236335442281',
	api_secret: '-Otx2btfv5sTHGcUk4C7dKErssM'
});

Meteor.startup(function() {
  // By default, the email is sent from no-reply@meteor.com. If you wish to receive email from users asking for help with their account, be sure to set this to an email address that you can receive email at.
  Accounts.emailTemplates.from = 'CollegePuppy <no-reply@collegepuppy.com>';

  // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
  Accounts.emailTemplates.siteName = 'CollegePuppy';

  // A Function that takes a user object and returns a String for the subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address to Sign in-CollegePuppy';
  };

  // A Function that takes a user object and a url, and returns the body text for the email.
  // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'click on the following link to verify your email address: ' + url ;
  };
});

Accounts.onCreateUser(function(options, user) {
  //user.profile = {};
    if (options.profile){
        user.profile = options.profile;
    }
  // we wait for Meteor to create the user before sending an email
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
  }, 2 * 1000);

  return user;
});

Accounts.validateLoginAttempt(function(attempt){
  if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified ) {
    console.log('email not verified');

    return false; // the login is aborted
  }
  return true;
}); 