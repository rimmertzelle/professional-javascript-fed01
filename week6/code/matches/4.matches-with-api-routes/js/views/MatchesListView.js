site.views.MatchesListView = Backbone.View.extend({

    tagName: "ul",

    initialize: function () {
        //this.loadMatches();
        site.events.on('searchClub', this.loadMatches, this);

    },

    render: function(model) {
      model.each(function(match){
        var matchView = new site.views.MatchView({ model: match });

        this.$el.append(matchView.render().el);

      }, this);
      return this;
    },

    loadMatches:function(data){
      console.log(data.club);
      this.collection.fetch({
          success: _.bind(this.loadMatchesSuccessHandler, this),
          error: _.bind(this.loadMatchesErrorHandler, this),
          data: {
            league: data.league,
            club: data.club
          }
      });
    },

    loadMatchesSuccessHandler: function(model, response, options){
      this.render(model);
    },

    loadMatchesErrorHandler: function(model, response, options){
      console.dir(model);
    }

});
