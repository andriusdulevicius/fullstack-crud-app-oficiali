const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

router.get('/', (req, res) => {
  // get all owners from db
  Owner.find()
    .then((found) => {
      // generate list items with owners name and email
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        owners: found,
      });
    })
    .catch((err) => console.error(err));
  // pass owners to view
});
// formos parodymo route
router.get('/new', (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
});

// formos apdorojimo routas
router.post('/new', (req, res) => {
  // sukurti 3 naujus ownerius
  const o1 = { name: 'Bob1', email: 'Bob@Pop1.op' };
  console.log(req.body);
  const newOwner = new Owner({
    name: o1.name,
    email: o1.email,
  });
  newOwner
    .save()
    .then((result) => {
      res.render('owners/new', {
        title: 'Add owner',
        page: 'owners_new',
        result,
      });
    })
    .catch((err) => res.send('Opps did not save', err));
});

module.exports = router;
