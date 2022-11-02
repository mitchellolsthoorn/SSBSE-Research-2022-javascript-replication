export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValuepqLfKxx = true;
		const _arrayValuedZ3VjqJ = false;
		const _graphHt7xeji = [_arrayValuepqLfKxx, _arrayValuedZ3VjqJ]
		const _arrayValuePTDiwkN = 2.799380163318082;
		const _arrayValueKBk2CGW = false;
		const _startVertexDtew53s = [_arrayValuePTDiwkN, _arrayValueKBk2CGW]
		const _returnValueFWh7SVy = await dijkstra(_graphHt7xeji, _startVertexDtew53s)
	});

	it('test for dijkstra', async () => {
		const _isDirectedYteFUoq = true;
		const _graphvmrTgHX = new Graph(_isDirectedYteFUoq)
		const _vertexKeyASH2z6B = true;
		const _returnValueYilbIV = await _graphvmrTgHX.getVertexByKey(_vertexKeyASH2z6B)
		const _valueX6xiIXw = null;
		const _returnValueQ4JITpB = "MWaC2eS133bFEcqfKf3Q4xtOxMuyFFpK6RjWpVHddzZn3a5VHat4VNiAn71dfQ7ot0lOYUKScqTJLGV3F2p8THTGH3UMzsR";
		const _keyCallbackbNYHbHb = () => { return _returnValueQ4JITpB };
		const _startVertexsrUGen5 = new DisjointSetItem(_valueX6xiIXw, _keyCallbackbNYHbHb)
		const _returnValueBinIVHA = await _startVertexsrUGen5.getKey()
		const _endVertexohZ9ser = {
		
	}
		const _returnValueE4Z8vEs = await _graphvmrTgHX.findEdge(_startVertexsrUGen5, _endVertexohZ9ser)
		const _arrayValuesIpk1P = undefined;
		const _vertexKeyDrfxKBW = [_arrayValuesIpk1P]
		const _returnValuev8ta4lz = await _graphvmrTgHX.getVertexByKey(_vertexKeyDrfxKBW)
		const _arrayValueaE7ccuI = {
		
	}
		const _arrayValueWYQxRx2 = "FnX7gC";
		const _arrayValueQD3ZNZQ = false;
		const _arrayValueZbKzKbo = true;
		const _arrayValueOXIzLVr = "SOh8q0oYgB61LHENEDIGRzCGrDnKH2sKnK4rHUBsTpeAMByTTz6EoSs91I8hgsD923QetA84eUukDUhU7NoPkwUhawqC";
		const _arrayValueX3QX5td = [_arrayValueWYQxRx2, _arrayValueQD3ZNZQ, _arrayValueZbKzKbo, _arrayValueOXIzLVr]
		const _arrayValueuRqFNln = null;
		const _arrayValueGcshATf = "HEb6lim3pHyVwg3lwJAS4HxfvX3N1IPxOps7yHEsUykjDG6onTbydFPHDPPom4";
		const _arrayValueMi5ovxu = -3.1246753547376027;
		const _arrayValueXoDqi7V = {
		
	}
		const _arrayValueoxOwGn = [_arrayValueMi5ovxu, _arrayValueXoDqi7V]
		const _arrayValueqJJyq3H = [_arrayValueuRqFNln, _arrayValueGcshATf, _arrayValueoxOwGn]
		const _vertexKeyfgriuS9 = [_arrayValueaE7ccuI, _arrayValueX3QX5td, _arrayValueqJJyq3H]
		const _returnValueEZAoV8Y = await _graphvmrTgHX.getVertexByKey(_vertexKeyfgriuS9)
		const _returnValueJX0O0if = false;
		const _getKeyPFjvTGS = () => { return _returnValueJX0O0if };
		const _startVertexxJ3AXjR = {
			"getKey": _getKeyPFjvTGS
	}
		const _returnValueFDg1vMQ = await dijkstra(_graphvmrTgHX, _startVertexxJ3AXjR)
	});

	it('test for dijkstra', async () => {
		const _isDirectednooECMX = false;
		const _graphfsr5S7p = new Graph(_isDirectednooECMX)
		const _returnValueZM29KDX = await _graphfsr5S7p.getWeight()
		const _valueiZjlpz8 = 1.842690544219181;
		const _startVertexyTp5mlE = new GraphVertex(_valueiZjlpz8)
		const _requiredEdgecIvhl6 = true;
		const _returnValuevmntSZ0 = await _startVertexyTp5mlE.hasEdge(_requiredEdgecIvhl6)
		const _vertexuQg0LS9 = -7.124982778954649;
		const _returnValueW9ws8RA = await _startVertexyTp5mlE.hasNeighbor(_vertexuQg0LS9)
		const _returnValuen2lpF6R = await dijkstra(_graphfsr5S7p, _startVertexyTp5mlE)
	});
})