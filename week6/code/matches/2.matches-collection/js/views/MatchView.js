site.views.MatchView = Backbone.View.extend({
  tagName:'li',

  events:{
    'click li':'clickHandler'
  },

  template: _.template( $("#matchTemplate").html() ),

  render:function(){
    console.log('yep');
    this.$el.html(this.template(this.model.toJSON()) );
    return this;
  },

  clickHandler: function(e){
    e.preventDefault();
    var currentTarget = e.target;
    $(currentTarget).toggleClass("blue");
  }
});
