site.routers.Router = Backbone.Router.extend({

  routes:{
    '' : 'index',
    'league/:leagueName/:clubName' : 'searchClub'
    //#/league/Eredivisie/Ajax
  },

  index: function(){
    console.log('cool');
    this.searchClub('Eredivisie', 'Ajax');
  },

  searchClub: function(leagueName, clubName){
    console.log(leagueName);
    console.log(clubName)
    site.events.trigger('searchClub', {
      club: clubName,
      league: leagueName
    });
  }
});
