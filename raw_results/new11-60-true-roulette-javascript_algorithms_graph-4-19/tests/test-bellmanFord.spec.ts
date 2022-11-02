export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueYfrxsQs = 8.53036626384116;
		const _getAllVerticeswHtnKMR = () => { return _returnValueYfrxsQs };
		const _arrayValuesYjO2yN = null;
		const _arrayValuedeAWk19 = undefined;
		const _returnValueTxQ8pYv = [_arrayValuesYjO2yN, _arrayValuedeAWk19]
		const _getVertexByKeybvUMkoR = () => { return _returnValueTxQ8pYv };
		const _returnValueoT1VD3y = "cZCI9tSQzDPrriLej8V26qf88DLN8RRIwzPkbs2aLrO4ahecL7ouRxlNyKqEecNNfByNLGgSfzUFzwKATI1gycjrqcYbDqAh";
		const _getNeighborsXpswTH = () => { return _returnValueoT1VD3y };
		const _returnValueAe9kR8T = []
		const _findEdged8FB2bM = () => { return _returnValueAe9kR8T };
		const _graphFjSouyV = {
			"getAllVertices": _getAllVerticeswHtnKMR,
		"getVertexByKey": _getVertexByKeybvUMkoR,
		"getNeighbors": _getNeighborsXpswTH,
		"findEdge": _findEdged8FB2bM
	}
		const _arrayValuetMZwpyY = -6.503687797752863;
		const _arrayValuelbmKkYy = undefined;
		const _arrayValuextHxOv = 8.821800796429585;
		const _arrayValuedmCEIk4 = [_arrayValuetMZwpyY, _arrayValuelbmKkYy, _arrayValuextHxOv]
		const _arrayValueWn8x0vc = undefined;
		const _startVertexKHBrrli = [_arrayValuedmCEIk4, _arrayValueWn8x0vc]
		const _returnValuef4KEeZm = await bellmanFord(_graphFjSouyV, _startVertexKHBrrli)
	});

	it('test for bellmanFord', async () => {
		const _returnValueFIJFg8s = undefined;
		const _getAllVerticesywgkOt = () => { return _returnValueFIJFg8s };
		const _returnValueIwLGPbC = null;
		const _getVertexByKeyI4GtzZ = () => { return _returnValueIwLGPbC };
		const _returnValueIT6hiMJ = null;
		const _getNeighborsOOGz4Km = () => { return _returnValueIT6hiMJ };
		const _returnValueb5NGEnO = -9.644526555507019;
		const _findEdgeH9WXoxJ = () => { return _returnValueb5NGEnO };
		const _graphKxTDmEl = {
			"getAllVertices": _getAllVerticesywgkOt,
		"getVertexByKey": _getVertexByKeyI4GtzZ,
		"getNeighbors": _getNeighborsOOGz4Km,
		"findEdge": _findEdgeH9WXoxJ
	}
		const _returnValuefbOPGXp = true;
		const _getKeyNZy12Qs = () => { return _returnValuefbOPGXp };
		const _startVertexA6GZeNZ = {
			"getKey": _getKeyNZy12Qs
	}
		const _returnValueSkdqTFK = await bellmanFord(_graphKxTDmEl, _startVertexA6GZeNZ)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedqqz3kCQ = true;
		const _graphZ61cGOQ = new Graph(_isDirectedqqz3kCQ)
		const _returnValueM1FKlRi = await _graphZ61cGOQ.getAllVertices()
		const _returnValueSPh8Odf = await _graphZ61cGOQ.getAllEdges()
		const _returnValueKIzVInO = undefined;
		const _getKeyS4MRmk = () => { return _returnValueKIzVInO };
		const _startVertexfZvTXx = {
			"getKey": _getKeyS4MRmk
	}
		const _returnValueyt8UODT = await bellmanFord(_graphZ61cGOQ, _startVertexfZvTXx)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedzliR4Zo = false;
		const _graphBczsqGD = new Graph(_isDirectedzliR4Zo)
		const _returnValueYVz7gN6 = undefined;
		const _vertexKeycaWOsU = () => { return _returnValueYVz7gN6 };
		const _returnValueiQIQTD = await _graphBczsqGD.getVertexByKey(_vertexKeycaWOsU)
		const _returnValueVgVAU1 = await _graphBczsqGD.getAdjacencyMatrix()
		const _returnValueTpdqPkb = await _graphBczsqGD.getWeight()
		const _returnValueehYma4Y = true;
		const _getKeyTFUr9E7 = () => { return _returnValueehYma4Y };
		const _newVertexx9nGVa = {
			"getKey": _getKeyTFUr9E7
	}
		const _returnValueb5k3YUB = await _graphBczsqGD.addVertex(_newVertexx9nGVa)
		const _returnValuevXsLgSb = await _graphBczsqGD.getWeight()
		const _returnValue4oGJP0 = "LIKwIkSGvIwJnPS4jo1U";
		const _returnValueBgw51wx = () => { return _returnValue4oGJP0 };
		const _getKeyQTEp755 = () => { return _returnValueBgw51wx };
		const _startVertexvOC0qT0 = {
			"getKey": _getKeyQTEp755
	}
		const _returnValueQ3D6ua7 = await bellmanFord(_graphBczsqGD, _startVertexvOC0qT0)
	});
})