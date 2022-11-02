export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphjLfHHNb = null;
		const _returnValueyKnYcRQ = await bfTravellingSalesman(_graphjLfHHNb)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueShWMFxR = true;
		const _getAllVerticesKtemfA = () => { return _returnValueShWMFxR };
		const _returnValueVQMAcox = true;
		const _getAdjacencyMatrixXh1aoob = () => { return _returnValueVQMAcox };
		const _returnValueI2mHvel = undefined;
		const _getVerticesIndicesiONqete = () => { return _returnValueI2mHvel };
		const _graphdpWMQoh = {
			"getAllVertices": _getAllVerticesKtemfA,
		"getAdjacencyMatrix": _getAdjacencyMatrixXh1aoob,
		"getVerticesIndices": _getVerticesIndicesiONqete
	}
		const _returnValuesOwfx1k = await bfTravellingSalesman(_graphdpWMQoh)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedgbt3lX9 = false;
		const _graphquiqulc = new Graph(_isDirectedgbt3lX9)
		const _valueYK1xM2m = "okGzhSHA1VYzIhTbl7fhU3BS6";
		const _newVertextcOasdz = new GraphVertex(_valueYK1xM2m)
		const _returnValueieQ8QV = await _newVertextcOasdz.getDegree()
		const _requiredEdgelDQgis = true;
		const _returnValueI2K4IFO = await _newVertextcOasdz.hasEdge(_requiredEdgelDQgis)
		const _returnValuejer2awI = {
		
	}
		const _callbackWJ3KvLP = () => { return _returnValuejer2awI };
		const _returnValueSh0Bhog = await _newVertextcOasdz.toString(_callbackWJ3KvLP)
		const _returnValueLfkWvx3 = await _graphquiqulc.addVertex(_newVertextcOasdz)
		const _vertexKeyFACqZPI = null;
		const _returnValueT1Ou4E6 = await _graphquiqulc.getVertexByKey(_vertexKeyFACqZPI)
		const _arrayValuel0Ynpaa = -8.73544363272375;
		const _arrayValueDtClcTo = true;
		const _arrayValueVYkJRW3 = {
		
	}
		const _vertexKeyWuh7QSR = [_arrayValuel0Ynpaa, _arrayValueDtClcTo, _arrayValueVYkJRW3]
		const _returnValueGH7Wybc = await _graphquiqulc.getVertexByKey(_vertexKeyWuh7QSR)
		const _returnValueeHtlPuN = await _graphquiqulc.reverse()
		const _returnValuektZGbHl = await bfTravellingSalesman(_graphquiqulc)
	});
})