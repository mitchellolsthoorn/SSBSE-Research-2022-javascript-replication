export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValuelq46KN = undefined;
		const _arrayValueAwSpMo5 = {
		
	}
		const _returnValueOzbnQxb = [_arrayValuelq46KN, _arrayValueAwSpMo5]
		const _getAllVerticesbY19Vm = () => { return _returnValueOzbnQxb };
		const _graphZheIrrE = {
			"getAllVertices": _getAllVerticesbY19Vm
	}
		const _returnValueA3UHcwK = await topologicalSort(_graphZheIrrE)
	});
})