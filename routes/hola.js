var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('hello', {
    tip: 'Hello World Gemini!'
  });
});

router.get('/a', function *(next) {
  yield this.render('hello', {
    tip: 'Hello World a!'
  });
});

module.exports = router;
