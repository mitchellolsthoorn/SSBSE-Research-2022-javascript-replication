export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValueUaEM7yC = {
		
	}
		const _arrayValueWS9aLzG = "nBsiVLRAsqBVSeGBHbtEWSss81CCdVGv3tGcMdzIxmkvAux";
		const _graph5wKeew = [_arrayValueUaEM7yC, _arrayValueWS9aLzG]
		const _returnValuevZwM9e = await topologicalSort(_graph5wKeew)
	});
})