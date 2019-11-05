const express = require('express');

// database access using knex
const knex = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    knex.select('*').from('posts').then(posts => {
        res.status(200).json(posts);
    })
    .catch(error => {
        res.status(500).json({ error:'Failed to get posts from database'});
    })
});

router.get('/:id', (req, res) => {
    knex
    .select('*')
    .from('posts')
    .where('id', '=', req,params.id)
    .first()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(error => {
        res.status(500).json({ error:'Failed to get posts from database'});
    })
});

router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('posts')
    .then(ids => {
        res.status(200).json(post);
    })
    .catch(error => {
        res.status(500).json({error:'Failed to insert post from database'});
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    knex('posts').where({id: req.params.id}).update(changes)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        res.status(500).json({error:'Failed to insert post from database'});
    })
});

router.delete('/:id', (req, res) => {
    const changes = req.body;
    knex('posts')
    .where({id: req.params.id}).del(changes)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        res.status(500).json({error:'Failed to delete post from database'});
    })
});

module.exports = router;