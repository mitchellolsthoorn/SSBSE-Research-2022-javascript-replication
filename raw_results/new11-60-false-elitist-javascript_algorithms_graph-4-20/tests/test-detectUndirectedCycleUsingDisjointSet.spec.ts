export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueS0sQNOn = 9.83515718078413;
		const _arrayValuegfh2Kks = 7.564363753672573;
		const _returnValueR1ry3PO = [_arrayValueS0sQNOn, _arrayValuegfh2Kks]
		const _getAllVerticesLdrgX08 = () => { return _returnValueR1ry3PO };
		const _returnValueP2ktCUX = undefined;
		const _getAllEdgesiTQKIuS = () => { return _returnValueP2ktCUX };
		const _graphYL4PlFs = {
			"getAllVertices": _getAllVerticesLdrgX08,
		"getAllEdges": _getAllEdgesiTQKIuS
	}
		const _returnValueRMGZUFd = await detectUndirectedCycleUsingDisjointSet(_graphYL4PlFs)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuezjs857Q = []
		const _getAllVertices6S0j9D = () => { return _returnValuezjs857Q };
		const _returnValuev8IRa8n = undefined;
		const _getAllEdgestG354DH = () => { return _returnValuev8IRa8n };
		const _graph2Lvq2R = {
			"getAllVertices": _getAllVertices6S0j9D,
		"getAllEdges": _getAllEdgestG354DH
	}
		const _returnValueduGfKMx = await detectUndirectedCycleUsingDisjointSet(_graph2Lvq2R)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuevbA6jHL = []
		const _getAllVerticesFBw8hz4 = () => { return _returnValuevbA6jHL };
		const _arrayValueWpqoPJ7 = false;
		const _arrayValueAVW8WHH = "r8CqNB6YmE";
		const _arrayValuekKeRV6U = undefined;
		const _arrayValueJa2myP6 = false;
		const _arrayValueKdfir33 = true;
		const _arrayValuey6c7XQM = [_arrayValueAVW8WHH, _arrayValuekKeRV6U, _arrayValueJa2myP6, _arrayValueKdfir33]
		const _arrayValuepgqF62K = [_arrayValuey6c7XQM]
		const _arrayValuepepTNtY = null;
		const _returnValuegiFNdbi = [_arrayValueWpqoPJ7, _arrayValuepgqF62K, _arrayValuepepTNtY]
		const _getAllEdgesh0R4uM = () => { return _returnValuegiFNdbi };
		const _graphKSAWFES = {
			"getAllVertices": _getAllVerticesFBw8hz4,
		"getAllEdges": _getAllEdgesh0R4uM
	}
		const _returnValueUtswaZP = await detectUndirectedCycleUsingDisjointSet(_graphKSAWFES)
	});
})