const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.njk', {
        title: 'Meeps - Första sida',
        layout: 'layout.njk'
      });
});

module.exports = router;