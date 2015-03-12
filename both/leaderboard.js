// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".
if (Meteor.isClient) {
    Template.mySearchProduct.helpers({
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
    Template.mySearchProduct.events({
    
         "click #mulan": function (e, t) {
            var sellerEmail = this.createdByEmail;
            Session.set("sellerEmail", sellerEmail);
            
            
             
            var sellerName = this.username;
            
            Session.set("sellerName", sellerName);
             
            Session.set("submitemail", "false");
            Session.set("ifClickWishlist", "false");
        }
    });
    
    Template.leaderboards.helpers({
        "allDocs": function () {
            var college = Meteor.user().profile.college;
            return Images.find({
                college: college
            }).count();
        },
        "ifnotsold": function () {
            var college = Meteor.user().profile.college;
            if (Images.findOne({
                _id: this._id
            }).ifsold === "false" && Images.findOne({_id: this._id}).college === college) {
                return true;
            } else {
                return false;
            }
        }
    });

    Template.leaderboards.events({
        'change .sort-select': function (e) {
            var instance = EasySearch.getComponentInstance({
                index: 'images',
                id: 'search'
            });

            EasySearch.changeProperty('images', 'sortBy', $(e.target).children(':selected').data('sort'));
            EasySearch.changeLimit('images', 10);

            instance.paginate(1);
            instance.triggerSearch();
        }
    });


}


// Search Index for the main players search
EasySearch.createSearchIndex('images', {
    'collection': Images, // instanceof Meteor.Collection
    'field': 'productName', // array of fields to be searchable
    'limit': 20,
    'use': 'mongo-db',
    'convertNumbers': true,
    'props': {
        //'filteredCategory' : Meteor.user().profile.college,
        'sortBy': 'productPrice'
    },
    'sort': function () {
        if (this.props.sortBy === 'lowest-price') {
            return {
                'productPrice': 1
            };
        }

        // default by highest score
        return {
            'date_created': -1
        };

    },
    'query': function (searchString, opts) {
        //EasySearch.changeProperty('images',  'filteredCategory', Meteor.user().profile.college);
        // Default query that will be used for the mongo-db selector
        var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
        
        return query;
    }
});