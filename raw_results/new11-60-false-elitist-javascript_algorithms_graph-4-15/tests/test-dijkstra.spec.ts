export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _getAllVerticesiQZ3cnS = "RI3dmvDPonTeJKOPszPxnDu1Ac2Oac4YAw9GbGPbU";
		const _returnValuet2ODgsI = undefined;
		const _findEdgedLsouFN = () => { return _returnValuet2ODgsI };
		const _graphPaqKUJ = {
			"getAllVertices": _getAllVerticesiQZ3cnS,
		"findEdge": _findEdgedLsouFN
	}
		const _arrayValueNpokApO = null;
		const _returnValueO2VDNNe = null;
		const _arrayValueCxfJFpi = () => { return _returnValueO2VDNNe };
		const _arrayValueJXohvnj = undefined;
		const _arrayValue04sSfR = false;
		const _arrayValueKDFQffk = [_arrayValueCxfJFpi, _arrayValueJXohvnj, _arrayValue04sSfR]
		const _arrayValuegDfJDtq = true;
		const _returnValueMqGlSyp = "HFVgb8Xe8zMmnBEUEV8u432oxSMEf9bKyTj11pnqMQIk9u5zeK9sQ79rz4oFceWf";
		const _arrayValueSdgckit = () => { return _returnValueMqGlSyp };
		const _returnValueBwYejqZ = [_arrayValueNpokApO, _arrayValueKDFQffk, _arrayValuegDfJDtq, _arrayValueSdgckit]
		const _getKeyILSU1V7 = () => { return _returnValueBwYejqZ };
		const _startVertexc4zet4H = {
			"getKey": _getKeyILSU1V7
	}
		const _returnValueq1so7fj = await dijkstra(_graphPaqKUJ, _startVertexc4zet4H)
	});

	it('test for dijkstra', async () => {
		const _returnValueUGgayTJ = []
		const _getAllVerticeskIXy0dH = () => { return _returnValueUGgayTJ };
		const _returnValueFAuCsjz = "girRTYwsaYn68p67VPW5ZOBdQe3FwMfHED1uXxok4FfJ7g5Nzl73wQSN1X9ErrYtBXXDfM7BFFvwnss8oLiivOIDTR";
		const _findEdgexxt3SzV = () => { return _returnValueFAuCsjz };
		const _graph8kjKhf = {
			"getAllVertices": _getAllVerticeskIXy0dH,
		"findEdge": _findEdgexxt3SzV
	}
		const _returnValueiqnbc5A = {
		
	}
		const _getKeyJM86y3y = () => { return _returnValueiqnbc5A };
		const _startVertexYUD807 = {
			"getKey": _getKeyJM86y3y
	}
		const _returnValuexuEePDs = await dijkstra(_graph8kjKhf, _startVertexYUD807)
	});
})