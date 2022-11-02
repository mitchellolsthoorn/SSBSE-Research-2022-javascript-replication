export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphzt0aMMj = "OOGQjhY8nqPRrntmONwjNMgFLevayX2IPU7gOy2yg3EpAzlaP6Bdikjlnqrh1fNJBPqifMPp";
		const _returnValueDh9kVrF = await eulerianPath(_graphzt0aMMj)
	});
})