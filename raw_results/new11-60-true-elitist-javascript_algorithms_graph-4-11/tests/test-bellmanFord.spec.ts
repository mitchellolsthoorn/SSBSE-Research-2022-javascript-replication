export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValue78nfDw = "GRUbLLFQaalJFQk2UUH";
		const _getAllVerticessnaEuaR = () => { return _returnValue78nfDw };
		const _returnValuehyALXO3 = 5.043919943464195;
		const _getVertexByKeyceCKyC0 = () => { return _returnValuehyALXO3 };
		const _returnValueFABSwAF = "sSvm4y";
		const _arrayValueVZvIpbJ = () => { return _returnValueFABSwAF };
		const _arrayValueE7hxgp = false;
		const _returnValuecrLbJ5w = [_arrayValueVZvIpbJ, _arrayValueE7hxgp]
		const _getNeighborszXNWxYU = () => { return _returnValuecrLbJ5w };
		const _arrayValuevrJnCyu = {
		
	}
		const _arrayValuesOpfhV = null;
		const _arrayValueu7LjCcl = false;
		const _arrayValueXutLyA = [_arrayValuevrJnCyu, _arrayValuesOpfhV, _arrayValueu7LjCcl]
		const _returnValuehnWLY9n = [_arrayValueXutLyA]
		const _returnValueOeCmEMW = () => { return _returnValuehnWLY9n };
		const _findEdgejK0nFRP = () => { return _returnValueOeCmEMW };
		const _graphXbp5fgG = {
			"getAllVertices": _getAllVerticessnaEuaR,
		"getVertexByKey": _getVertexByKeyceCKyC0,
		"getNeighbors": _getNeighborszXNWxYU,
		"findEdge": _findEdgejK0nFRP
	}
		const _returnValuenTZdrzg = true;
		const _getKeyf5kdsdj = () => { return _returnValuenTZdrzg };
		const _startVertexc7KnbYi = {
			"getKey": _getKeyf5kdsdj
	}
		const _returnValuekIL6oHg = await bellmanFord(_graphXbp5fgG, _startVertexc7KnbYi)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedbC07LvL = false;
		const _graphcP6esm5 = new Graph(_isDirectedbC07LvL)
		const _returnValueZ3Csonj = await _graphcP6esm5.getAllVertices()
		const _returnValueKdtnD9R = await _graphcP6esm5.getAllEdges()
		const _arrayValueD6gK3CK = null;
		const _arrayValueU241sVI = true;
		const _returnValuek2rFrSK = [_arrayValueD6gK3CK, _arrayValueU241sVI]
		const _getKeyRQU5ax = () => { return _returnValuek2rFrSK };
		const _startVertexd2wAycS = {
			"getKey": _getKeyRQU5ax
	}
		const _returnValueFz9nH7X = await bellmanFord(_graphcP6esm5, _startVertexd2wAycS)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedxPoVGUe = true;
		const _graphbmy9co = new Graph(_isDirectedxPoVGUe)
		const _returnValueYbex2U0 = await _graphbmy9co.getAdjacencyMatrix()
		const _returnValuekVY4IID = undefined;
		const _getKeyowbKqUC = () => { return _returnValuekVY4IID };
		const _newVertex10vqkf = {
			"getKey": _getKeyowbKqUC
	}
		const _returnValueVyMu8sx = await _graphbmy9co.addVertex(_newVertex10vqkf)
		const _returnValuepEUh0sb = false;
		const _getKeywR1cTf = () => { return _returnValuepEUh0sb };
		const _startVertexL3vT7r7 = {
			"getKey": _getKeywR1cTf
	}
		const _returnValueI2GCp4r = await bellmanFord(_graphbmy9co, _startVertexL3vT7r7)
	});
})