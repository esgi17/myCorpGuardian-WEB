const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Device = ModelIndex.Device;
const DeviceTypeController = require('./deviceType');
const Op = ModelIndex.sequelize.Op;

const DeviceController = function() { };

/**
*  Creation d'un Device en base
**/
DeviceController.add = function() {
    return Device.create({
    });
};

/**
* Suppression d'un Device en base
**/
DeviceController.delete = function(id) {
  return Device.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Récupération des élements en base
**/
DeviceController.getAll = function (id) {
    const options = {
      include: [{
        model: ModelIndex.DeviceType,
        as : 'deviceType'
      }]
    };
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }
    options.where = where;
    return Device.findAll(options);
};

DeviceController.getAllCameras = function (device_id) {
    return DeviceTypeController.getId('camera')
      .then( (deviceType) => {
          const options = {
              include: [{
                  model: ModelIndex.DeviceType,
                  as : 'deviceType'
              }]
          };
          const where = {};

          if( device_id !== undefined ) {
              where.id = {
                  [Op.eq] : `${device_id}`
              };

          }
          where.device_type_id = {
              [Op.eq] : deviceType[0].id
          }
          options.where = where;
          return Device.findAll(options);
      })
      .catch( (err) => {
          return err;
      });

}

// Export du controller
module.exports = DeviceController;
