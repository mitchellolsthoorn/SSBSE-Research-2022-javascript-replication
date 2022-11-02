export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueLNvehWS = false;
		const _getAllVerticesGR9Xknl = () => { return _returnValueLNvehWS };
		const _graphACqgyo8 = {
			"getAllVertices": _getAllVerticesGR9Xknl
	}
		const _returnValueqFH47a8 = await detectDirectedCycle(_graphACqgyo8)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValuevpIKFnv = []
		const _getAllVerticesBxcXSP = () => { return _returnValuevpIKFnv };
		const _graphtDRf2z = {
			"getAllVertices": _getAllVerticesBxcXSP
	}
		const _returnValuegcDxwk0 = await detectDirectedCycle(_graphtDRf2z)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedOAHh42I = false;
		const _graphLmvvQ5r = new Graph(_isDirectedOAHh42I)
		const _returnValueTdiKdd = undefined;
		const _getKeym6PvouR = () => { return _returnValueTdiKdd };
		const _newVertexrdiDGiW = {
			"getKey": _getKeym6PvouR
	}
		const _returnValueJ26rHAH = await _graphLmvvQ5r.addVertex(_newVertexrdiDGiW)
		const _returnValuertqzDKL = await _graphLmvvQ5r.getAllVertices()
		const _returnValueoebjb6a = await _graphLmvvQ5r.reverse()
		const _returnValuezDHvjh = await _graphLmvvQ5r.getWeight()
		const _returnValueD4bnbTu = await detectDirectedCycle(_graphLmvvQ5r)
	});
})