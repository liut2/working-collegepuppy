if (Meteor.isClient){
    Template.freegiving.events({
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
    Template.freegiving.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Free"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Free"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Free"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    Template.sportsequipment.events({
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
    Template.sportsequipment.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Sports"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Sports"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Sports"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    
    Template.dormsupplies.events({
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
    Template.dormsupplies.helpers({
        
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Dorm"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Dorm"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Dorm"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    
    Template.unisex.events({
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
    Template.unisex.helpers({
        
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Unisex"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Unisex"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Unisex"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1},limit:50});
        }
    });
    
    Template.women.events({
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
    Template.women.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Women's"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Women's"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Women's"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    
    Template.men.events({
        
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
    Template.men.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Men's"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Men's"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Men's"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    
    Template.textbooks.events({
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
    Template.textbooks.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Textbooks"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Textbooks"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Textbooks"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1},limit:50});
        }
    });
    
    Template.novels.events({
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
    Template.novels.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Novels"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Novels"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Novels"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1},limit:50});
        }
    });
    
    Template.booksothers.events({
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
    Template.booksothers.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "BooksOthers"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "BooksOthers"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "BooksOthers"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    
    Template.phone.events({
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
    Template.phone.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Phones"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Phones"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Phones"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    
    Template.laptop.events({
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
    Template.laptop.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Laptops"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Laptops"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Laptops"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1},limit:50});
        }
    });
    
    Template.desktop.events({
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
    Template.desktop.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Desktops"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Desktops"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Desktops"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1},limit:50});
        }
    });
    
    Template.tv.events({
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
    Template.tv.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "TV"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "TV"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "TV"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1},limit:50});
        }
    });
    
    Template.gaming.events({
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
    Template.gaming.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Games"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Games"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Games"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1},limit:50});
        }
    });
    
    
    Template.cameras.events({
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
    Template.cameras.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Cameras"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Cameras"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Cameras"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    
    Template.headphones.events({
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
    Template.headphones.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "Headphones"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "Headphones"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "Headphones"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1}, limit:50});
        }
    });
    
    Template.electronicsothers.events({
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
    Template.electronicsothers.helpers({
        "nothingyet" :function(){
            var college = Meteor.user().profile.college;
            var count =  Images.find({college: college, "productCategory" : "ElectronicsOthers"}).count(); 
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
            if (Number(Session.get('zipCursor')) + 30 > Images.find({college: college, "productCategory" : "ElectronicsOthers"}).count()) {
                return ' ';
            }
            return (Number(Session.get('zipCursor')) + 30) + " - " + (Number(Session.get('zipCursor')) + 60);
        },
        "collegeName" : function(){
            return Meteor.user().profile.college;
        },
        
        "productList" : function(){
            var college = Meteor.user().profile.college;
            return Images.find({college: college, "productCategory" : "ElectronicsOthers"}, {sort: {date_created: -1},
                limit: 30,
                skip: Session.get("zipCursor")});
        },
        
        "wishList" : function(){
            var college = Meteor.user().profile.college;
            return Wishes.find({college : college}, {sort: {date_created: -1},limit:50});
        }
    });
    
    
    
}