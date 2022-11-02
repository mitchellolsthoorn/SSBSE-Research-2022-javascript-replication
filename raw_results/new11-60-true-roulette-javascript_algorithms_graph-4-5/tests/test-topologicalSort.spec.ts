export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphD1xcfpW = "1Q0dZ7Rbf4WuuvnukhXCEZwh7nWfVXN7bvjTw4ePaF1vWMURtFxhxHwdBMgCOFCGItqe9vcEaM2GUXUiAqD";
		const _returnValuefoSvuqj = await topologicalSort(_graphD1xcfpW)
	});

	it('test for topologicalSort', async () => {
		const _returnValuebZ2fFLO = []
		const _getAllVerticesFV4ofM9 = () => { return _returnValuebZ2fFLO };
		const _graphzkNTjS0 = {
			"getAllVertices": _getAllVerticesFV4ofM9
	}
		const _returnValueGTvSSUC = await topologicalSort(_graphzkNTjS0)
	});
})