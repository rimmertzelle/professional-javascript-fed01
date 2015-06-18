site.routers.Matches = Backbone.Router.extend({
    routes: {
        'matches/:league/:club': 'clubAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     * @param league
     * @param club
     */
    clubAction: function (league, club)
    {
        site.events.trigger('newClub', {
            club: club,
            league: league
        });
    }
});
