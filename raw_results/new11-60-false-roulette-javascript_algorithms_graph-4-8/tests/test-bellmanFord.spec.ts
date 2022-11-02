export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueft5JfSS = []
		const _getAllVerticeslpldaoN = () => { return _returnValueft5JfSS };
		const _returnValuecLq0jyz = undefined;
		const _getVertexByKeygysVpNn = () => { return _returnValuecLq0jyz };
		const _returnValueiqoU2jF = "kkp834B4vqJUiOvjdwJ3ADz4XRGC0zIqWkp5ODbWgnHH7MoWiybLHw6BRCxAVbzgSRtQqlDwfA3kfd9BkuVe5uKUr7Rgtw";
		const _getNeighborsN32EFFH = () => { return _returnValueiqoU2jF };
		const _returnValueZVPXZZa = {
		
	}
		const _returnValuePM7GH8x = () => { return _returnValueZVPXZZa };
		const _findEdgeV4vWHHa = () => { return _returnValuePM7GH8x };
		const _grapheTsbmw6 = {
			"getAllVertices": _getAllVerticeslpldaoN,
		"getVertexByKey": _getVertexByKeygysVpNn,
		"getNeighbors": _getNeighborsN32EFFH,
		"findEdge": _findEdgeV4vWHHa
	}
		const _startVertexlUSU1Pf = "YRG5bLyuqPoK6M5nSIXzAV4SXmVojmwBtr9LUIv1BsIgTOLQ321tbFi6zBf7PaER4gfUAvB";
		const _returnValueJeZTsDd = await bellmanFord(_grapheTsbmw6, _startVertexlUSU1Pf)
	});

	it('test for bellmanFord', async () => {
		const _returnValueAHR5C9 = -4.848710058445413;
		const _getAllVerticesvk1nS2C = () => { return _returnValueAHR5C9 };
		const _returnValueZfzUu6g = []
		const _getVertexByKeyFgFwSmC = () => { return _returnValueZfzUu6g };
		const _returnValuePlgBweV = false;
		const _getNeighborsi77xeBT = () => { return _returnValuePlgBweV };
		const _returnValuel0qWNsG = "LYSYxC65GJwQcF93Tz6alvpS";
		const _findEdgeyYfRGaC = () => { return _returnValuel0qWNsG };
		const _graphDY09O9p = {
			"getAllVertices": _getAllVerticesvk1nS2C,
		"getVertexByKey": _getVertexByKeyFgFwSmC,
		"getNeighbors": _getNeighborsi77xeBT,
		"findEdge": _findEdgeyYfRGaC
	}
		const _returnValuejgSgH4B = -2.970660263275043;
		const _getKeyENomx4 = () => { return _returnValuejgSgH4B };
		const _startVertexmb5I72 = {
			"getKey": _getKeyENomx4
	}
		const _returnValuehDePLO3 = await bellmanFord(_graphDY09O9p, _startVertexmb5I72)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedLX0dcnl = true;
		const _graphdzKKvnP = new Graph(_isDirectedLX0dcnl)
		const _returnValueVfn9QGy = await _graphdzKKvnP.getAllEdges()
		const _returnValuew3WrWGX = await _graphdzKKvnP.reverse()
		const _returnValueXZdBRAh = []
		const _getKeyOUdO3OZ = () => { return _returnValueXZdBRAh };
		const _startVertexfj26uj = {
			"getKey": _getKeyOUdO3OZ
	}
		const _endVertexrOBsYz2 = true;
		const _returnValueYUsTgSN = await _graphdzKKvnP.findEdge(_startVertexfj26uj, _endVertexrOBsYz2)
		const _returnValuerFQGYOZ = undefined;
		const _getKeyBDz6HwW = () => { return _returnValuerFQGYOZ };
		const _startVertexJUUnX8d = {
			"getKey": _getKeyBDz6HwW
	}
		const _returnValuei1O4NaL = await bellmanFord(_graphdzKKvnP, _startVertexJUUnX8d)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedp1KCMt = true;
		const _graphwBPQoeo = new Graph(_isDirectedp1KCMt)
		const _returnValueEfAO2Es = await _graphwBPQoeo.toString()
		const _valueDrJ1eBZ = false;
		const _returnValuew2yUng4 = true;
		const _keyCallbackBepFWSX = () => { return _returnValuew2yUng4 };
		const _newVertextusTP3h = new DisjointSetItem(_valueDrJ1eBZ, _keyCallbackBepFWSX)
		const _returnValueWLFxkgO = await _newVertextusTP3h.getRank()
		const _returnValueaoZZka = await _newVertextusTP3h.isRoot()
		const _returnValueKAABA7S = await _newVertextusTP3h.getRank()
		const _returnValueBNWlU54 = await _graphwBPQoeo.addVertex(_newVertextusTP3h)
		const _returnValueq7Wi40f = undefined;
		const _getKeyNaXIAv = () => { return _returnValueq7Wi40f };
		const _startVertexB5XgBNj = {
			"getKey": _getKeyNaXIAv
	}
		const _returnValueEoRmITr = await bellmanFord(_graphwBPQoeo, _startVertexB5XgBNj)
	});
})