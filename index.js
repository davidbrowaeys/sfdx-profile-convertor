(function () {

  'use strict';
  exports.topics = [{
    name: 'profile',
    description: 'profile convertor'
  }];

  exports.namespace = {
    name: 'dbx2',
    description: 'Various utlity commands for SFDX'
  };

  exports.commands = [
    require('./commands/profile/convert.js'),
    require('./commands/profile/build.js')
  ];
}());