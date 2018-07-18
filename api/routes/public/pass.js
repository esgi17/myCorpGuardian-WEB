const express = require('express');
const bodyParser = require('body-parser');
const publicConfig = require('./config');
const PassController = require(publicConfig.controllers.pass_path);

//const HomeController = controllers.HomeController;

const passRouter = express.Router();
passRouter.use(bodyParser.json());

/**
* @api {get} /Pass GET Pass
* @apiGroup pass
* @apiUse searchById
* @apiUse passCreated
* @apiUse error500
* @apiUse error404
*/
passRouter.get('/', function(req, res) {
    const id = req.body.id;
    PassController.getAll(id)
      .then( (pass) => {
          res.status(201).json(pass);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

/**
* @api {post} /Pass ADD Pass
* @apiGroup pass
* @apiUse passExample
* @apiUse passCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
passRouter.post('/', function(req, res) {
    const user_id = req.body.user_id;
    if( user_id === undefined ) {
        res.status(400);
        return;
    }
    PassController.add(user_id)
      .then( (pass) => {
          res.status(201).json(pass);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      })
});

/**
* @api {delete} /pass DELETE Pass
* @apiGroup pass
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 Pass deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "Pass deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
passRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  PassController.find(id)
  .then( (pass) => {
    if (pass) {
      PassController.delete(id)
        .then( pass => {
            res.status(200).json('Pass deleted');
        });
    } else {
      res.status(400).json('Pass not found');
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});

/**
* @api {put} /Pass UPDATE Pass
* @apiGroup pass
* @apiUse passExample
* @apiUse passCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
passRouter.patch('/:id', function(req, res) {
  const user_id = req.body.user_id || 0;
  var id = parseInt(req.params.id);
  PassController.find(id)
  .then( (user) => {
    if (user) {
      PassController.attribute(id, user_id)
      .then( user => {
      res.status(200).json('Pass updated');
      });
    } else {
      res.status(400).json('Pass not found');
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});


module.exports = passRouter;
