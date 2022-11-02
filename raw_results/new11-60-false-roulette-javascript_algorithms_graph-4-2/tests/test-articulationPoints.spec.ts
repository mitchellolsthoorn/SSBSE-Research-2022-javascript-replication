export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuehldvKT = {
		
	}
		const _getAllVerticesxpopAAE = () => { return _returnValuehldvKT };
		const _graphgIn6Xcs = {
			"getAllVertices": _getAllVerticesxpopAAE
	}
		const _returnValuee9eULHT = await articulationPoints(_graphgIn6Xcs)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedNae0BjJ = false;
		const _graphQEJ0iu9 = new Graph(_isDirectedNae0BjJ)
		const _returnValueamXTBRG = await _graphQEJ0iu9.getAdjacencyMatrix()
		const _returnValueM413xT3 = await _graphQEJ0iu9.reverse()
		const _returnValueScUCAQf = false;
		const _getKeyxPATDds = () => { return _returnValueScUCAQf };
		const _newVertexXrVAGCi = {
			"getKey": _getKeyxPATDds
	}
		const _returnValueECYieP = await _graphQEJ0iu9.addVertex(_newVertexXrVAGCi)
		const _returnValueYxEU1Op = await articulationPoints(_graphQEJ0iu9)
	});
})