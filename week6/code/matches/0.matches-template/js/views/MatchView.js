site.views.MatchView = Backbone.View.extend({
  tagName:'li',

  events:{},

  initialize: function () {},

  template: _.template(),

  render:function(){
    return this;
  },

  clickHandler: function(e){
    e.preventDefault();
  }
});
