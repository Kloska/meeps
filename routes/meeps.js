const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async (req, res, next) => {
    await pool
        .promise()
        .query('SELECT * FROM meeps')
        .then(([rows, fields]) => {
            res.render('meeps.njk', {
                meeps: rows,
                title: "Meeps"
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                meeps: {
                    error: 'Error getting meeps',
                },
            });
        });
});

/*
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(req.params.id)) {
        res.status(400).json({
            task: {
                error: 'Bad request',
            },
        });
    }
    await pool
        .promise()
        .query('SELECT * FROM tasks WHERE id = ?', [id])
        .then(([rows, fields]) => {
            res.json({
                task: {
                    data: rows,
                },
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                task: {
                    error: 'Error getting tasks',
                },
            });
        });
});
// copy GET :id route, edit SQL och response
router.get('/:id/delete', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(req.params.id)) {
        return res.status(400).json({
            task: {
                error: 'Bad request',
            },
        });
    }
    await pool
        .promise()
        .query('DELETE FROM tasks WHERE id = ?', [id])
        .then((response) => {
            if (response[0].affectedRows === 1) {
                req.session.flash = 'Task deleted';
                res.redirect('/tasks');
            } else {
                req.session.flash = 'Task not found';
                res.status(400).redirect('/tasks');
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                task: {
                    error: 'Error getting tasks',
                },
            });
        });
});

router.post('/', async (req, res, next) => {
    // { "task": "koda post" }
    const task = req.body.task;

    if (task.length < 3) {
        res.status(400).json({
            task: {
                error: 'A task must have at least 3 characters',
            },
        });
    }

    await pool
        .promise()
        .query('INSERT INTO tasks (task) VALUES (?)', [task])
        .then((response) => {
            if (response[0].affectedRows === 1) {
                req.session.flash = "Successfully added task";
                res.redirect('/tasks');
            } else {
                res.status(400).json({
                    task: {
                        error: 'Invalid task',
                    },
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                task: {
                    error: 'Error getting tasks',
                },
            });
        });

    // res.json(req.body);
});

router.post('/:id/complete', async (req, res, next) => {
    // { "task": "koda post" }

    const id = req.params.id;
    if (isNaN(req.params.id)) {
        return res.status(400).json({
            task: {
                error: 'Bad request',
            },
        });
    }

    await pool
        .promise()
        .query('UPDATE tasks SET completed = !completed WHERE id = ?', [id])
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                task: {
                    error: 'Error getting tasks',
                },
            });
        });
});
*/
module.exports = router;
