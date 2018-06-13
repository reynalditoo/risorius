const express = require('express');
const router = express.Router();
const AlertMsg = require('../models/admin'); // !! bien vérifier que la variable a le même nom que l'intantiation (new AlerMsg)
const config = require('../config/database');

// post alert-msg
/*router.post('/post-alert-msg', (req, res, next) => {
  let newAlertMsg = new AlertMsg({
    message: req.body.message
  });

AlertMsg.storeAlertMsg(newAlertMsg, (err) => {
    if(err){
      res.json({success: false, msg:'Failed to store message'});
    } else {
      res.json({success: true, msg:'Message stored successfully ! '});
      console.log(req.body);
    }
  }
);
});*/

// put alert-msg
router.put('/put-alert-msg', (req, res, next) => {

	AlertMsg.findOne({}).exec((err, results) => {
		if(err) {
			res.json({success: false, msg:'Failed to store message'});
		} else {
	      res.json({success: true, msg:'Message stored successfully ! '});
	      console.log('findOne worked!');
	      results.message = req.body.message;
	    }
	    results.save((err, results) => {
	            if(err) {
	                res.status(500).send(err)
	            }
	            console.log('SAVED !');
	        });
	});

});

// get alert-msg
router.get('/get-alert-msg', (req, res, next) => {
	AlertMsg.findOne({}).exec((err, results) => { 
		if(err){
	      res.json({success: false, msg:'Failed to get the message'});
	    } else {
	      res.json(results);
	      console.log(results);
	  }
	});
/* Si une méthode post était choisie, findOne({}).sort({'_id': -1}) (qui classe les id du dernier au 1er (sort)), 
selectionnerait (findOne) le dernier id
*/

});

module.exports = router;