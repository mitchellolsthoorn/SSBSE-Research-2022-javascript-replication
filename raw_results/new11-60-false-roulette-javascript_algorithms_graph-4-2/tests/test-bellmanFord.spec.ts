export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuePwH2wpR = undefined;
		const _returnValueVcH0Ptb = () => { return _returnValuePwH2wpR };
		const _returnValueaReiRhP = () => { return _returnValueVcH0Ptb };
		const _getAllVerticesZJf5wYM = () => { return _returnValueaReiRhP };
		const _returnValueOavYVh6 = -6.3568322725782584;
		const _getVertexByKeyM1ZIpr4 = () => { return _returnValueOavYVh6 };
		const _getNeighborsPJdql6t = null;
		const _returnValuetnivUuJ = undefined;
		const _findEdgefzbQsoU = () => { return _returnValuetnivUuJ };
		const _graphw1UTcrh = {
			"getAllVertices": _getAllVerticesZJf5wYM,
		"getVertexByKey": _getVertexByKeyM1ZIpr4,
		"getNeighbors": _getNeighborsPJdql6t,
		"findEdge": _findEdgefzbQsoU
	}
		const _arrayValuedM03pBI = undefined;
		const _startVertexw34OKku = [_arrayValuedM03pBI]
		const _returnValuea5WSMyF = await bellmanFord(_graphw1UTcrh, _startVertexw34OKku)
	});

	it('test for bellmanFord', async () => {
		const _returnValueO4D1Ibc = undefined;
		const _graphtoKIB8j = () => { return _returnValueO4D1Ibc };
		const _arrayValueHumN5KJ = false;
		const _arrayValueXyjBgj = false;
		const _returnValueAP4CusY = [_arrayValueHumN5KJ, _arrayValueXyjBgj]
		const _getKeyaQIniUk = () => { return _returnValueAP4CusY };
		const _startVertexHAPzuHI = {
			"getKey": _getKeyaQIniUk
	}
		const _returnValueF0IJ1RR = await bellmanFord(_graphtoKIB8j, _startVertexHAPzuHI)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedZ5bmDTK = false;
		const _graphZYy9gO9 = new Graph(_isDirectedZ5bmDTK)
		const _returnValueqMJqJ1 = await _graphZYy9gO9.getAdjacencyMatrix()
		const _returnValuell6235a = await _graphZYy9gO9.getAllEdges()
		const _returnValuezn8VFhr = await _graphZYy9gO9.getVerticesIndices()
		const _returnValueL7N9hb2 = false;
		const _getKeyZjnpCj = () => { return _returnValueL7N9hb2 };
		const _startVertexOBKomQK = {
			"getKey": _getKeyZjnpCj
	}
		const _returnValueTIWnaNJ = await bellmanFord(_graphZYy9gO9, _startVertexOBKomQK)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedfFfC4oc = false;
		const _graphw7eXJ7X = new Graph(_isDirectedfFfC4oc)
		const _returnValueQxNGTW = false;
		const _getKeyhKwBe2t = () => { return _returnValueQxNGTW };
		const _newVertexNyPGLp0 = {
			"getKey": _getKeyhKwBe2t
	}
		const _returnValueBsl0vY = await _graphw7eXJ7X.addVertex(_newVertexNyPGLp0)
		const _returnValueZPerPL4 = await _graphw7eXJ7X.getVerticesIndices()
		const _returnValueSyVMXO7 = -8.444122938324416;
		const _getKeygwD8ZK7 = () => { return _returnValueSyVMXO7 };
		const _startVertexyTEEzj4 = {
			"getKey": _getKeygwD8ZK7
	}
		const _returnValuezoIwxu = await bellmanFord(_graphw7eXJ7X, _startVertexyTEEzj4)
	});
})