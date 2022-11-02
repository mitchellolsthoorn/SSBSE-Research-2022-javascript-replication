export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueY0PCrU5 = 4.593163433164452;
		const _getAllVerticesBGf8My = () => { return _returnValueY0PCrU5 };
		const _graphLqW277n = {
			"getAllVertices": _getAllVerticesBGf8My
	}
		const _returnValuenokUzEG = await articulationPoints(_graphLqW277n)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedDbNXtbl = true;
		const _graphASv4mUj = new Graph(_isDirectedDbNXtbl)
		const _returnValuenqhwEh = await _graphASv4mUj.toString()
		const _returnValueDSktJSG = "vQPHFrjp8VexEQUpzODr";
		const _getKeyTqdATLU = () => { return _returnValueDSktJSG };
		const _newVertexubzBxx3 = {
			"getKey": _getKeyTqdATLU
	}
		const _returnValuedln1lU6 = await _graphASv4mUj.addVertex(_newVertexubzBxx3)
		const _vertexKeyvszGGNp = undefined;
		const _returnValueLk7Pn3n = await _graphASv4mUj.getVertexByKey(_vertexKeyvszGGNp)
		const _returnValuefHW6Q0 = undefined;
		const _getKeyJ49iJ40 = () => { return _returnValuefHW6Q0 };
		const _startVertexcI5U2Th = {
			"getKey": _getKeyJ49iJ40
	}
		const _endVertexp1XIAeu = "Uhba7pxPq6IgQH53Mco6";
		const _returnValuer9p3aZ = await _graphASv4mUj.findEdge(_startVertexcI5U2Th, _endVertexp1XIAeu)
		const _returnValueoidIQKg = await articulationPoints(_graphASv4mUj)
	});
})