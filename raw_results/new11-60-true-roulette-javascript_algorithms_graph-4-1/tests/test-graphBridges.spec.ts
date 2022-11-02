export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueERHopMw = undefined;
		const _returnValuezw3q7q = [_arrayValueERHopMw]
		const _getAllVerticesYk7GFuu = () => { return _returnValuezw3q7q };
		const _returnValuecU8pqDL = "Tn6OFhtrLi0QoGThFDaV0aSueYPMMaER377VDdtEg8gp2EzijwIZQV1bN7VKoMQ7agM6Di21lkYQSkejhClbNf8PD0Nc6kBM";
		const _findEdgeJroNISh = () => { return _returnValuecU8pqDL };
		const _graphXxf72N8 = {
			"getAllVertices": _getAllVerticesYk7GFuu,
		"findEdge": _findEdgeJroNISh
	}
		const _returnValueXhIBpaM = await graphBridges(_graphXxf72N8)
	});

	it('test for graphBridges', async () => {
		const _isDirectedUdphpZi = true;
		const _graphv5nyN2K = new Graph(_isDirectedUdphpZi)
		const _returnValuediY911O = undefined;
		const _getNeighborsJzRcxT = () => { return _returnValuediY911O };
		const _vertexHP1ZUgY = {
			"getNeighbors": _getNeighborsJzRcxT
	}
		const _returnValuepZl0hw4 = await _graphv5nyN2K.getNeighbors(_vertexHP1ZUgY)
		const _arrayValueRfTOojD = false;
		const _arrayValuePhU0QC = "CP1B9nLyqKPlQNcEckFt6LIEN9da9E8qBPyb4WSCulFF6LCL8vakOuwkR3tSmau4pFvav";
		const _vertexKeyNV2S2eP = [_arrayValueRfTOojD, _arrayValuePhU0QC]
		const _returnValueqMHrU4 = await _graphv5nyN2K.getVertexByKey(_vertexKeyNV2S2eP)
		const _returnValuee2paRLf = await _graphv5nyN2K.reverse()
		const _returnValueIrVcStx = null;
		const _getNeighborsdDfhG9 = () => { return _returnValueIrVcStx };
		const _vertexcXVKGG2 = {
			"getNeighbors": _getNeighborsdDfhG9
	}
		const _returnValuedDA9JQk = await _graphv5nyN2K.getNeighbors(_vertexcXVKGG2)
		const _valuex5eaPgJ = {
		
	}
		const _returnValueCBSD7UB = 4.347796697079323;
		const _keyCallbackl0Usnbf = () => { return _returnValueCBSD7UB };
		const _newVertexT2LvEOQ = new DisjointSetItem(_valuex5eaPgJ, _keyCallbackl0Usnbf)
		const _returnValuepS95ps6 = await _newVertexT2LvEOQ.getChildren()
		const _returnValueBGbEmxC = await _newVertexT2LvEOQ.getChildren()
		const _valuehQRgzKU = undefined;
		const _arrayValueydzspEX = "fb3Ia2US9wn7aU3GOaHGaR4Hp8M4hp3r9h";
		const _arrayValueRkhPorc = true;
		const _returnValuefeXGXTU = {
		
	}
		const _arrayValuelgxMqzR = () => { return _returnValuefeXGXTU };
		const _returnValueglPbsH2 = [_arrayValueydzspEX, _arrayValueRkhPorc, _arrayValuelgxMqzR]
		const _keyCallbacklaa1su = () => { return _returnValueglPbsH2 };
		const _parentItemhSdw3er = new DisjointSetItem(_valuehQRgzKU, _keyCallbacklaa1su)
		const _returnValueAE6b3c = await _parentItemhSdw3er.isRoot()
		const _returnValueDHT744R = await _parentItemhSdw3er.getRoot()
		const _forceSettingParentChildJVR76FQ = true;
		const _returnValueF2pzKLH = await _newVertexT2LvEOQ.setParent(_parentItemhSdw3er, _forceSettingParentChildJVR76FQ)
		const _returnValuecR99DDJ = await _graphv5nyN2K.addVertex(_newVertexT2LvEOQ)
		const _returnValueT49raBi = await graphBridges(_graphv5nyN2K)
	});
})