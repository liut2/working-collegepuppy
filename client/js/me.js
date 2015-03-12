Template.myposteditems.helpers({
    "prevText": function () {
            if (Number(Session.get("zipCursor")) < 30) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) - 30) + " - " + (Number(Session.get('zipCursor')));
        },
        "nextText": function () {
            
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
    "productList": function () {
        console.log(Meteor.userId());
        return Images.find({
            userId: Meteor.userId()
        },{sort: {date_created: -1},limit: 30, skip: Session.get("zipCursor")});

    }
});
Template.myposteditems.events({
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
Template.myProduct.helpers({
    "ifsold": function () {
        if (Images.findOne({
            _id: this._id
        }).ifsold === "true") {
            return true;
        } else {
            return false;
        }
    },

    "ifeditprice": function () {
        if (Images.findOne({
            _id: this._id
        }).editPrice === "true") {
            return true;
        } else {
            return false;
        }
    }
});

Template.myProduct.events({
    "click #ifsold": function (e, t) {

        Images.update({
            _id: this._id
        }, {
            $set: {
                ifsold: "true"
            }
        });

    },

    "click #editedprice": function (e, t) {
        Images.update({
            _id: this._id
        }, {
            $set: {
                editPrice: "false"
            }
        });
        var newPrice = t.find("#newprice").value;
        Images.update({
            _id: this._id
        }, {
            $set: {
                productPrice: newPrice
            }
        });
    },

    "click #noteditprice": function (e, t) {
        Images.update({
            _id: this._id
        }, {
            $set: {
                editPrice: "true"
            }
        });
    }
});
Template.myWishProduct.events({
    "click #clicktodelete": function (e, t) {
        console.log("id is " + this._id);
        var thisId = Wishlist.findOne({
            userId: Meteor.userId(),
            productId: this._id
        })._id;
        Wishlist.remove({
            _id: thisId
        }, {
            $set: {
                remove: "true"
            }
        });
        console.log("remove true");
    },
    "click #mulan" : function(e,t){
        var sellerEmail = this.createdByEmail;
            Session.set("sellerEmail", sellerEmail);
            
            var sellerName = this.username;
            console.log("seller name "+sellerName);
            Session.set("sellerName", sellerName);
            
            Session.set("submitemail", "false");
            Session.set("ifClickWishlist", "false");
    }
});
Template.mywishlist.events({
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
Template.mywishlist.helpers({
    "prevText": function () {
            if (Number(Session.get("zipCursor")) < 30) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) - 30) + " - " + (Number(Session.get('zipCursor')));
        },
        "nextText": function () {
            
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
    "productList": function () {
        var wishes = [];
        Wishlist.find({
            userId: Meteor.userId()
        }).forEach(function (wish) {
            wishes.push(wish.productId)
        });
        console.log(wishes);
        return Images.find({
            _id: {
                $in: wishes
            }
        },{sort: {date_created: -1},limit: 30, skip: Session.get("zipCursor")});
    }

});
Template.myWishProduct.helpers({
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