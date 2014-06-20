site.views.MatchView = Backbone.View.extend({
  tagName:'li',

  events:{
    'click li':'clickHandler'
  },

  initialize: function () {
        this.render();
  },

  template: _.template( $("#matchTemplate").html() ),

  render:function(){
    console.log('yep');
    console.log(this.model.toJSON());
    this.$el.html(this.template(this.model.toJSON()) );
    return this;
  },

  clickHandler: function(e){
    e.preventDefault();
    var currentTarget = e.target;
    $(currentTarget).toggleClass("blue");
  }
});
