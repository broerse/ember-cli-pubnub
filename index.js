/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pubnub',

  included: function(app) {
  	this._super.included(app);
  	app.import("node_modules/ember-cli-pubnub/" + app.bowerDirectory + "/pubnub/web/pubnub.js");
  }
};
