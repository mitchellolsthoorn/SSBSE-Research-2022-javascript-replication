export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _isDirectedM2p03cQ = true;
		const _graphJn4EeNc = new Graph(_isDirectedM2p03cQ)
		const _returnValueeS4K9YH = await _graphJn4EeNc.toString()
		const _returnValuezwwsxmJ = await _graphJn4EeNc.getAllEdges()
		const _returnValuefioNf8x = await _graphJn4EeNc.toString()
		const _returnValuewUbDXIz = await graphBridges(_graphJn4EeNc)
	});

	it('test for graphBridges', async () => {
		const _isDirectedn989Fah = undefined;
		const _graphkCwmmBC = new Graph(_isDirectedn989Fah)
		const _returnValuevcs79t = await _graphkCwmmBC.getVerticesIndices()
		const _returnValuex8Xgrw5 = await _graphkCwmmBC.getAllVertices()
		const _returnValuepQf02ZV = await _graphkCwmmBC.reverse()
		const _returnValueD8pMoPE = -7.93968310203838;
		const _getKeyJU8fX2c = () => { return _returnValueD8pMoPE };
		const _newVertexv18kKw0 = {
			"getKey": _getKeyJU8fX2c
	}
		const _returnValueT55L8yN = await _graphkCwmmBC.addVertex(_newVertexv18kKw0)
		const _returnValueCjg3AiW = await graphBridges(_graphkCwmmBC)
	});
})