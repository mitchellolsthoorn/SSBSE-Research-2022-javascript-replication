export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuetw1KbGa = null;
		const _reverseExphpGO = () => { return _returnValuetw1KbGa };
		const _graphYSLSVtW = {
			"reverse": _reverseExphpGO
	}
		const _returnValueKiVUVrJ = await stronglyConnectedComponents(_graphYSLSVtW)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedzmXc5vy = true;
		const _graphWU7yuOD = new Graph(_isDirectedzmXc5vy)
		const _returnValueV3RmeUH = await _graphWU7yuOD.getAdjacencyMatrix()
		const _returnValueKxab7JG = await _graphWU7yuOD.getAllEdges()
		const _returnValueGcHaOSw = await _graphWU7yuOD.getWeight()
		const _returnValuePey9KVq = await stronglyConnectedComponents(_graphWU7yuOD)
	});
})