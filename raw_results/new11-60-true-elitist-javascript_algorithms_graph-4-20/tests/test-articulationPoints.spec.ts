export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuezsy6UTR = false;
		const _getAllVerticesJET0Ar7 = () => { return _returnValuezsy6UTR };
		const _graphR7NVOVj = {
			"getAllVertices": _getAllVerticesJET0Ar7
	}
		const _returnValuemJHT0E = await articulationPoints(_graphR7NVOVj)
	});

	it('test for articulationPoints', async () => {
		const _isDirected1yyzHq = true;
		const _graphDC678X7 = new Graph(_isDirected1yyzHq)
		const _returnValueBQubM2x = await _graphDC678X7.getVerticesIndices()
		const _returnValueuPqqut = null;
		const _getKeyhsn919c = () => { return _returnValueuPqqut };
		const _startVertexTiFSI5m = {
			"getKey": _getKeyhsn919c
	}
		const _endVertexNdc2QMo = undefined;
		const _returnValueY59Oh3S = await _graphDC678X7.findEdge(_startVertexTiFSI5m, _endVertexNdc2QMo)
		const _vertexKeyrdmhSJ3 = {
		
	}
		const _returnValueorEegna = await _graphDC678X7.getVertexByKey(_vertexKeyrdmhSJ3)
		const _returnValueHJ2tEfl = null;
		const _getKeyvK1Jfi = () => { return _returnValueHJ2tEfl };
		const _newVertexL5I5rAu = {
			"getKey": _getKeyvK1Jfi
	}
		const _returnValuec9HANz = await _graphDC678X7.addVertex(_newVertexL5I5rAu)
		const _returnValuejUu5mNh = await _graphDC678X7.reverse()
		const _returnValuevcPI3c = await articulationPoints(_graphDC678X7)
	});
})