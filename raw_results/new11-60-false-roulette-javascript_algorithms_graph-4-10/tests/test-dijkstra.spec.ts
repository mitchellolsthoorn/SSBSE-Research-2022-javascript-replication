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
		const _graphT13BTFp = "UJdwylrIAhj4AJHmhRS3YfRYRYd1NG8VgrR1NfVPCPpMAaD6vkjF837IITwP5FVFc";
		const _arrayValueZHG58X = undefined;
		const _arrayValueHDUCCA8 = "L5HQ0VdTLhLJVQsHGsftwamWS4I1AXymb4R";
		const _arrayValueNzxwkKb = "S6MQJJXTQycCdNKAnwmj8g1eIC5MdtiSaeuwfXpfzKeqVLSozpBsBtadOvLxaUgb91nIllfzwa7Cp";
		const _arrayValuemUXlMbc = [_arrayValueZHG58X, _arrayValueHDUCCA8, _arrayValueNzxwkKb]
		const _arrayValueNJ4JSJ0 = true;
		const _arrayValuedW4ZRge = undefined;
		const _arrayValueQLFsCPS = null;
		const _returnValuedPV0Kxk = [_arrayValuemUXlMbc, _arrayValueNJ4JSJ0, _arrayValuedW4ZRge, _arrayValueQLFsCPS]
		const _getKeyT7igZlN = () => { return _returnValuedPV0Kxk };
		const _startVertexA8OxCF = {
			"getKey": _getKeyT7igZlN
	}
		const _returnValuecWrfLft = await dijkstra(_graphT13BTFp, _startVertexA8OxCF)
	});

	it('test for dijkstra', async () => {
		const _isDirectedEK1oLx = true;
		const _graphT2kLSEe = new Graph(_isDirectedEK1oLx)
		const _returnValue7BoGC9 = await _graphT2kLSEe.getWeight()
		const _returnValueLbZhBzy = await _graphT2kLSEe.getVerticesIndices()
		const _returnValueywtM2NK = null;
		const _getKeyGHY24HP = () => { return _returnValueywtM2NK };
		const _startVertexXvPnkOF = {
			"getKey": _getKeyGHY24HP
	}
		const _returnValueUAYbFTJ = await dijkstra(_graphT2kLSEe, _startVertexXvPnkOF)
	});

	it('test for dijkstra', async () => {
		const _isDirectedosmryIX = true;
		const _graphau4oJug = new Graph(_isDirectedosmryIX)
		const _arrayValuek1unP8Q = false;
		const _arrayValueLhlQRhh = -9.616155977847841;
		const _returnValueR0qcNrL = [_arrayValuek1unP8Q, _arrayValueLhlQRhh]
		const _getKeyuAgXRXK = () => { return _returnValueR0qcNrL };
		const _startVertexh6iAwau = {
			"getKey": _getKeyuAgXRXK
	}
		const _endVertexeIhQ81 = true;
		const _returnValueaaspfLo = await _graphau4oJug.findEdge(_startVertexh6iAwau, _endVertexeIhQ81)
		const _returnValueJXBJezy = await _graphau4oJug.getWeight()
		const _valueSGRFAhP = 6.954061984368291;
		const _startVertexbjvml3P = new GraphVertex(_valueSGRFAhP)
		const _arrayValuesNLRXBa = -8.404917321499468;
		const _arrayValueJcqSfwg = [_arrayValuesNLRXBa]
		const _arrayValueASbEtvZ = -2.7188123477652066;
		const _arrayValuePwDJmA = 6.508869123092865;
		const _arrayValue40Wxjx = 4.239931965993746;
		const _requiredEdgegR9ltvu = [_arrayValueJcqSfwg, _arrayValueASbEtvZ, _arrayValuePwDJmA, _arrayValue40Wxjx]
		const _returnValueP7cO6tP = await _startVertexbjvml3P.hasEdge(_requiredEdgegR9ltvu)
		const _edgeWjFvuAl = -9.881781111307296;
		const _returnValues8BTbr = await _startVertexbjvml3P.deleteEdge(_edgeWjFvuAl)
		const _returnValueQJrxUNZ = await dijkstra(_graphau4oJug, _startVertexbjvml3P)
	});
})