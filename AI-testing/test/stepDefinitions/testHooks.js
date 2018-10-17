import { defineSupportCode } from 'cucumber';

const testContext = require('../testContext');
const fs = require('fs');
const path = require('path');
const testPath= './test/learn/route.json';
const scrollTestPath = './test/learn/scrollRoute.json'

function learn (testPath, route) {
    const file = JSON.parse(fs.readFileSync(path.join(process.cwd(), testPath)));
    if (testContext[route] !== '') {
        file[testContext[route]] ++;
        fs.writeFile(testPath, JSON.stringify(file))
    }
}

defineSupportCode( ({Before, After}) => {

    After({tags: '@learn'}, (scenarioResult) => {
        console.log(scenarioResult.status);
        if (scenarioResult.status === 'failed') {
            learn( testPath, 'route');
            learn( scrollTestPath, 'scrollRoute');
        }
    });
});
