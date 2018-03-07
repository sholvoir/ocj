const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const nodeRestClient = require('node-rest-client');
const restClient = new nodeRestClient();
const Executor_Server_Url = 'http://localhost:5000/build_and_run';
restClient.registerMethod('build_and_run', Executor_Server_Url, 'POST');

const problemService = require('../services/problem-service');

router.get('/problems', (req, res) => {
    problemService.getProblems().then(problems => res.json(problems));
});

router.get('/problems/:id', (req, res) => {
    problemService.getProblem(+req.params.id).then(problem => res.json(problem));
});

router.put('/problems/:id', jsonParser, (req, res) => {
    problemService.modifyProblem(req.body)
        .then(problem => res.json(problem), error => res.status(400).send(error.body || error));
});

router.post('/problems', jsonParser, (req, res) => {
    problemService.addProblem(req.body)
        .then((problem) => {
            res.json(problem);
        }, (error) => {
            res.status(400).send(error.body || error);
        });
});

router.post('build_and_run', jsonParser, (req, res) => {
    restClient.method.build_and_run({
        data: req.body,
        headers: { 'Content-type': 'application/json' },
    }, (data, response) => {
        console.log(data);
        res.json(data);
    })
});

module.exports = router;