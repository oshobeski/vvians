const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';

    // the routes are defined here
    // insert 
    router.post('/insertAccessToken', (req, res, next) => {
        console.log(req.body);
        db.query(
            'INSERT INTO strava_users (email, token, name, runnerId, runTotal, cycleTotal, swimTotal, othersTotal) VALUES (?,?,?,?,?,?,?,?)',
            [req.body.email, req.body.token, req.body.name, req.body.id, 0, 0, 0, 0],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });


    // select record by email from DB
    router.get('/getByEmail/:id', function (req, res, next) {
        db.query(
            'SELECT * FROM strava_users WHERE email=? ',
            [req.params.id],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    // select
    // router.get('/event', function (req, res, next) {
    //     db.query(
    //         'SELECT * FROM strava_users',
    //         (error, results) => {
    //             if (error) {
    //                 console.log(error);
    //                 res.status(500).json({ status: 'error' });
    //             } else {
    //                 res.status(200).json(results);
    //             }
    //         }
    //     );
    // });

    // // update
    // router.put('/event/:id', function (req, res, next) {
    //     db.query(
    //         'UPDATE strava_users SET name=?, description=?, date=? WHERE id=? AND owner=?',
    //         [req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner],
    //         (error) => {
    //             if (error) {
    //                 res.status(500).json({ status: 'error' });
    //             } else {
    //                 res.status(200).json({ status: 'ok' });
    //             }
    //         }
    //     );
    // });

    // // delete
    // router.delete('/event/:id', function (req, res, next) {
    //     db.query(
    //         'DELETE FROM strava_users WHERE id=? AND owner=?',
    //         [req.params.id, owner],
    //         (error) => {
    //             if (error) {
    //                 res.status(500).json({ status: 'error' });
    //             } else {
    //                 res.status(200).json({ status: 'ok' });
    //             }
    //         }
    //     );
    // });

    return router;
}

module.exports = createRouter;