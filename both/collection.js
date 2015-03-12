Wishlist = new Meteor.Collection("wishlist");

/** 
Wishlist.insert(
            {
                
                userId : userId,
                productId : productId
               
            
            });
**/
Images = new Meteor.Collection("images");
//Pages = new Meteor.Pagination(Images);
/**
Images.insert(
            {
                image: image.upload_data,
                productName: productName,
                productPrice: productPrice,
                productCategory: productCategory,
                productDescription: productDescription,
                userId : userId,
                username : username,
                createdByEmail : createdByEmail,
                college : college,
                date_created : new Date().valueOf()
            
            });
**/
Wishes = new Meteor.Collection("wishes");
/** 
Wishes.insert(
            {
                wish : wish,
                userId : userId,
                username : username,
                createdByEmail : createdByEmail,
                college: college,
                date_created : new Date().valueOf()
            
            });
**/
Images.initEasySearch("productName");
Myshare = new Meteor.Collection("myshare");

//var handle = Meteor.subscribeWithPagination('images', 10);

Tempinfo = new Meteor.Collection("tempinfo");
/** 
Tempinfo.insert(
            {
                productName: productName,
                productPrice : productPrice,
                productCategory: productCategory,
                productDescription : productDescription,
                userId : userId
               
            });
**/
Imageupload = new Meteor.Collection("imageupload");
/** 
Tempinfo.insert(
            {
               
                userId : userId,
                imageupload : false
            
            });
**/
College = new Meteor.Collection("college");
/** 
College.insert(
            {
               
                userId : userId,
                college : college
            
            });
**/
if (Meteor.isClient) {
        
        Tracker.autorun(function () {
        //var college = Session.get("fixedCollege");
        //console.log("college is " + college);
        //check(Session.get("zipCursor"), Number);
        Meteor.subscribe("images");
        Meteor.subscribe("wishes");
        Meteor.subscribe("wishlist");
        Meteor.subscribe("myshare");
        Meteor.subscribe("allUserData");
        Meteor.subscribe("college");
        Meteor.subscribe("imageupload");
        Meteor.subscribe("tempinfo");
            
        });
    
}

if (Meteor.isServer) {
    Meteor.publish("images", function () {
        return Images.find();
    });
    
    Meteor.publish("wishes", function () {
        return Wishes.find();
    });
    
    Meteor.publish("wishlist", function () {
        return Wishlist.find();
    });
    
    Meteor.publish("myshare", function () {
        return Myshare.find();
    });
    Meteor.publish("allUserData", function () {
        return Meteor.users.find();
    });
    Meteor.publish("college", function () {
        return College.find();
    });
    Meteor.publish("imageupload", function () {
        return Imageupload.find();
    });
    Meteor.publish("tempinfo", function () {
        return Tempinfo.find();
    });
    
}