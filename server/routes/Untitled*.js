'use strict';

// Express Router:
const router = require('express').Router(); // eslint-disable-line new-cap
const Untitled * = require('../../db').model('Untitled*');

router.get('/', (req, res, next) => {
  return Untitled * .findAll()
    .then(data => res.send(data))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  return Untitled * .findById(req.params.id)
    .then(data => res.send(data))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  return Untitled * .findById(req.params.id)
    .then(data => data.delete)
    .then(data => res.send(202))
    .catch(next)
})

router.post('/', (req, res, next) => {
  return Untitled * .create(req.body)
    .then(data => res.send(data))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  return Untitled * .findById(req.params.id)
    .then(data => data.update(req.body))
    .then(data => res.send(data))
    .catch(next)
})

module.exports = router;