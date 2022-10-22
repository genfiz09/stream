const {Router} = require('express');

const router = Router();


router.get('/', (req, res) => {
    res.redirect('index.html');
});

module.exports = router;

router.get('/vista', (req, res) => {
  res.render('vista.html');
});