var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/webhooks/created', function(request, response, next) {
  const reponseBody = {
    message: "Pull request is created",
    data: request.body
  };
  console.log(reponseBody)
  response.send(reponseBody);
});

module.exports = router;
