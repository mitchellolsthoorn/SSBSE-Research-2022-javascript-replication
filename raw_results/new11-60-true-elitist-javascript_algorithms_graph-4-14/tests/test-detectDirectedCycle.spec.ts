export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueKGHeBxr = 6.771276553074095;
		const _getAllVerticesi4I0PKr = () => { return _returnValueKGHeBxr };
		const _graphOMkBDj1 = {
			"getAllVertices": _getAllVerticesi4I0PKr
	}
		const _returnValuerPDOb9f = await detectDirectedCycle(_graphOMkBDj1)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedKm8L6yR = false;
		const _graphBBFhIte = new Graph(_isDirectedKm8L6yR)
		const _vertexKeykUEVsxx = undefined;
		const _returnValuelYB4PTd = await _graphBBFhIte.getVertexByKey(_vertexKeykUEVsxx)
		const _returnValueHLPcI9t = await _graphBBFhIte.getVerticesIndices()
		const _returnValueydfl62q = await _graphBBFhIte.toString()
		const _returnValueEeWcwdm = await detectDirectedCycle(_graphBBFhIte)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedNHuRASt = true;
		const _graphiiD2IPM = new Graph(_isDirectedNHuRASt)
		const _returnValueSqDfDEr = null;
		const _valueNJwiMG0 = () => { return _returnValueSqDfDEr };
		const _returnValueo9vfF8h = "346vlPdyzuPCIIyYw1M7YLn4Dgoj";
		const _keyCallbackrWBsRSq = () => { return _returnValueo9vfF8h };
		const _newVertexQes9Kv1 = new DisjointSetItem(_valueNJwiMG0, _keyCallbackrWBsRSq)
		const _returnValuesBsFVOO = await _newVertexQes9Kv1.getRoot()
		const _returnValueUT3AhQF = await _graphiiD2IPM.addVertex(_newVertexQes9Kv1)
		const _returnValuegmYFL5x = await _graphiiD2IPM.getAllEdges()
		const _returnValuePzkraAK = 6.458007201973327;
		const _getKeyR63moG = () => { return _returnValuePzkraAK };
		const _startVertexDjymUi = {
			"getKey": _getKeyR63moG
	}
		const _endVertexJREFDP7 = false;
		const _returnValuep4jRX33 = await _graphiiD2IPM.findEdge(_startVertexDjymUi, _endVertexJREFDP7)
		const _returnValueuV18LBz = await detectDirectedCycle(_graphiiD2IPM)
	});
})