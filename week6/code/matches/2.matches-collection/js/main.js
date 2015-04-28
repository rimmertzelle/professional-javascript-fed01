(function () {
    site.init = function () {


        var match = new site.models.Match();
        var matches = new site.collections.Matches([
          {
            "homeMatch":true,
            "homeClub":"Ajax",
            "awayClub":"SC Cambuur",
            "stadium":"Amsterdam ArenA",
            "city":"Amsterdam"
          },
          {
            "homeMatch":false,
            "homeClub":"NEC",
            "awayClub":"Ajax",
            "stadium":"De Goffert",
            "city":"Nijmegen"
          },
          {
            "homeMatch":false,
            "homeClub":"Heracles Almelo",
            "awayClub":"Ajax",
            "stadium":"Polman Stadion",
            "city":"Almelo"
          },
          {
            "homeMatch":false,
            "homeClub":"Feyenoord",
            "awayClub":"Ajax",
            "stadium":"De Kuip",
            "city":"Rotterdam"
          }
        ]);

        new site.views.MatchView({el:"#box", model:match});
        new site.views.MatchesListView({el:"#box", collection: matches});
    };

    site.$document.on('ready', site.init);
})();
