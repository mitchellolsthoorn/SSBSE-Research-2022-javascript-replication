export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphEnOO4Zw = "yxVHN156wxgxdjPXnPqCECSlPaFp1YL66o9WKQT82sLpsI2VyfBfi2mD3wzPv0f5OAbhJm77LpRIR1mlbhNfEwormQf4VbCQTZ";
		const _returnValuexeaPXJF = await kruskal(_graphEnOO4Zw)
	});

	it('test for kruskal', async () => {
		const _isDirectedWGdvj5H = "oz5qHNyYiueBV7giu3hqvkDs";
		const _returnValueKIoThSC = null;
		const _returnValuewE3sq7r = () => { return _returnValueKIoThSC };
		const _getAllEdgesvJHvpdO = () => { return _returnValuewE3sq7r };
		const _arrayValueDQ3hDZd = {
		
	}
		const _returnValueKIyLs2p = [_arrayValueDQ3hDZd]
		const _getAllVerticesLUuSqsf = () => { return _returnValueKIyLs2p };
		const _graphjZjewRo = {
			"isDirected": _isDirectedWGdvj5H,
		"getAllEdges": _getAllEdgesvJHvpdO,
		"getAllVertices": _getAllVerticesLUuSqsf
	}
		const _returnValueWTfizhp = await kruskal(_graphjZjewRo)
	});

	it('test for kruskal', async () => {
		const _isDirectedtHMstIa = false;
		const _arrayValuexhPM7sq = {
		
	}
		const _arrayValuepkXHpQp = false;
		const _arrayValuei2YHEut = false;
		const _arrayValueOckEbes = {
		
	}
		const _arrayValuej1q9fRZ = {
		
	}
		const _arrayValuekWGxNWN = [_arrayValuei2YHEut, _arrayValueOckEbes, _arrayValuej1q9fRZ]
		const _arrayValueguAeZ5g = {
		
	}
		const _arrayValuealief7h = [_arrayValuepkXHpQp, _arrayValuekWGxNWN, _arrayValueguAeZ5g]
		const _returnValuetrOhNn4 = [_arrayValuexhPM7sq, _arrayValuealief7h]
		const _getAllEdgesQUCnPcl = () => { return _returnValuetrOhNn4 };
		const _returnValuebmMYuX4 = false;
		const _getAllVerticesql8XtiQ = () => { return _returnValuebmMYuX4 };
		const _graphZKOUMu = {
			"isDirected": _isDirectedtHMstIa,
		"getAllEdges": _getAllEdgesQUCnPcl,
		"getAllVertices": _getAllVerticesql8XtiQ
	}
		const _returnValueOuogIGo = await kruskal(_graphZKOUMu)
	});
})