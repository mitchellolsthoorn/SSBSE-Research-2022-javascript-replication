export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuetXaxg9Q = undefined;
		const _getAllVerticesNxdVUYL = () => { return _returnValuetXaxg9Q };
		const _getVertexByKeySwMXHKy = null;
		const _returnValuepwLnA9 = undefined;
		const _getNeighborsAhn3GqS = () => { return _returnValuepwLnA9 };
		const _returnValueV9lly14 = "yCbso3UfVxgTa6ipErIODmSqT";
		const _findEdgepap8woQ = () => { return _returnValueV9lly14 };
		const _graphztRycAR = {
			"getAllVertices": _getAllVerticesNxdVUYL,
		"getVertexByKey": _getVertexByKeySwMXHKy,
		"getNeighbors": _getNeighborsAhn3GqS,
		"findEdge": _findEdgepap8woQ
	}
		const _startVertexMeqxu0L = "S5DDTRlh2nnWUjwaUR3sbUXSdML6Jwkcy9mTDw7p635nW4KOCiYtxQhkrIJUFXDKIxbSFIAVQFp2PualBOVVNtc8axIWv";
		const _returnValuewxI4rwU = await bellmanFord(_graphztRycAR, _startVertexMeqxu0L)
	});

	it('test for bellmanFord', async () => {
		const _arrayValueeJEGokO = -1.2974899778082687;
		const _arrayValueKXnn6kN = undefined;
		const _arrayValueq3dbBLH = 6.906594364928438;
		const _returnValueDuLhlfZ = [_arrayValueeJEGokO, _arrayValueKXnn6kN, _arrayValueq3dbBLH]
		const _getAllVerticesTfJYR7A = () => { return _returnValueDuLhlfZ };
		const _returnValueVJRYIwO = null;
		const _getVertexByKeymZrXukR = () => { return _returnValueVJRYIwO };
		const _getNeighborsznajARD = -3.522982450718162;
		const _returnValuelNWRbzo = null;
		const _findEdgeCmDh8SH = () => { return _returnValuelNWRbzo };
		const _graphdm9BhnZ = {
			"getAllVertices": _getAllVerticesTfJYR7A,
		"getVertexByKey": _getVertexByKeymZrXukR,
		"getNeighbors": _getNeighborsznajARD,
		"findEdge": _findEdgeCmDh8SH
	}
		const _returnValueQWaZp30 = {
		
	}
		const _getKeyJ9BPKfo = () => { return _returnValueQWaZp30 };
		const _startVertex4lboex = {
			"getKey": _getKeyJ9BPKfo
	}
		const _returnValueZk7BLq = await bellmanFord(_graphdm9BhnZ, _startVertex4lboex)
	});

	it('test for bellmanFord', async () => {
		const _returnValueWyaK0D = []
		const _getAllVerticesm77bFw = () => { return _returnValueWyaK0D };
		const _returnValue0okA3p = "851N3q46TJk9Ye3IJehPnB1sMOl2Yklcmvr8zFnBtSx1yimvHLdUBuh3jsybt3MsofM5nuCenoEmOHLDqTfl";
		const _getVertexByKeyBiWA2Uh = () => { return _returnValue0okA3p };
		const _returnValuevCBYFnK = false;
		const _getNeighborse5ksbzM = () => { return _returnValuevCBYFnK };
		const _returnValueb67j62n = "sBHjFLPYHikqmqupfybuB8diKdPfLzJuBSgsn7vJ2J6IcSFtjIq43CzTUhTU9fZvv0Bh6r9GXMG6EPHIoiF1D2DSRKWYi";
		const _findEdgeJF2D6VF = () => { return _returnValueb67j62n };
		const _graphbdcOSu3 = {
			"getAllVertices": _getAllVerticesm77bFw,
		"getVertexByKey": _getVertexByKeyBiWA2Uh,
		"getNeighbors": _getNeighborse5ksbzM,
		"findEdge": _findEdgeJF2D6VF
	}
		const _returnValuecPSEqd = {
		
	}
		const _getKeyHmjZcFq = () => { return _returnValuecPSEqd };
		const _startVertexMbAIQAN = {
			"getKey": _getKeyHmjZcFq
	}
		const _returnValueL17Dvf4 = await bellmanFord(_graphbdcOSu3, _startVertexMbAIQAN)
	});
})