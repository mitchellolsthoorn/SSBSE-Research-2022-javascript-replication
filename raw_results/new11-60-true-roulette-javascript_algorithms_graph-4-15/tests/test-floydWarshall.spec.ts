export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValueAgou5Ei = null;
		const _graphDSugskC = [_arrayValueAgou5Ei]
		const _returnValuetLtpvOG = await floydWarshall(_graphDSugskC)
	});

	it('test for floydWarshall', async () => {
		const _returnValueitsFb2 = null;
		const _getAllVerticesFsdFnoy = () => { return _returnValueitsFb2 };
		const _returnValueN0GHHB7 = false;
		const _findEdgebbLXSPN = () => { return _returnValueN0GHHB7 };
		const _graphbR1CjPm = {
			"getAllVertices": _getAllVerticesFsdFnoy,
		"findEdge": _findEdgebbLXSPN
	}
		const _returnValueqpXSOJI = await floydWarshall(_graphbR1CjPm)
	});

	it('test for floydWarshall', async () => {
		const _returnValueR7LGrHB = "yyT6FDaUVqt2B9IuUa8tGZodSJoHs71Ef8goydOwIgsHXN";
		const _getAllVerticesM0PmWhJ = () => { return _returnValueR7LGrHB };
		const _returnValueW3egvam = "1wmwLl8zuoKv6hf1JsoaWlJEQaEzTyoSw1wCwZBgu7XxBOiiYUwnt2Mlat";
		const _findEdgedtINB5K = () => { return _returnValueW3egvam };
		const _graphfWVgoxL = {
			"getAllVertices": _getAllVerticesM0PmWhJ,
		"findEdge": _findEdgedtINB5K
	}
		const _returnValueSO6cRPD = await floydWarshall(_graphfWVgoxL)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedMFIs5JJ = false;
		const _grapht9GBms = new Graph(_isDirectedMFIs5JJ)
		const _returnValueW0hxRmy = await _grapht9GBms.getAdjacencyMatrix()
		const _returnValuevtAUsA = await _grapht9GBms.reverse()
		const _returnValueOybDpjx = "gtLl6tiHLBreEdL18uj244zkSmliIMnyNMhod9ur";
		const _getNeighborsqyM9qk8 = () => { return _returnValueOybDpjx };
		const _vertexWhOXLbD = {
			"getNeighbors": _getNeighborsqyM9qk8
	}
		const _returnValueNNdiM6s = await _grapht9GBms.getNeighbors(_vertexWhOXLbD)
		const _returnValuee9HiVwO = await _grapht9GBms.getAllVertices()
		const _returnValueYeOGQTm = await floydWarshall(_grapht9GBms)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuew2hr7IU = undefined;
		const _arrayValueNpcqRzs = false;
		const _returnValuemRRLQK0 = [_arrayValuew2hr7IU, _arrayValueNpcqRzs]
		const _getAllVerticesNLjSp4 = () => { return _returnValuemRRLQK0 };
		const _returnValuej8aYr9 = undefined;
		const _findEdgetjjZwDS = () => { return _returnValuej8aYr9 };
		const _grapheEZ0A8m = {
			"getAllVertices": _getAllVerticesNLjSp4,
		"findEdge": _findEdgetjjZwDS
	}
		const _returnValuenglCT8L = await floydWarshall(_grapheEZ0A8m)
	});
})