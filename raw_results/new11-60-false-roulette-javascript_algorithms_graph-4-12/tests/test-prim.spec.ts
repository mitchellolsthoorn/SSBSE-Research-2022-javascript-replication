export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphJS22RY2 = null;
		const _returnValueAjqH2EL = await prim(_graphJS22RY2)
	});

	it('test for prim', async () => {
		const _isDirecteduTbPu88 = "zokrHR8rs8b1yo3";
		const _returnValuePjM3FP = "LRJAkvRhoqfySPxoyjstj3EP8c3OTtfUUHppdzRwG3Xp9lyzb4fd6ADy4TUKcgQAK0NDzP89VYiO2gYb8J8kB33r9mDFEWkRL";
		const _getAllVerticesWPC8SFP = () => { return _returnValuePjM3FP };
		const _graphiDwY97D = {
			"isDirected": _isDirecteduTbPu88,
		"getAllVertices": _getAllVerticesWPC8SFP
	}
		const _returnValueN9s8qHE = await prim(_graphiDwY97D)
	});

	it('test for prim', async () => {
		const _isDirectedMQvcxc = false;
		const _graphTkz0pBf = new Graph(_isDirectedMQvcxc)
		const _vertexKeyzcNe9hY = null;
		const _returnValueD481FMx = await _graphTkz0pBf.getVertexByKey(_vertexKeyzcNe9hY)
		const _arrayValueLC3ZcTp = null;
		const _arrayValuev4V00HW = null;
		const _arrayValueBvNC4Ih = [_arrayValueLC3ZcTp, _arrayValuev4V00HW]
		const _arrayValueSBF5IbW = true;
		const _arrayValueQq55t5L = true;
		const _arrayValuePKW71w = false;
		const _returnValueOG28Zds = [_arrayValueBvNC4Ih, _arrayValueSBF5IbW, _arrayValueQq55t5L, _arrayValuePKW71w]
		const _getKeyk6hBx06 = () => { return _returnValueOG28Zds };
		const _newVertexVM3mICZ = {
			"getKey": _getKeyk6hBx06
	}
		const _returnValueFpf4WE = await _graphTkz0pBf.addVertex(_newVertexVM3mICZ)
		const _returnValueh5GhCy = await _graphTkz0pBf.getAllEdges()
		const _returnValueoOI2zpA = await _graphTkz0pBf.toString()
		const _returnValuefOLpyWl = await prim(_graphTkz0pBf)
	});
})