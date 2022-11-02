export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphU7Q9VLA = "jzZ1kDYnlx2VMiVMcKzl9BqV2ZgGPSjoGLeGK0KHwxpsWvt0e1zngqOcyUtewA2qsW574ZHXdiwlL1eAw9tNsMndrCe";
		const _returnValueuUrhsU = {
		
	}
		const _arrayValueK0mytO = () => { return _returnValueuUrhsU };
		const _arrayValueKXfZ8gg = []
		const _arrayValueXlJzqi = null;
		const _startVertexYtT6Qfs = [_arrayValueK0mytO, _arrayValueKXfZ8gg, _arrayValueXlJzqi]
		const _returnValueEfCDVP9 = await bellmanFord(_graphU7Q9VLA, _startVertexYtT6Qfs)
	});
})