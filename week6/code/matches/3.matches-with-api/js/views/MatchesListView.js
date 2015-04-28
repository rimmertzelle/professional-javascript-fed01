site.views.MatchesListView = Backbone.View.extend({

    tagName: "ul",

    initialize: function () {
        this.loadMatches();
    },

    render: function(model) {
      model.each(function(match){
        var matchView = new site.views.MatchView({ model: match });

        this.$el.append(matchView.render().el);

      }, this);
      return this;
    },

    loadMatches:function(data){
      this.collection.fetch({
          success: _.bind(this.loadMatchesSuccessHandler, this),
          error: _.bind(this.loadMatchesErrorHandler, this),
          data: {
            league:'PrimeraDivision',
            club:'Getafe'
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
