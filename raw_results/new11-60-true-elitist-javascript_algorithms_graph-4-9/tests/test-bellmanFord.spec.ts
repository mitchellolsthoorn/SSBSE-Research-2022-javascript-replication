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
		const _returnValueiGSZVX = null;
		const _getAllVerticesZdq9jkC = () => { return _returnValueiGSZVX };
		const _returnValuenbCvHdF = undefined;
		const _getVertexByKeypfxSZni = () => { return _returnValuenbCvHdF };
		const _returnValueR8VoTN7 = "gTaLtpfKMSb";
		const _getNeighborskB6hIQv = () => { return _returnValueR8VoTN7 };
		const _returnValueYE89g3M = null;
		const _findEdgeyt9P7f5 = () => { return _returnValueYE89g3M };
		const _graphHCnO76F = {
			"getAllVertices": _getAllVerticesZdq9jkC,
		"getVertexByKey": _getVertexByKeypfxSZni,
		"getNeighbors": _getNeighborskB6hIQv,
		"findEdge": _findEdgeyt9P7f5
	}
		const _arrayValuegHNTOQh = 4.326101955988042;
		const _arrayValuefjHke5t = 2.2804420641387253;
		const _arrayValueMFRtaV = undefined;
		const _returnValueVfpeuvl = [_arrayValuegHNTOQh, _arrayValuefjHke5t, _arrayValueMFRtaV]
		const _getKeydYZiw4N = () => { return _returnValueVfpeuvl };
		const _startVertexV2C6d0 = {
			"getKey": _getKeydYZiw4N
	}
		const _returnValuedM4RIoO = await bellmanFord(_graphHCnO76F, _startVertexV2C6d0)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedSiYbJKb = true;
		const _graphNmwMnv = new Graph(_isDirectedSiYbJKb)
		const _returnValueBgXpsqV = await _graphNmwMnv.toString()
		const _returnValueWPjdSwQ = await _graphNmwMnv.getWeight()
		const _returnValueI0QEZew = {
		
	}
		const _getKeyYXg8bkl = () => { return _returnValueI0QEZew };
		const _startVertexJuZ0mW7 = {
			"getKey": _getKeyYXg8bkl
	}
		const _returnValueABnHM4m = await bellmanFord(_graphNmwMnv, _startVertexJuZ0mW7)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedAZq0Zp1 = true;
		const _graphyFPCt2n = new Graph(_isDirectedAZq0Zp1)
		const _returnValueJLHBdmE = await _graphyFPCt2n.getWeight()
		const _returnValuewyeGjQO = await _graphyFPCt2n.getAllEdges()
		const _returnValueSoHiJzU = -1.9613080096937647;
		const _getKeyGLlEj24 = () => { return _returnValueSoHiJzU };
		const _newVertex2FkrzD = {
			"getKey": _getKeyGLlEj24
	}
		const _returnValueZy21h3s = await _graphyFPCt2n.addVertex(_newVertex2FkrzD)
		const _valueMVCJBy5 = "f17KHwrY6uKk8SpLF5DiKSYVD77fbr5a3SkoAl3KkeRxuvsAYPftYzsanhO0UMnCQRnULaAwKABclBoj";
		const _returnValueM7BxmBk = false;
		const _keyCallbackLcLxZ6j = () => { return _returnValueM7BxmBk };
		const _startVertexHAdLIoM = new DisjointSetItem(_valueMVCJBy5, _keyCallbackLcLxZ6j)
		const _returnValueSzBTkCI = await _startVertexHAdLIoM.getRoot()
		const _returnValueDqWDvyp = await _startVertexHAdLIoM.getRoot()
		const _returnValueHwa1u3A = await bellmanFord(_graphyFPCt2n, _startVertexHAdLIoM)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedwFjatqC = false;
		const _graphl68ZoJf = new Graph(_isDirectedwFjatqC)
		const _returnValueBwhBWF = await _graphl68ZoJf.getWeight()
		const _returnValuemPc8dru = false;
		const _getKeyYYmk30R = () => { return _returnValuemPc8dru };
		const _newVertexHT6s3ZL = {
			"getKey": _getKeyYYmk30R
	}
		const _returnValueWvM4ka1 = await _graphl68ZoJf.addVertex(_newVertexHT6s3ZL)
		const _returnValuecOcoWf = await _graphl68ZoJf.getWeight()
		const _returnValuerTt1de = "y42NsSDymVDPT8ya6hwkAvHeQRwIvDXjXy3p7MI6mNlA31TdFRlhXEzjzElyGCGScdG7hl54pCYXsLIqrJzRFU9hMaQRV0";
		const _getKeyEb26BwM = () => { return _returnValuerTt1de };
		const _newVertexSo9sl64 = {
			"getKey": _getKeyEb26BwM
	}
		const _returnValuejRODTMU = await _graphl68ZoJf.addVertex(_newVertexSo9sl64)
		const _returnValuei3kTV80 = {
		
	}
		const _getKeyVDNOdaZ = () => { return _returnValuei3kTV80 };
		const _startVertexrUifXUJ = {
			"getKey": _getKeyVDNOdaZ
	}
		const _returnValueZgCxYmn = await bellmanFord(_graphl68ZoJf, _startVertexrUifXUJ)
	});
})