export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueBXYpn9g = true;
		const _getAllVerticesAi1Ol6 = () => { return _returnValueBXYpn9g };
		const _graphBYNlB4Z = {
			"getAllVertices": _getAllVerticesAi1Ol6
	}
		const _returnValuek3Tg8ZF = await articulationPoints(_graphBYNlB4Z)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedKT9GnXU = false;
		const _graphvIZ5qet = new Graph(_isDirectedKT9GnXU)
		const _returnValuevsaHq34 = await _graphvIZ5qet.getWeight()
		const _returnValueaYIF0h9 = {
		
	}
		const _getKeyJvuoSO8 = () => { return _returnValueaYIF0h9 };
		const _newVertexKQEBF6u = {
			"getKey": _getKeyJvuoSO8
	}
		const _returnValueNbATbb4 = await _graphvIZ5qet.addVertex(_newVertexKQEBF6u)
		const _returnValueHYdT1RG = await _graphvIZ5qet.reverse()
		const _returnValueQ7XbgJl = await _graphvIZ5qet.reverse()
		const _returnValuefxAQYW6 = await articulationPoints(_graphvIZ5qet)
	});
})