'use strict';
module.exports = function(app) {
  var checkController = require('../controllers/checkController');
  var stateController = require('../controllers/stateController');

  // todoList Routes
   app.route('/states')
    .get(stateController.list_states)

  app.route('/checks')
    .get(checkController.list_all_CheckRequests)
    .post(checkController.create_a_CheckRequest)

  app.route('/checks/:checkId')
    .get(checkController.read_a_CheckRequest)
    .put(checkController.update_a_CheckRequest)
    .delete(checkController.delete_a_CheckRequest)
};