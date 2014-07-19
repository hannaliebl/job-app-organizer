var allJobsTemplate = '<h2>Submit Jobs</h2>' +
  '<div class="form-group" id="submit-job-form">' +
    '<label for="title-input">Job Title</label>' +
    '<input id="title-input" class="form-control" type="text">' +
    '<br>' +
    '<label for="company-input">Company</label>' +
    '<input id="company-input" class="form-control" type="text">' +
    '<div class="checkbox">' +
    '<label>' +
    '<input type="checkbox" id="applied-to"> Application completed?' +
    '</label>' +
    '</div>'+
    '<br>' +
    '<button id="add-job" class="btn btn-success">Add Job</button>' +
    '<br>' +
  '</div>' +
  '<br><br>' +
  '<h3>Completed Jobs</h3>' +
  '<div id="completed-job-list">'+
  '</div>'+
  '<h3>Jobs Left To Apply To</h3>' +
  '<div id="unfinished-job-list">'+
  '</div>';

var AllJobsView = Backbone.View.extend({
  el: '#job-organizer-app',
  initialize: function () {
    $(this.el).html(allJobsTemplate);
    this.collection.on('add', this.render, this);
  },
  render: function () {
    var allJobsInputView = new AllJobsInputView({collection: allJobs});
    var completedJobsView = new CompletedJobsView({collection: completedJobs});
    var unfinishedJobsView = new UnfinishedJobsView({collection: unfinishedJobs});
    completedJobsView.render();
    $('#completed-job-list').html(completedJobsView.$el);
    unfinishedJobsView.render();
    $('#unfinished-job-list').html(unfinishedJobsView.$el);
  }
});