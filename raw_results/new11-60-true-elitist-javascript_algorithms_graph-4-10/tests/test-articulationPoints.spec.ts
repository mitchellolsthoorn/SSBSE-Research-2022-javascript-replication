export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuearLLYIs = {
		
	}
		const _getAllVerticesbh1XzdU = () => { return _returnValuearLLYIs };
		const _graphMvDGxmA = {
			"getAllVertices": _getAllVerticesbh1XzdU
	}
		const _returnValueaJGd4vA = await articulationPoints(_graphMvDGxmA)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedaWqlYJr = {
		
	}
		const _graphEjGQX6s = new Graph(_isDirectedaWqlYJr)
		const _returnValueVqXVAO5 = "zK1mx";
		const _getKeyV0y5S1o = () => { return _returnValueVqXVAO5 };
		const _newVertexokeM1sF = {
			"getKey": _getKeyV0y5S1o
	}
		const _returnValuejjACQRK = await _graphEjGQX6s.addVertex(_newVertexokeM1sF)
		const _returnValueLCziIs9 = await articulationPoints(_graphEjGQX6s)
	});
})