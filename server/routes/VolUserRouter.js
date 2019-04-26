// VolUserRouter.js

const express = require('express');
const app = express();
const VolUserRouter = express.Router();

const VolUser = require('../models/VolUser');

VolUserRouter.route('/add').post(function (req, res) {
  const voluser = new VolUser(req.body);
  voluser.save()
    .then(voluser => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

VolUserRouter.route('/').get(function (req, res) {
    VolUser.find(function (err, voluser){
    if(err){
      console.log(err);
    }
    else {
      res.json(voluser);
    }
  });
});

VolUserRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  VolUser.findById(id, function (err, voluser){
      res.json(voluser);
  });
});

VolUserRouter.route('/update/:id').post(function (req, res) {
    VolUser.findById(req.params.id, function(err, voluser) {
    if (!voluser)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      voluser.username = req.body.username;
      voluser.full_name = req.body.full_name;

      voluser.save().then(voluser => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

VolUserRouter.route('/delete/:id').get(function (req, res) {
    VolUser.findByIdAndRemove({_id: req.params.id},
       function(err, voluser){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = VolUserRouter;