site.views.MatchesListView = Backbone.View.extend({

    tagName: "ul",

    initialize: function () {
        this.render();
    },

    render: function() {
      this.collection.each(function(match){
        var matchView = new site.views.MatchView({ model: match });
        this.$el.append(matchView.render().el);
      }, this);
      return this;
    }
});
