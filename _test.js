/* Contains basic integration testing */

var API = require('./');

var api = new API({
  token: require('./_token.js'),
});

function display(err, data) {
  if (err)
    return console.log('ERROR:', err, '\nBODY:', data);
  console.log(data);
}

var setup = {
  actionId: '35394395',
  dropletId: 3180748,
  image: '7654726',
  dropletAction: 1234,
};

/*
api.request({
  target: 'actions',
  method: 'GET',
  limit: 10,
  page: 2,
}, display);

api.regularRequest({
  target: 'actions',
  method: 'GET',
}, 'actions', display);

api.paginatedRequest({
  target: 'actions',
  method: 'GET',
}, 'actions').getAll(display);

// METHODS //

api.getUserInfo(display);

api.listActions().getAll(display);
api.getAction(setup.actionId, display);

api.listDroplets().getAll(display);
api.getDroplet(setup.dropletId, display);
api.listAvailableKernels(setup.dropletId, display);
api.listDropletSnapshots(setup.dropletId, display);
api.listDropletBackups(setup.dropletId, display);
api.listDropletActions(setup.dropletId, display);
api.deleteDroplet(setup.dropletId, display);


api.powerOffDroplet(setup.dropletId, display);
api.powerOnDroplet(setup.dropletId, display);

api.createDroplet({
  name: 'test',
  image: setup.image,
  size: '512mb',
  region: 'ams2',
}, display);

api.listImages(display);
api.listDistributionImages(display)
api.listApplicationImages(display)

api.listRegions().getAll(display);
api.listSizes().getAll(display);
*/



/*

api.disableDropletBackups
api.rebootDroplet
api.powerCycleDroplet
api.shutdownDroplet
api.restoreDroplet
api.passwordResetDroplet
api.resizeDroplet
api.rebuildDroplet
api.renameDroplet
api.changeDropletKernel
api.enableIpv6Droplet
api.enableDropletPrivateNetwork
api.snapshotDroplet



// NOT DONE YET!!
api.listDomains().getAll(display);
api.createDomain
api.retrieveDomain
api.deleteDomain
api.listDomainRecords
api.retrieveDomainRecord
api.createDomainRecord
api.updateDomainRecord
api.deleteDomainRecord

api.getDropletAction


api.getImage
api.getImageBySlug
api.updateImage
api.deleteImage
api.transferImage
api.getImageAction
api.listSSHKeys
api.createSSHKey
api.getSSHKey
api.updateSSHKey
api.destroyKey

*/
