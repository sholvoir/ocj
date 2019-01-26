const ProblemModel = require('../models/problem-model');

const getProblems = () => {
    return new Promise((resolve, reject) => {
        //resolve(problems);
        ProblemModel.find({}, (err, problems) => {
            if (err) {
                reject(err);
            } else {
                resolve(problems)
            }
        })
    })
};

const getProblem = (id) => {
    return new Promise((resolve, reject) => {
        //resolve(problems.find(problem => problem.id === id));
        ProblemModel.findOne({id}, (err, problem) => {
            if (err) {
                reject(err);
            } else {
                resolve(problem);
            }
        })
    })
};

const addProblem = (newProblem) => {
    return new Promise((resolve, reject) => {
        // if (problems.find(problem => problem.name === newProblem.name)) {
        //     reject('Problem already exist!');
        // } else {
        //     newProblem.id = problems.length + 1;
        //     problems.push(newProblem);
        //     resolve(newProblem);
        // }
        ProblemModel.findOne({name: newProblem.name}, (err, data) => {
            if (data) {
                reject('Problem already exist!');
            } else {
                ProblemModel.count({}, (err, num) => {
                    newProblem.id = num + 1;
                    const mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save((err, newData) => {
                        if (err) reject('Mongo Save Error!');
                        else resolve(newData);
                    });
                });
            }
        });
    });
};

const modifyProblem = (newProblem) => {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({name: newProblem.name}, (err, data) => {
            if (data) {
                data.desc = newProblem.desc;
                data.difficulty = newProblem.difficulty;
                data.save((err, newData) => {
                    if (err) reject(err);
                    else resolve(newData);
                });
            } else {
                reject('Problem not find');
            }
        })
    })
}

module.exports = {
    getProblems,
    getProblem,
    addProblem,
    modifyProblem
};