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
		const _graphpdgJX0t = "HNb7ZaQwSYaaX1JunEuyRrLNbwkv9k0tt8BnhjVNncajVSxjJlJf9DKi";
		const _returnValueTeaXq67 = "v2f5C9RO7dNBTRHMsNd8W4MdDgM4Ux7OFkRvzspW";
		const _startVertexnsC3vf = () => { return _returnValueTeaXq67 };
		const _returnValuer04ZaA = await bellmanFord(_graphpdgJX0t, _startVertexnsC3vf)
	});

	it('test for bellmanFord', async () => {
		const _graphXtDeFIw = "P55SzItDsljj1sgFm0AMaafHDWsRWaOUnyuS9uBOvWINTekv4oLoZ3eFjsotY7GKlnPmZ6ZQ9f52eD71OEjCbBebObHzE7wvzO";
		const _returnValueisyDrNX = {
		
	}
		const _getKeydHv8qY = () => { return _returnValueisyDrNX };
		const _startVertexUzWqeAD = {
			"getKey": _getKeydHv8qY
	}
		const _returnValuerK8imt = await bellmanFord(_graphXtDeFIw, _startVertexUzWqeAD)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedd4Rywvi = false;
		const _graphv5xsnm = new Graph(_isDirectedd4Rywvi)
		const _returnValueUulyaHG = await _graphv5xsnm.getAllVertices()
		const _returnValueivE3iO = await _graphv5xsnm.getVerticesIndices()
		const _valuege8zfw8 = false;
		const _returnValuedEdKAtr = false;
		const _keyCallbackPmGZ93g = () => { return _returnValuedEdKAtr };
		const _startVertexlXCpILf = new DisjointSetItem(_valuege8zfw8, _keyCallbackPmGZ93g)
		const _returnValueqnq9ave = await _startVertexlXCpILf.getRoot()
		const _returnValueGpJ3ZYV = await _startVertexlXCpILf.getRank()
		const _returnValueTKB4ugn = await bellmanFord(_graphv5xsnm, _startVertexlXCpILf)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedtcAiRE = true;
		const _graphwHaK8cA = new Graph(_isDirectedtcAiRE)
		const _returnValueCx5GUy = await _graphwHaK8cA.getVerticesIndices()
		const _returnValueDa8vi3b = await _graphwHaK8cA.reverse()
		const _returnValueqPe7vJz = false;
		const _getKeyraR2tTs = () => { return _returnValueqPe7vJz };
		const _newVertexFSx762a = {
			"getKey": _getKeyraR2tTs
	}
		const _returnValueBCxKLqO = await _graphwHaK8cA.addVertex(_newVertexFSx762a)
		const _returnValuejJ2bfQC = await _graphwHaK8cA.getAllEdges()
		const _returnValueJvBN4WM = await _graphwHaK8cA.reverse()
		const _returnValuehnUlhdN = null;
		const _getKeytb2HcsF = () => { return _returnValuehnUlhdN };
		const _startVertexaIfYIUu = {
			"getKey": _getKeytb2HcsF
	}
		const _returnValuea9QIEBF = await bellmanFord(_graphwHaK8cA, _startVertexaIfYIUu)
	});
})