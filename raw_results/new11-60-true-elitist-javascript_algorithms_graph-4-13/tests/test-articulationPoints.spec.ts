export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuenYacQDC = false;
		const _getAllVerticesXpudDHY = () => { return _returnValuenYacQDC };
		const _graphvphU9Ob = {
			"getAllVertices": _getAllVerticesXpudDHY
	}
		const _returnValuepZpspMY = await articulationPoints(_graphvphU9Ob)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedhl7x8kp = true;
		const _graphJyWBC4 = new Graph(_isDirectedhl7x8kp)
		const _returnValuek3wMR3V = null;
		const _getKeypBGjNdV = () => { return _returnValuek3wMR3V };
		const _newVertexH0PNTGz = {
			"getKey": _getKeypBGjNdV
	}
		const _returnValueRbqTtGt = await _graphJyWBC4.addVertex(_newVertexH0PNTGz)
		const _returnValueDoKfGBC = await articulationPoints(_graphJyWBC4)
	});
})