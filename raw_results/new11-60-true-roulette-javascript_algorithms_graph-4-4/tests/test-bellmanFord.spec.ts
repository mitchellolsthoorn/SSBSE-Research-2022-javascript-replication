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
		const _graphMb1bByd = []
		const _returnValuelRDIBK = true;
		const _getKeyJBqYHBU = () => { return _returnValuelRDIBK };
		const _startVertexBeqwPaP = {
			"getKey": _getKeyJBqYHBU
	}
		const _returnValuexNrPtdJ = await bellmanFord(_graphMb1bByd, _startVertexBeqwPaP)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedDkDSkLm = false;
		const _graphMqGLCh = new Graph(_isDirectedDkDSkLm)
		const _returnValuem545kc = await _graphMqGLCh.getVerticesIndices()
		const _returnValueRI7jRY = "WEthwM0EclYCnjd";
		const _arrayValue7ciX81 = () => { return _returnValueRI7jRY };
		const _arrayValuedyBooiQ = null;
		const _arrayValuevFUjOTB = -4.253265025447989;
		const _vertexKeyZpEw1g6 = [_arrayValue7ciX81, _arrayValuedyBooiQ, _arrayValuevFUjOTB]
		const _returnValuewHIKan = await _graphMqGLCh.getVertexByKey(_vertexKeyZpEw1g6)
		const _arrayValuerKR6uc = null;
		const _returnValuexfWUbwF = -4.559244874908411;
		const _arrayValuegsRrdXp = () => { return _returnValuexfWUbwF };
		const _arrayValuembjRypm = null;
		const _arrayValuenBYAH2c = [_arrayValuerKR6uc, _arrayValuegsRrdXp, _arrayValuembjRypm]
		const _vertexKeyxnopd6s = [_arrayValuenBYAH2c]
		const _returnValueykLIPTD = await _graphMqGLCh.getVertexByKey(_vertexKeyxnopd6s)
		const _returnValuewEJIw8 = {
		
	}
		const _returnValueUj8KP3V = () => { return _returnValuewEJIw8 };
		const _arrayValueZztzGMC = () => { return _returnValueUj8KP3V };
		const _arrayValueg3QpiW7 = undefined;
		const _arrayValuefPb2SqS = "bMMoqJ6TnWRMxobGUXn3DenPuKIMrBt34G4QzLgC5ULFL1NHEMRmmhqMtYZlblCNQDHIxYnHzDAKmZOT1VwmbAXvTqeb";
		const _returnValuegesIUCL = [_arrayValueZztzGMC, _arrayValueg3QpiW7, _arrayValuefPb2SqS]
		const _getKeyG86O8zR = () => { return _returnValuegesIUCL };
		const _startVertexGTtnTH = {
			"getKey": _getKeyG86O8zR
	}
		const _returnValueB9lZyYm = await bellmanFord(_graphMqGLCh, _startVertexGTtnTH)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedkljxXfv = false;
		const _graphkg83NXm = new Graph(_isDirectedkljxXfv)
		const _returnValuenroBAmc = await _graphkg83NXm.getVerticesIndices()
		const _valueeUwK1mw = undefined;
		const _keyCallbackP8t8lCI = undefined;
		const _newVertexCm48xHO = new DisjointSetItem(_valueeUwK1mw, _keyCallbackP8t8lCI)
		const _returnValuexK0geMj = await _newVertexCm48xHO.getChildren()
		const _returnValueuwoEExF = await _newVertexCm48xHO.getRoot()
		const _returnValueKhurbDF = await _graphkg83NXm.addVertex(_newVertexCm48xHO)
		const _returnValueoslCic7 = await _graphkg83NXm.getAllVertices()
		const _arrayValueGwXRZbh = -9.66448231258917;
		const _arrayValuex8DhcYH = [_arrayValueGwXRZbh]
		const _arrayValueRtWqGBW = undefined;
		const _arrayValuenTKZ6RC = true;
		const _arrayValueQrHomxr = null;
		const _arrayValuewPHob0x = undefined;
		const _arrayValueMn6HpmG = [_arrayValueRtWqGBW, _arrayValuenTKZ6RC, _arrayValueQrHomxr, _arrayValuewPHob0x]
		const _arrayValueK63jL2e = [_arrayValueMn6HpmG]
		const _returnValuemDsRDUp = [_arrayValuex8DhcYH, _arrayValueK63jL2e]
		const _getKeyC0OEAV6 = () => { return _returnValuemDsRDUp };
		const _startVertexKDoLth2 = {
			"getKey": _getKeyC0OEAV6
	}
		const _returnValueqH9gciT = await bellmanFord(_graphkg83NXm, _startVertexKDoLth2)
	});
})