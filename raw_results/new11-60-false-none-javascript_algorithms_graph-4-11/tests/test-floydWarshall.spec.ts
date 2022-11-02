export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueqKUFaE9 = undefined;
		const _graphAUY78cC = () => { return _returnValueqKUFaE9 };
		const _returnValuegT1irth = await floydWarshall(_graphAUY78cC)
	});
})