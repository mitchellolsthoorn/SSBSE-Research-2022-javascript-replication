export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _getAllVerticesPxinVtt = 9.88139795251422;
		const _arrayValueLcNj3j = true;
		const _arrayValueSKsv9CW = null;
		const _arrayValueAH0Bbi = undefined;
		const _arrayValueDJyCHn = -8.446356520881135;
		const _arrayValuejQJfxjA = "KMrpAUJu5VIM";
		const _arrayValueFGbq6sX = [_arrayValuejQJfxjA]
		const _arrayValueD1mzYeK = 6.042951061349669;
		const _arrayValue78QT2X = "6YN2XlsbWX1scne2kso40Lg2SR3XQDkKtEXWKFPR3i";
		const _arrayValueyr9RlEV = [_arrayValueFGbq6sX, _arrayValueD1mzYeK, _arrayValue78QT2X]
		const _arrayValueFe5dPAy = [_arrayValueDJyCHn, _arrayValueyr9RlEV]
		const _returnValueHpRwrZm = [_arrayValueLcNj3j, _arrayValueSKsv9CW, _arrayValueAH0Bbi, _arrayValueFe5dPAy]
		const _getVertexByKeybsRJKX0 = () => { return _returnValueHpRwrZm };
		const _returnValueFpxMSZc = "YQr6T";
		const _getNeighborsx2tLwii = () => { return _returnValueFpxMSZc };
		const _returnValueo0yYwVI = 7.595967413209166;
		const _findEdgeDTN2p3c = () => { return _returnValueo0yYwVI };
		const _graphmMS0GD = {
			"getAllVertices": _getAllVerticesPxinVtt,
		"getVertexByKey": _getVertexByKeybsRJKX0,
		"getNeighbors": _getNeighborsx2tLwii,
		"findEdge": _findEdgeDTN2p3c
	}
		const _startVertexZvg7Vhk = null;
		const _returnValuer5P9p4Q = await bellmanFord(_graphmMS0GD, _startVertexZvg7Vhk)
	});

	it('test for bellmanFord', async () => {
		const _returnValueFH5c936 = {
		
	}
		const _returnValueOzsuO6 = () => { return _returnValueFH5c936 };
		const _getAllVerticescxRRtno = () => { return _returnValueOzsuO6 };
		const _returnValueknGpvx = false;
		const _getVertexByKeyA8AmhCY = () => { return _returnValueknGpvx };
		const _returnValuesUru6a0 = "L8SDttFtQOGRNahAk6ytxDbb1Y1oq2p5PIhZObz1gcpunHjEuU9QwpryFK";
		const _getNeighborsBhhy8j = () => { return _returnValuesUru6a0 };
		const _arrayValuexYuKQgH = true;
		const _arrayValueRjh7uLF = "bcajIMsPowWjbgqjyBjNNf7eemj5CmDH";
		const _findEdgedv9kIUk = [_arrayValuexYuKQgH, _arrayValueRjh7uLF]
		const _graphQ2ktH5M = {
			"getAllVertices": _getAllVerticescxRRtno,
		"getVertexByKey": _getVertexByKeyA8AmhCY,
		"getNeighbors": _getNeighborsBhhy8j,
		"findEdge": _findEdgedv9kIUk
	}
		const _arrayValueRwkjn7 = {
		
	}
		const _arrayValuejfB7zi = null;
		const _returnValueCQYSoJM = [_arrayValueRwkjn7, _arrayValuejfB7zi]
		const _returnValuenaMctY = () => { return _returnValueCQYSoJM };
		const _getKeyxjpgqPQ = () => { return _returnValuenaMctY };
		const _startVertexOvRQjeW = {
			"getKey": _getKeyxjpgqPQ
	}
		const _returnValueRpdFxXN = await bellmanFord(_graphQ2ktH5M, _startVertexOvRQjeW)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedbITXLVA = "MvIKhtNJRqHgWCshPJ4HmT7osBhrdoeDzkzH0lcNfEfJtaiR9Pk0fN8UxYfwtqmTf";
		const _graphTQ7uaVc = new Graph(_isDirectedbITXLVA)
		const _returnValueITAvDMe = await _graphTQ7uaVc.getVerticesIndices()
		const _returnValuePY89iDT = await _graphTQ7uaVc.toString()
		const _returnValuexBErq7L = null;
		const _getKeyOuzeVLF = () => { return _returnValuexBErq7L };
		const _startVertexmQQrAo = {
			"getKey": _getKeyOuzeVLF
	}
		const _returnValueqpgvtd = await bellmanFord(_graphTQ7uaVc, _startVertexmQQrAo)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedIJLTZJ = true;
		const _graphzzHa5GO = new Graph(_isDirectedIJLTZJ)
		const _returnValueBy5NLd0 = await _graphzzHa5GO.getAdjacencyMatrix()
		const _returnValueubFoex1 = await _graphzzHa5GO.getWeight()
		const _returnValueIezT4vL = "JyyIbvOFzt196";
		const _getKeyKzaVzT3 = () => { return _returnValueIezT4vL };
		const _newVertexIYGl1p2 = {
			"getKey": _getKeyKzaVzT3
	}
		const _returnValuery89ilw = await _graphzzHa5GO.addVertex(_newVertexIYGl1p2)
		const _returnValueBrZMZb = null;
		const _getKeyretMugW = () => { return _returnValueBrZMZb };
		const _startVertexH20x3RT = {
			"getKey": _getKeyretMugW
	}
		const _returnValueCIj84S = await bellmanFord(_graphzzHa5GO, _startVertexH20x3RT)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedCW0be7F = true;
		const _graphSpbPyWq = new Graph(_isDirectedCW0be7F)
		const _returnValueCopCDon = await _graphSpbPyWq.getAdjacencyMatrix()
		const _returnValuenDgqNUG = 8.111893556616433;
		const _getKeyAfkWVN = () => { return _returnValuenDgqNUG };
		const _newVertexBET8IkR = {
			"getKey": _getKeyAfkWVN
	}
		const _returnValuex7LDTa = await _graphSpbPyWq.addVertex(_newVertexBET8IkR)
		const _returnValueC33vQ7 = await _graphSpbPyWq.reverse()
		const _returnValuezO2RIX0 = "WjRNtj2uht4Yc8zbBxGm4nobv98ttXKFzmOuibxLwxaJGXRrR5cTwQsXpfoPa3wpuw7kT6qKZYYaloAe1";
		const _getKeytJwRTx8 = () => { return _returnValuezO2RIX0 };
		const _newVertexYEJlAec = {
			"getKey": _getKeytJwRTx8
	}
		const _returnValuebvdFbG5 = await _graphSpbPyWq.addVertex(_newVertexYEJlAec)
		const _returnValuec7TYZX = await _graphSpbPyWq.getAllEdges()
		const _returnValuelYwqVCx = 4.086012640047894;
		const _getKeyx7FznM1 = () => { return _returnValuelYwqVCx };
		const _startVertexyA0d1Z = {
			"getKey": _getKeyx7FznM1
	}
		const _returnValueZsH5Qlb = await bellmanFord(_graphSpbPyWq, _startVertexyA0d1Z)
	});
})