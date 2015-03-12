if (Meteor.isServer) {
    Meteor.startup(function () {
        //process.env.MAIL_URL = 'smtp://collegepuppy%40collegepuppy.com.mailgun.org:shawnparker0924@smtp.mailgun.org:587';
        //process.env.MAIL_URL = "smtp://collegepuppy.com%40gmail.com:shawnparker0924@smtp.gmail.com:465/";
        AccountsEntry.config({
            signupCode: 's3cr3t', // only restricts username+password users, not OAuth
            //defaultProfile: {someDefault: 'default'},
            wrapLinks: true, // wraps accounts-entry links in <li> for bootstrap compatability purposes
            homeRoute: '/' ,// MUST BE SET - redirect to this path after sign-out
            dashboardRoute: '/'
        });
    });
}

Meteor.methods({
    sendEmail: function ( to, subject, text) {
        check([ to, subject, text], [String]);
        this.unblock();
        Meteor.Mailgun.send({
            from: "CollegePuppy@collegepuppy.com",
            to: to,
            subject: subject,
            html: text
        });
    },

    save_url: function (image) {
        //image has context and upload_data
        //Save to a collection
        var userId = Meteor.userId();
        var username = Meteor.user().profile.username;
        var createdByEmail = Meteor.user().emails[0].address;
        var college = Meteor.user().profile.college;

        var productName = Tempinfo.findOne({userId: userId},{sort: {date_created: -1}}).productName;
        var productPrice = Tempinfo.findOne({userId: userId},{sort: {date_created: -1}}).productPrice;
        var productCategory = Tempinfo.findOne({userId: userId},{sort: {date_created: -1}}).productCategory;
        var productDescription = Tempinfo.findOne({userId: userId},{sort: {date_created: -1}}).productDescription;
        
        

        Images.insert({
            image: image.upload_data,
            productName: productName,
            productPrice: productPrice,
            productCategory: productCategory,
            productDescription: productDescription,
            userId: userId,
            username: username,
            createdByEmail: createdByEmail,
            college: college,
            ifsold : "false",
            editPrice : "false",
            date_created : new Date().valueOf()
            

        });
        
        var uploadId = Imageupload.findOne({userId: userId})._id;
        
        Imageupload.remove({_id: uploadId});
    }
});