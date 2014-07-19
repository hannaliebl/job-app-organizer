// model: the data that will fill in the two collections
var Job = Backbone.Model.extend({});

// collections: a job model is either completed or unfinished
var AllJobs = Backbone.Collection.extend({
  model: Job,
  company: 'cid'
});

var UnfinishedJobs = Backbone.Collection.extend({
  model: Job,
  comparator: 'cid'
});

var CompletedJobs = Backbone.Collection.extend({
  model: Job,
  company: 'cid'
});

// instantiate the collections:
var allJobs = new AllJobs();
var unfinishedJobs = new UnfinishedJobs();
var completedJobs = new CompletedJobs();

var Router = Backbone.Router.extend({
  routes: {
    '': 'allJobs' //
  },
  allJobs: function () {
    this.allJobsView = new AllJobsView({collection: allJobs}); //view instantiated here, defined in separate view file
    this.allJobsView.render();
  }

});

$(function () {
  window.app = new Router();
  Backbone.history.start();
});