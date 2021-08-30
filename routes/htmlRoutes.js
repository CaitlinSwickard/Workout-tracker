const router = require("express").Router();

// routing html pages
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public.index,html'));
});

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});


module.exports = router;