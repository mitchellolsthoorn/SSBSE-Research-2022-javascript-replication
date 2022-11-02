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
		const _returnValueg9XP9oU = null;
		const _graphFDa3j4c = () => { return _returnValueg9XP9oU };
		const _startVertexUYYwXtU = "hfvmkDn87CoO4GyZC1EqFoeCuxVZAzgQ232dDCVcUsC1KAN48xpyykxe5oOfeipd97htO4mJE89J8bZ0";
		const _returnValueCthJQON = await bellmanFord(_graphFDa3j4c, _startVertexUYYwXtU)
	});

	it('test for bellmanFord', async () => {
		const _returnValueEig1bDI = true;
		const _getAllVerticesh9ki8NW = () => { return _returnValueEig1bDI };
		const _returnValuevegModv = true;
		const _getVertexByKeyPyNuQ0J = () => { return _returnValuevegModv };
		const _arrayValueeKeE2NU = "qWhFJ3dyV2NPdDfBsFfn1t2IGwLYeHpv9Ryz4eFGPx5p";
		const _returnValuem9YIHu = [_arrayValueeKeE2NU]
		const _getNeighborstqNiaFO = () => { return _returnValuem9YIHu };
		const _findEdgeDCxIl8 = null;
		const _graphSV9jHMh = {
			"getAllVertices": _getAllVerticesh9ki8NW,
		"getVertexByKey": _getVertexByKeyPyNuQ0J,
		"getNeighbors": _getNeighborstqNiaFO,
		"findEdge": _findEdgeDCxIl8
	}
		const _returnValuegtU9T8 = "grWGPnFxr7gzGTMjvOFsFpcKI9oA1bUyXQU5Tt";
		const _getKeyLYxfD2 = () => { return _returnValuegtU9T8 };
		const _startVertexyxIyvX6 = {
			"getKey": _getKeyLYxfD2
	}
		const _returnValueBQBs9jz = await bellmanFord(_graphSV9jHMh, _startVertexyxIyvX6)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedSclFkHK = false;
		const _graphbXi32Ss = new Graph(_isDirectedSclFkHK)
		const _returnValueDOLIvO4 = await _graphbXi32Ss.getAdjacencyMatrix()
		const _returnValueo64sqPO = true;
		const _returnValueoMjKN9q = () => { return _returnValueo64sqPO };
		const _arrayValueX7A1Hdo = () => { return _returnValueoMjKN9q };
		const _returnValueOhoY34P = "FTUqRiqz2K444JrKTM06Mb59YsIs";
		const _arrayValuezUTXcm4 = () => { return _returnValueOhoY34P };
		const _arrayValueJgYrkr = []
		const _arrayValueeWBgp0 = [_arrayValueX7A1Hdo, _arrayValuezUTXcm4, _arrayValueJgYrkr]
		const _returnValueNLvYTdQ = {
		
	}
		const _arrayValueruybkS4 = () => { return _returnValueNLvYTdQ };
		const _arrayValueFhHmuSq = -0.7930209195766889;
		const _arrayValuej1AH0Iz = {
		
	}
		const _returnValuezm3zoft = [_arrayValueeWBgp0, _arrayValueruybkS4, _arrayValueFhHmuSq, _arrayValuej1AH0Iz]
		const _getKeye4sMyTV = () => { return _returnValuezm3zoft };
		const _startVertexmu3spv = {
			"getKey": _getKeye4sMyTV
	}
		const _returnValues8sUp8I = await bellmanFord(_graphbXi32Ss, _startVertexmu3spv)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedrW3L7BI = true;
		const _graphvsXpOnR = new Graph(_isDirectedrW3L7BI)
		const _valueEo0jicE = null;
		const _returnValuefI71cAw = -7.2610718700496015;
		const _keyCallbackYv2CGk4 = () => { return _returnValuefI71cAw };
		const _newVertex4HzAEV = new DisjointSetItem(_valueEo0jicE, _keyCallbackYv2CGk4)
		const _returnValueTr1woc = await _newVertex4HzAEV.getChildren()
		const _returnValueMHvz0qy = await _graphvsXpOnR.addVertex(_newVertex4HzAEV)
		const _returnValuenrBtFza = await _graphvsXpOnR.reverse()
		const _returnValueiiLUoj = await _graphvsXpOnR.reverse()
		const _returnValueN1NxT0Y = await _graphvsXpOnR.getVerticesIndices()
		const _valuebu1VycW = 0.09613928047354037;
		const _returnValueFujyGPK = -6.69225830897874;
		const _keyCallbackmZCX6bH = () => { return _returnValueFujyGPK };
		const _startVertexDgcDHLS = new DisjointSetItem(_valuebu1VycW, _keyCallbackmZCX6bH)
		const _returnValueGQA2M8k = await _startVertexDgcDHLS.getRoot()
		const _returnValuecHSLFNe = await _startVertexDgcDHLS.getChildren()
		const _returnValueEdhCUH1 = await _startVertexDgcDHLS.isRoot()
		const _returnValueimAHThp = await _startVertexDgcDHLS.getRoot()
		const _returnValuelIRG4rF = await bellmanFord(_graphvsXpOnR, _startVertexDgcDHLS)
	});
})