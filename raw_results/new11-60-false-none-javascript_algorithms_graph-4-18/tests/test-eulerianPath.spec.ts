export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graph5dAHl6 = "ivfhgttanrgF3qG5dHfP25HSYEMRu4zM6";
		const _returnValuelEFJmoP = await eulerianPath(_graph5dAHl6)
	});
})