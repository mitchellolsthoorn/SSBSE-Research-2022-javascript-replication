export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueyL5Jc0 = "ynDE1DovLIX3u9p8eW4h3x7fDfiDQpVPEyjM7B9rzi1U4eDkK";
		const _getAllVerticesMeDS61 = () => { return _returnValueyL5Jc0 };
		const _arrayValueXoHfAXn = true;
		const _arrayValueEjHLNLZ = undefined;
		const _arrayValuet7gkwj = [_arrayValueXoHfAXn, _arrayValueEjHLNLZ]
		const _getAdjacencyMatrixBA8tRmM = [_arrayValuet7gkwj]
		const _returnValueGydDaCh = false;
		const _getVerticesIndicesAsqvua = () => { return _returnValueGydDaCh };
		const _graphn5nYiJW = {
			"getAllVertices": _getAllVerticesMeDS61,
		"getAdjacencyMatrix": _getAdjacencyMatrixBA8tRmM,
		"getVerticesIndices": _getVerticesIndicesAsqvua
	}
		const _returnValueDXVnObl = await bfTravellingSalesman(_graphn5nYiJW)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedh9S9CUN = true;
		const _graphWVbrzaH = new Graph(_isDirectedh9S9CUN)
		const _returnValueYk2UtpU = await _graphWVbrzaH.getAllVertices()
		const _valueya5xBju = -4.502523641156962;
		const _returnValuesa7WOPx = 1.5365631362363263;
		const _keyCallbackTzYn7cI = () => { return _returnValuesa7WOPx };
		const _newVertexGGH5B7I = new DisjointSetItem(_valueya5xBju, _keyCallbackTzYn7cI)
		const _returnValueIRgqrWm = await _newVertexGGH5B7I.getRoot()
		const _returnValueDY2SVXW = await _graphWVbrzaH.addVertex(_newVertexGGH5B7I)
		const _returnValueJlXHAKw = await _graphWVbrzaH.getAllVertices()
		const _returnValuet0GBg4m = await bfTravellingSalesman(_graphWVbrzaH)
	});
})