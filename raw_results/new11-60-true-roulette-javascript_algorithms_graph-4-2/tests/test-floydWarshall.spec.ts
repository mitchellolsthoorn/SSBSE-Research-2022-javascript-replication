export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuef1Bfowl = false;
		const _graphuzEEhDU = () => { return _returnValuef1Bfowl };
		const _returnValuebvN8l3d = await floydWarshall(_graphuzEEhDU)
	});

	it('test for floydWarshall', async () => {
		const _returnValuerwNTbq = true;
		const _getAllVerticese5I9M8K = () => { return _returnValuerwNTbq };
		const _returnValueGc9FNkD = "bR";
		const _findEdgemcwppEr = () => { return _returnValueGc9FNkD };
		const _graphv7H6fGk = {
			"getAllVertices": _getAllVerticese5I9M8K,
		"findEdge": _findEdgemcwppEr
	}
		const _returnValueKTNlrrN = await floydWarshall(_graphv7H6fGk)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuesvJA3aF = null;
		const _isDirectedIJrNW2P = [_arrayValuesvJA3aF]
		const _graph2KL1TR = new Graph(_isDirectedIJrNW2P)
		const _returnValueOZomDPB = await _graph2KL1TR.getAllVertices()
		const _returnValuezcqFbvg = false;
		const _vertexKeyaiZTnU = () => { return _returnValuezcqFbvg };
		const _returnValuenAquygr = await _graph2KL1TR.getVertexByKey(_vertexKeyaiZTnU)
		const _returnValuekWkOLhU = await floydWarshall(_graph2KL1TR)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueKH2MB1F = null;
		const _returnValueMm8EJtZ = true;
		const _arrayValuexEfbjJz = () => { return _returnValueMm8EJtZ };
		const _arrayValuedDod19n = undefined;
		const _arrayValueIoDZqM = null;
		const _returnValueZLWgV1N = [_arrayValueKH2MB1F, _arrayValuexEfbjJz, _arrayValuedDod19n, _arrayValueIoDZqM]
		const _getAllVerticesSQNnoCd = () => { return _returnValueZLWgV1N };
		const _returnValueVyCMFTd = null;
		const _findEdgeYNvEUbE = () => { return _returnValueVyCMFTd };
		const _graphhhIjOvh = {
			"getAllVertices": _getAllVerticesSQNnoCd,
		"findEdge": _findEdgeYNvEUbE
	}
		const _returnValuekNzLz1L = await floydWarshall(_graphhhIjOvh)
	});
})