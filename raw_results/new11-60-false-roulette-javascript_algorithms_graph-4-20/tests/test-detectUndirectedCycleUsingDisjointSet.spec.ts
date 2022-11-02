export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueDAoJOE2 = null;
		const _arrayValueVEOzM3o = "fUgar4rWax7nUQ8Ma";
		const _graphuxsOpp9 = [_arrayValueDAoJOE2, _arrayValueVEOzM3o]
		const _returnValuecggVcE5 = await detectUndirectedCycleUsingDisjointSet(_graphuxsOpp9)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedXYIZVra = true;
		const _graphllZikqI = new Graph(_isDirectedXYIZVra)
		const _returnValuehOwlkvK = await _graphllZikqI.getWeight()
		const _valueITGva4n = true;
		const _vertexlHDUzY5 = new GraphVertex(_valueITGva4n)
		const _returnValueiqX0Uug = await _vertexlHDUzY5.getEdges()
		const _returnValueeoyQeKU = await _vertexlHDUzY5.getEdges()
		const _returnValueIHwtvL2 = {
		
	}
		const _callbackgjrSwmF = () => { return _returnValueIHwtvL2 };
		const _returnValueaflCku7 = await _vertexlHDUzY5.toString(_callbackgjrSwmF)
		const _returnValuekri87I8 = await _vertexlHDUzY5.getKey()
		const _returnValueUGZLc6j = await _graphllZikqI.getNeighbors(_vertexlHDUzY5)
		const _returnValueTVwTccm = await _graphllZikqI.getWeight()
		const _returnValueRycdRj7 = await _graphllZikqI.toString()
		const _returnValuevHUNG2G = await detectUndirectedCycleUsingDisjointSet(_graphllZikqI)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueoUaY6t = []
		const _getAllVerticesL0DmOZk = () => { return _returnValueoUaY6t };
		const _arrayValuelbfYor3 = undefined;
		const _arrayValueMLYOoY5 = undefined;
		const _arrayValueqNosrzX = undefined;
		const _arrayValueay3hd1 = false;
		const _arrayValuebMevIR = "oPq5M2kLr8zaj8fmXxGunHqSNxyU5Yc4V8dYwAiEArwZeSy27vYKm6QuXNg3Jl6rWBDI0cxn2GqblCsa4";
		const _arrayValueQRcG6w4 = true;
		const _arrayValuekIjH9bh = 4.015196738449312;
		const _arrayValueZnUBsw0 = [_arrayValuekIjH9bh]
		const _arrayValuecgSTic7 = null;
		const _arrayValueAsZYnn6 = {
		
	}
		const _arrayValueKXYhUFe = [_arrayValueZnUBsw0, _arrayValuecgSTic7, _arrayValueAsZYnn6]
		const _arrayValueIcQfDbl = [_arrayValuebMevIR, _arrayValueQRcG6w4, _arrayValueKXYhUFe]
		const _arrayValuetYCfZMJ = [_arrayValuelbfYor3, _arrayValueMLYOoY5, _arrayValueqNosrzX, _arrayValueay3hd1, _arrayValueIcQfDbl]
		const _arrayValuek0Bpn3C = null;
		const _arrayValuee9Jq6L = null;
		const _returnValuetRiBBfI = [_arrayValuetYCfZMJ, _arrayValuek0Bpn3C, _arrayValuee9Jq6L]
		const _getAllEdgeszSn2tBe = () => { return _returnValuetRiBBfI };
		const _graphrv13xW = {
			"getAllVertices": _getAllVerticesL0DmOZk,
		"getAllEdges": _getAllEdgeszSn2tBe
	}
		const _returnValueErmniXx = await detectUndirectedCycleUsingDisjointSet(_graphrv13xW)
	});
})