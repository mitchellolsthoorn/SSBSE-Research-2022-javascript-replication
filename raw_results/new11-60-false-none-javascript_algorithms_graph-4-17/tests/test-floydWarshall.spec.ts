export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuectpJS8R = null;
		const _arrayValues8gkqL = () => { return _returnValuectpJS8R };
		const _graphsyJLjiW = [_arrayValues8gkqL]
		const _returnValueO218xMs = await floydWarshall(_graphsyJLjiW)
	});
})