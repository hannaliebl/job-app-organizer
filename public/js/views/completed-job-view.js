var CompletedJobsView = Backbone.View.extend({
  tagName: 'div',
  className: 'list-group',
  initialize: function () {
    this.collection.on('add', this.render, this);
    console.log('watcher on completed job view fired');
  },
  render: function () {
    console.log('render on completed job view fired');

    var outputHtml = '';

    console.log('completed job view collection::before',this.collection);
    this.collection.models.forEach(function (item) {
      outputHtml += '<a href="#" class="list-group-item">'
      outputHtml += '<h4 class="list-group-item-heading">' + item.get('title') + '</h4>';
      outputHtml += '<p class="list-group-item-text">' + item.get('company') + '</p>';
      outputHtml += '</a>'
    });

    console.log('completed job view collection::after',this.collection);

    $(this.el).html(outputHtml);
  }
});