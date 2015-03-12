Session.set("ifClickWishlist", "true");
Session.set("clickHeart", "false");
Session.set("wishIsWrong", "false");
Session.set("imageupload", "false");
Session.set("submitemail", "false");
Session.set("emailSubject", "full");
Session.set("emailContent", "full");

Session.set("productNameEmpty", "false");
Session.set("productPriceEmpty", "false");
Session.set("productDesEmpty", "false");

Session.setDefault("zipCursor", 0);

if (Meteor.isClient) {
    Template.logout.events({
        "click #logout": function (e, t) {
            e.preventDefault();
            Meteor.logout();
            Router.go("landingPage");

        }
    });
    Template.searchButton.events({
        "click .searchButton": function (e, t) { 
            Router.go("search");
            
        }
    });
    Template.topNavbar.events({
        "click .backtohome": function (e, t) {
            Router.go("home");
        },
        "click .sellanitem": function (e, t) {
            var userId = Meteor.userId();
            Imageupload.insert({
                userId: userId,
                
                date_created: new Date().valueOf()
            });
            var imageupload = Imageupload.findOne({userId : userId});
            console.log("imageupload" , imageupload);
            
        }, 
        "click .settozero" : function(e,t){
            Session.set("zipCursor", 0);
        }
    });

    Template.wishlist.events({
        "submit form": function (e, t) {

            e.preventDefault();
            var wish = t.find(".wishcontent").value;
            var userId = Meteor.userId();
            var username = Meteor.user().profile.username;
            var createdByEmail = Meteor.user().emails[0].address;
            var college = Meteor.user().profile.college;

            if (wish === "") {
                Session.set("wishIsWrong", "empty");
                throw new Meteor.Error(404, 'empty string!');
            } else if (wish.length < 10) {
                Session.set("wishIsWrong", "short");
                throw new Meteor.Error(404, 'short string!');
            } else if (wish.length > 140) {
                Session.set("wishIsWrong", "long");
                throw new Meteor.Error(404, 'long string!');
            } else {
                Session.set("wishIsWrong", "false");
            }

            Wishes.insert({
                wish: wish,
                userId: userId,
                username: username,
                createdByEmail: createdByEmail,
                college: college,
                date_created: new Date().valueOf()

            });
            t.find(".wishcontent").value = "";
        }
    });

    Template.postToWishlist.helpers({
        "wishIsWrong": function () {
            var wishState = Session.get("wishIsWrong");
            if (wishState === "false") {
                return "wishOK";
            } else if (wishState === "empty") {
                return "wishEmpty";
            } else if (wishState === "short") {
                return "wishShort";
            } else if (wishState === "long") {
                return "wishLong";
            }
        }
    });


    Template.sidebar.helpers({
        "username": function () {
            var username = Meteor.user().profile.username;
            return username;
        }
    });
    Template.dashboard.events({
        "click .previous": function (e, t) {
            if (Number(Session.get("zipCursor")) > 29) {
                Session.set("zipCursor", Number(Session.get("zipCursor")) - 30);
            }
            console.log("previous");
        },
        "click .next": function (e, t) {
            Session.set("zipCursor", Number(Session.get("zipCursor")) + 30);
            console.log("next");
        }
    });

    Template.dashboard.helpers({
        "nothingyet" :function(){
            var count =  Images.find({college: college}).count(); 
            if (count === 0){
                return true;
            }else{
                return false;
            }
        },
        "prevText": function () {
            if (Number(Session.get("zipCursor")) < 30) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) - 30) + " - " + (Number(Session.get('zipCursor')));
        },
        "nextText": function () {
            var college = Meteor.user().profile.college;
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName": function () {
            return Meteor.user().profile.college;
        },

        "productList": function () {
            var college = Meteor.user().profile.college;
            return Images.find({
                college: college
            }, {
                sort: {
                    date_created: -1
                },
                limit: 30,
                skip: Session.get("zipCursor")

            });
        },

        "wishList": function () {
            var college = Meteor.user().profile.college;
            return Wishes.find({
                college: college
            }, {
                sort: {
                    date_created: -1
                },limit:50
            });
        }
    });
    Template.clickHeart.events({
        "click #removefromwishlist": function (e, t) {
            Session.set("clickHeart", "false");
            var thisId = Wishlist.findOne({
                userId: Meteor.userId(),
                productId: this._id
            })._id;

            Wishlist.remove({
                _id: thisId
            });
            console.log("remove true");
        },
        "click #addtowishlist": function (e, t) {
            Wishlist.insert({
                userId: Meteor.userId(),
                productId: this._id

            });
            Session.set("clickHeart", "true");
            console.log("added to wishlist!!");
        }
    });
    Template.clickHeart.helpers({
        "clickHeart": function () {
            var inlist = Wishlist.findOne({
                userId: Meteor.userId(),
                productId: this._id

            });

            if (inlist) {
                return true;
            } else {
                return false;
            }
        }

    });

    Template.product.events({
        "click #mulan": function (e, t) {
            var sellerEmail = this.createdByEmail;
            Session.set("sellerEmail", sellerEmail);
            
            var sellerName = this.username;
            console.log("seller name "+sellerName);
            Session.set("sellerName", sellerName);
            
            Session.set("submitemail", "false");
            Session.set("ifClickWishlist", "false");

        }
    });
    Template.wish.events({
        "click .mulanhua": function (e, t) {
            var sellerEmail = this.createdByEmail;
            Session.set("sellerEmail", sellerEmail);
            
            var sellerName = this.username;
            console.log("seller name "+sellerName);
            Session.set("sellerName", sellerName);
            
            Session.set("ifClickWishlist", "true");
            Session.set("submitemail", "false");

        }
    });
    Template.fourLightbox.helpers({
        "submitemail": function () {
            return Session.equals("submitemail", "true");
        },

        "emailSubject": function () {
            return Session.equals("emailSubject", "empty");
        },
        "emailContent": function () {
            return Session.equals("emailContent", "empty");
        }
        
    });
    
    Template.thirdLightbox.helpers({
        "ifClickWishlist": function () {

            return Session.equals("ifClickWishlist", "true");

        },
        "submitemail": function () {
            return Session.equals("submitemail", "true");
        },

        "emailSubject": function () {
            return Session.equals("emailSubject", "empty");
        },
        "emailContent": function () {
            return Session.equals("emailContent", "empty");
        },
        "sellerName" : function(){
            var sellerName = Session.get("sellerName");
            return sellerName;
        }
    });
    Template.fourLightbox.events({
        "submit form": function (e, t) {
            console.log("clickedfourthone");
            e.preventDefault();
            var emailSubject = t.find(".emailsubject").value;
            var emailContent = t.find(".emailcontent").value;

            Session.set("emailSubject", "full");
            Session.set("emailContent", "full");
            if (emailSubject === "") {
                Session.set("emailSubject", "empty");
                throw new Meteor.Error(404, 'empty string!');
            }

            if (emailContent === "") {
                Session.set("emailContent", "empty");
                throw new Meteor.Error(404, 'empty string!');
            }

            var currentEmail = Meteor.user().emails[0].address;
            
            if (Meteor.user().emails[0].address){
                var currentEmail = Meteor.user().emails[0].address;
            }else{
                var currentEmail = "";
            }
            
            if (Meteor.user().profile.username){
                var CurrentUsername = Meteor.user().profile.username;
            }else{
                var CurrentUsername = "";
            }
            

            var from = currentEmail;
            var to = "liut2@carleton.edu";
            var subject = emailSubject;
            var text = 'Hi, <br> <span style="color:#87ceeb; font-size: 22px; font-family: georgia;">'+CurrentUsername+'</span> has gaven you feedback. Here is the message from <span style="color: #87ceeb; font-size: 22px; font-family: georgia;">'+CurrentUsername+':</span> <br><br><span style="color: purple; font-size: 15px; font-family: georgia;">'+emailContent+'</span> <br> <br>You can contact him/her through this email address: <span style="color: blue;">'+currentEmail+"</span> <br><span style='position: absolute; bottom: 10px; right: 10px;'>--Please don't reply to this email directly.     --Sincerely,</span>"+ collegepuppy.com ;
                
                
                
                

            Meteor.call("sendEmail", to, subject, text);
           

            Session.set("submitemail", "true");
            Session.set("emailSubject", "full");
            Session.set("emailContent", "full");

        }

    });
    Template.thirdLightbox.events({
        "submit form": function (e, t) {
            console.log("clickedthirdone");
            e.preventDefault();
            var emailSubject = t.find(".emailsubject").value;
            var emailContent = t.find(".emailcontent").value;

            Session.set("emailSubject", "full");
            Session.set("emailContent", "full");
            if (emailSubject === "") {
                Session.set("emailSubject", "empty");
                throw new Meteor.Error(404, 'empty string!');
            }

            if (emailContent === "") {
                Session.set("emailContent", "empty");
                throw new Meteor.Error(404, 'empty string!');
            }


            var receiverName = Session.get("sellerName");
            var currentEmail = Meteor.user().emails[0].address;
            var CurrentUsername = Meteor.user().profile.username;

            var from = currentEmail;
            var to = Session.get("sellerEmail");
            var subject = emailSubject;
            var text = 'Hi, <span style="color: #87ceeb; font-size: 22px; font-family: georgia;">'+receiverName+':</span> <br> <span style="color:#87ceeb; font-size: 22px; font-family: georgia;">'+CurrentUsername+'</span> is interested in your post. Here is the message from <span style="color: #87ceeb; font-size: 22px; font-family: georgia;">'+CurrentUsername+':</span> <br><br><span style="color: purple; font-size: 15px; font-family: georgia;">'+emailContent+'</span> <br> <br>You can contact him/her through this email address: <span style="color: blue;">'+currentEmail+"</span> <br><span style='position: absolute; bottom: 10px; right: 10px;'>--Please don't reply to this email directly.     --Sincerely, collegepuppy.com </span>";
                
                
                
                

            Meteor.call("sendEmail", to, subject, text);

            Session.set("submitemail", "true");
            Session.set("emailSubject", "full");
            Session.set("emailContent", "full");

        }

    });
    Template.product.helpers({
        "ifsold": function () {
            if (Images.findOne({
                _id: this._id
            }).ifsold === "true") {
                return true;
            } else {
                return false;
            }
        }
    });
    Template.secondLightbox.helpers({
        "imageupload": function () {
            var userId = Meteor.userId();
            var imageupload = Imageupload.findOne({userId: userId});
            console.log("imageuploadlllll", imageupload);
            if (!imageupload){
               return true;
            }else{
                return false;
            }
            //return imageupload.imageupload;
        }
        
    });

    Template.firstLightbox.helpers({
        "productNameEmpty": function () {
            return Session.equals("productNameEmpty", "true");
        },
        "productPriceEmpty": function () {
            return Session.equals("productPriceEmpty", "true");
        },
        "productDesEmpty": function () {
            return Session.equals("productDesEmpty", "true");
        }
    });

    Template.firstLightbox.events({
        "submit form": function (e, t) {

            e.preventDefault();
            var userId = Meteor.userId();
            
           // var uploadId = Imageupload.findOne({userId: userId})._id;
            //Imageupload.remove({_id : uploadId});
            
            var productName = t.find(".productname").value;
            var productPriceVar = t.find(".productprice").value;
            var productDescription = t.find(".productdescription").value;
            var productCategory = t.find(".productcategory").value;
            var productPrice;
            
            if (productPriceVar === ""){
                productPrice = 0;
            }else{
                productPrice = parseInt(productPriceVar);
            }
            


            Tempinfo.insert(
            {
                productName: productName,
                productPrice : productPrice,
                productCategory: productCategory,
                productDescription : productDescription,
                userId : userId,
                date_created : new Date().valueOf()
                
            });
            
            
            
            t.find(".productname").value = "";
            t.find(".productprice").value = "";
            t.find(".productdescription").value = "";
            
            productName = Tempinfo.findOne({userId: userId},{sort: {date_created: -1}}).productName;
            productPrice = Tempinfo.findOne({userId: userId},{sort: {date_created: -1}}).productPrice;
            productCategory = Tempinfo.findOne({userId: userId},{sort: {date_created: -1}}).productCategory;
            productDescription = Tempinfo.findOne({userId: userId},{sort: {date_created: -1}}).productDescription;
            
            
            
            

        }

    });
}