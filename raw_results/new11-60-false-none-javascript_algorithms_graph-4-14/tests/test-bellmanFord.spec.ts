export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueZ9IDT7d = -5.68923284953039;
		const _graphjcNdweu = () => { return _returnValueZ9IDT7d };
		const _arrayValueWFROXcz = undefined;
		const _arrayValueyCCrjI = true;
		const _startVertexZyoqyAa = [_arrayValueWFROXcz, _arrayValueyCCrjI]
		const _returnValuecSDp8d3 = await bellmanFord(_graphjcNdweu, _startVertexZyoqyAa)
	});
})