const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Device = ModelIndex.Device;

const Op = ModelIndex.sequelize.Op;

const DeviceController = function() { };

/**
*  Creation d'un Device en base
**/
DeviceController.add = function(name, ref, deviceType) {
    const options = {};
    options.name = name;
    options.ref = ref;
    if (deviceType !== undefined){
      options.device_type_id = deviceType;
    }
    return Device.create(options);
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
DeviceController.getAll = function (id, device_type_id) {
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

    if( device_type_id !== undefined ) {
         where.device_type_id = {
            [Op.eq] : `${device_type_id}`
         }
    }

    options.where = where;
    return Device.findAll(options);
};


// Export du controller
module.exports = DeviceController;
