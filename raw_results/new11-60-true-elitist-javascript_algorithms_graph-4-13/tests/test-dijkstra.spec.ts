export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueFw2DWeF = -6.978082497710238;
		const _getAllVerticeseLS7LVb = () => { return _returnValueFw2DWeF };
		const _returnValueFXFYXz = 5.490185707931756;
		const _findEdgei43ZxIz = () => { return _returnValueFXFYXz };
		const _graphlbvphv3 = {
			"getAllVertices": _getAllVerticeseLS7LVb,
		"findEdge": _findEdgei43ZxIz
	}
		const _returnValueLsuhmH = -2.0363098095426126;
		const _getKeyKB6WALE = () => { return _returnValueLsuhmH };
		const _startVertexl7odrrq = {
			"getKey": _getKeyKB6WALE
	}
		const _returnValuedoQ0MwU = await dijkstra(_graphlbvphv3, _startVertexl7odrrq)
	});

	it('test for dijkstra', async () => {
		const _returnValueVh8WOHr = []
		const _getAllVerticesyYYmxfa = () => { return _returnValueVh8WOHr };
		const _findEdgeXzbu5cR = -7.641035768136823;
		const _graphjpm09nA = {
			"getAllVertices": _getAllVerticesyYYmxfa,
		"findEdge": _findEdgeXzbu5cR
	}
		const _returnValuevEj7h7G = "2TMfKGCPL3gQxuoHTWlN4RQgs8b";
		const _getKey4XRcXp = () => { return _returnValuevEj7h7G };
		const _startVertexAeJvg4l = {
			"getKey": _getKey4XRcXp
	}
		const _returnValuefYPk8ee = await dijkstra(_graphjpm09nA, _startVertexAeJvg4l)
	});

	it('test for dijkstra', async () => {
		const _isDirectedfHtP9y3 = true;
		const _graphRjQlctk = new Graph(_isDirectedfHtP9y3)
		const _returnValuennKOasR = []
		const _getKeyuDv5ZbX = () => { return _returnValuennKOasR };
		const _startVertexVujdHM = {
			"getKey": _getKeyuDv5ZbX
	}
		const _endVertexCWPj2c9 = 0.9815209788148955;
		const _returnValueQRv8DVC = await _graphRjQlctk.findEdge(_startVertexVujdHM, _endVertexCWPj2c9)
		const _arrayValueuTA6IdB = null;
		const _arrayValueR1RRYEj = "qA84rRzXWnJlwl17QYa1wiWuEKWTCCJNaUCHg1mcyLDYfFe";
		const _arrayValueu8CkAf = null;
		const _valueMcqxk0F = [_arrayValueuTA6IdB, _arrayValueR1RRYEj, _arrayValueu8CkAf]
		const _startVertexyL3Gu4z = new GraphVertex(_valueMcqxk0F)
		const _returnValueDW9RCCj = await _startVertexyL3Gu4z.getNeighbors()
		const _returnValueyDx8cHU = await _startVertexyL3Gu4z.getNeighbors()
		const _returnValueKOD3Zlf = await _startVertexyL3Gu4z.getEdges()
		const _returnValuedHUMIdl = await _startVertexyL3Gu4z.getEdges()
		const _edgeF11pcKO = undefined;
		const _returnValueNkHP9NL = await _startVertexyL3Gu4z.deleteEdge(_edgeF11pcKO)
		const _returnValueQjr2ax9 = await dijkstra(_graphRjQlctk, _startVertexyL3Gu4z)
	});
})