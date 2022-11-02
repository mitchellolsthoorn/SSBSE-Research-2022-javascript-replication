export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueJNDVXG = true;
		const _getAllVerticesmCIHBg2 = () => { return _returnValueJNDVXG };
		const _graphEuePvBg = {
			"getAllVertices": _getAllVerticesmCIHBg2
	}
		const _returnValuesK5Fclz = await articulationPoints(_graphEuePvBg)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedCrma82t = true;
		const _graphQ6SvFqF = new Graph(_isDirectedCrma82t)
		const _returnValueKEcsCB = await _graphQ6SvFqF.getAllEdges()
		const _returnValuegSNQHgc = null;
		const _getKeyJ2IkAQ = () => { return _returnValuegSNQHgc };
		const _newVertexVQRJocR = {
			"getKey": _getKeyJ2IkAQ
	}
		const _returnValueqz6L3eY = await _graphQ6SvFqF.addVertex(_newVertexVQRJocR)
		const _returnValueGparIyF = await _graphQ6SvFqF.reverse()
		const _returnValuetVXLuhC = await _graphQ6SvFqF.getAllEdges()
		const _returnValuexop4a98 = await articulationPoints(_graphQ6SvFqF)
	});
})