export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueWxfSHEj = 3.9947611653750155;
		const _reverseCnsEuBb = () => { return _returnValueWxfSHEj };
		const _graphHPRb56z = {
			"reverse": _reverseCnsEuBb
	}
		const _returnValueWLtmIeR = await stronglyConnectedComponents(_graphHPRb56z)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueJajJpI = "JOvqvyODlwJdubsBc8ENxRtUWC24gr";
		const _arrayValueyvr5QT = -9.941152481458547;
		const _isDirectedNYGrRVd = [_arrayValueJajJpI, _arrayValueyvr5QT]
		const _graphFdVc5zf = new Graph(_isDirectedNYGrRVd)
		const _returnValuerqnseDL = await _graphFdVc5zf.getAllVertices()
		const _returnValueIDfm5Yx = await _graphFdVc5zf.getWeight()
		const _returnValueHI8hNz8 = await _graphFdVc5zf.getAllEdges()
		const _returnValuewPR233 = await stronglyConnectedComponents(_graphFdVc5zf)
	});
})