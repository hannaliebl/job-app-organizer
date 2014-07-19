var AllJobsInputView = Backbone.View.extend({

  el: '#submit-job-form',
  events: {
    'click #add-job': 'addJob'
  },
  addJob: function () {
    var $titleInput = $(this.el).find('#title-input');
    var $companyInput = $(this.el).find('#company-input');
    if ($('#applied-to').prop('checked')) {
      var appliedTo = true;
    } else {
      var appliedTo = false;
    }

    var titleInput = $titleInput.val();
    var companyInput = $companyInput.val();

    if (appliedTo === true) { //add the data to the completedJobs or unfinishedJobs collection
      completedJobs.add({title: titleInput, company: companyInput, appliedTo: true});
      console.log("i got to true");
    } else {
       unfinishedJobs.add({title: titleInput, company: companyInput, appliedTo: false});
     }
    console.log("hello!",completedJobs);

    $companyInput.val(''); 
    $titleInput.val('');
  }
  
});