export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _isDirectedcbw67B3 = true;
		const _graphSoVKCGC = new Graph(_isDirectedcbw67B3)
		const _returnValuev5VRDRA = await _graphSoVKCGC.toString()
		const _returnValueudiR1ms = await graphBridges(_graphSoVKCGC)
	});

	it('test for graphBridges', async () => {
		const _isDirectedpd6Jw93 = true;
		const _graphLq8Xtzr = new Graph(_isDirectedpd6Jw93)
		const _returnValueg8AT2u3 = await _graphLq8Xtzr.getAdjacencyMatrix()
		const _returnValueZeTk9GA = 4.8146219865306445;
		const _getKeyyCz22SQ = () => { return _returnValueZeTk9GA };
		const _newVertexAJVQkoY = {
			"getKey": _getKeyyCz22SQ
	}
		const _returnValueMHFnKZe = await _graphLq8Xtzr.addVertex(_newVertexAJVQkoY)
		const _returnValueAjE30ae = await graphBridges(_graphLq8Xtzr)
	});
})