export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuekLoF8uq = 8.596980514669525;
		const _getAllVerticesSKqGuKI = () => { return _returnValuekLoF8uq };
		const _graphxW6t2e = {
			"getAllVertices": _getAllVerticesSKqGuKI
	}
		const _returnValuesPkEE8 = await articulationPoints(_graphxW6t2e)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedZp6FOGH = false;
		const _graphMnmWWYf = new Graph(_isDirectedZp6FOGH)
		const _returnValueQmJ7519 = await _graphMnmWWYf.getWeight()
		const _returnValuepKtpToc = await _graphMnmWWYf.getAdjacencyMatrix()
		const _returnValueiAEnB3c = await _graphMnmWWYf.getVerticesIndices()
		const _returnValue09BsGR = undefined;
		const _getKeyZ9twzNR = () => { return _returnValue09BsGR };
		const _newVertexlBWqiG8 = {
			"getKey": _getKeyZ9twzNR
	}
		const _returnValueFK9PiU4 = await _graphMnmWWYf.addVertex(_newVertexlBWqiG8)
		const _returnValueHPxa5zU = await _graphMnmWWYf.getWeight()
		const _returnValuer7Gj7Hd = await articulationPoints(_graphMnmWWYf)
	});
})