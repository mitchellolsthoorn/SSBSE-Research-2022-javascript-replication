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
		const _getAllVerticesY5f0b52 = "jICuzKPza9AkWjmSmxzvvHHkZz5PFHs65d2Lz65SP3T8cxy2qdhtN";
		const _graphdVrhu3z = {
			"getAllVertices": _getAllVerticesY5f0b52
	}
		const _returnValueM5RJ5h6 = await detectDirectedCycle(_graphdVrhu3z)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueiRMfSvF = []
		const _getAllVertices0sIE3r = () => { return _returnValueiRMfSvF };
		const _graphua5Nbuf = {
			"getAllVertices": _getAllVertices0sIE3r
	}
		const _returnValueGR5R3M6 = await detectDirectedCycle(_graphua5Nbuf)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedOxX2VH = false;
		const _graphRvWpe62 = new Graph(_isDirectedOxX2VH)
		const _returnValuexPAWEvQ = await _graphRvWpe62.getVerticesIndices()
		const _valuebSbxGQ = -5.310032442858803;
		const _returnValueUYb6K1G = "poE0W15NJi0QhNvBo5RbCNdyRD9";
		const _keyCallbackZWBAPwR = () => { return _returnValueUYb6K1G };
		const _newVertexrviL3Mh = new DisjointSetItem(_valuebSbxGQ, _keyCallbackZWBAPwR)
		const _returnValueZa2Ap6 = await _newVertexrviL3Mh.getKey()
		const _returnValuenZSUpOm = undefined;
		const _addChildXbFimaE = () => { return _returnValuenZSUpOm };
		const _parentItemwLpvKih = {
			"addChild": _addChildXbFimaE
	}
		const _forceSettingParentChildMzfxOEE = false;
		const _returnValueoEfZoYS = await _newVertexrviL3Mh.setParent(_parentItemwLpvKih, _forceSettingParentChildMzfxOEE)
		const _returnValueJD9B9hA = await _newVertexrviL3Mh.getRank()
		const _returnValuednoAwnJ = await _graphRvWpe62.addVertex(_newVertexrviL3Mh)
		const _returnValueNBmLCQ = await detectDirectedCycle(_graphRvWpe62)
	});
})