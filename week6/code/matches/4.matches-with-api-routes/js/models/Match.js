site.models.Match = Backbone.Model.extend({
  defaults:{
    homeMatch: true,
    homeClub: 'Ajax',
    awayClub: 'SC Cambuur',
    stadium: 'Amsterdam Arena',
    city: 'Amsterdam'
  },

  initialize:function(){

  },
  
});
