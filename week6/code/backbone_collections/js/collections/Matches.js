site.collections.Matches = Backbone.Collection.extend({
    model: site.models.Match,
    url: 'http://docent.cmi.hr.nl/moora/imp03/api/wedstrijden'
});