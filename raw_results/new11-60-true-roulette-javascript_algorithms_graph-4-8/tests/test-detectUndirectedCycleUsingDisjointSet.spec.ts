export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueRpxLb82 = 8.750827690431674;
		const _graphlZcmVLm = () => { return _returnValueRpxLb82 };
		const _returnValuehikhehl = await detectUndirectedCycleUsingDisjointSet(_graphlZcmVLm)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedSb9XuKe = false;
		const _graphX3L5okV = new Graph(_isDirectedSb9XuKe)
		const _arrayValuezdMwggi = false;
		const _arrayValueUF3H6yN = false;
		const _arrayValueEdSCaw = "a2Rb4VITlW8n7fARAZxjGMcT1m9puq9XpEATAeOcwydbbd1Ix0xypoYshzUMu";
		const _arrayValueLQfvXtF = undefined;
		const _returnValueWKygrP9 = [_arrayValueUF3H6yN, _arrayValueEdSCaw, _arrayValueLQfvXtF]
		const _arrayValuejBKuiFD = () => { return _returnValueWKygrP9 };
		const _arrayValuelIefSdU = [_arrayValuezdMwggi, _arrayValuejBKuiFD]
		const _arrayValueeD2Dg3G = undefined;
		const _returnValueqxyZ12r = [_arrayValuelIefSdU, _arrayValueeD2Dg3G]
		const _getNeighborsP2siTU2 = () => { return _returnValueqxyZ12r };
		const _vertexS1f1xQV = {
			"getNeighbors": _getNeighborsP2siTU2
	}
		const _returnValueYDxFBlU = await _graphX3L5okV.getNeighbors(_vertexS1f1xQV)
		const _returnValueI0veoMd = await detectUndirectedCycleUsingDisjointSet(_graphX3L5okV)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueL2baPEG = []
		const _getAllVerticesxEtR4Tz = () => { return _returnValueL2baPEG };
		const _returnValuedCmGoDW = 8.03028996715723;
		const _arrayValueGGMpnlI = () => { return _returnValuedCmGoDW };
		const _arrayValues10MDnv = "TBNCCT5QhKUPSIFM26XXWRjWQGbqEoPMX4or7X8hTVA2Md7a";
		const _arrayValue9VrGcD = [_arrayValueGGMpnlI, _arrayValues10MDnv]
		const _arrayValuecPHytv = [_arrayValue9VrGcD]
		const _arrayValuequUSdAW = true;
		const _arrayValueFr3QWYu = "0Can2tBv6fZNVW9aiVDCi8BKjdR5Ie7znUBNxgT5dfGaDPlF2hkiFDeTONM7reBLaDzq77rqr9NsOoOppqARI3bXUcjUikueV8";
		const _arrayValuebG8Z2l6 = [_arrayValuecPHytv, _arrayValuequUSdAW, _arrayValueFr3QWYu]
		const _returnValueyWy4MNI = [_arrayValuebG8Z2l6]
		const _getAllEdgesQZMajli = () => { return _returnValueyWy4MNI };
		const _graphgGnBkOf = {
			"getAllVertices": _getAllVerticesxEtR4Tz,
		"getAllEdges": _getAllEdgesQZMajli
	}
		const _returnValueIlwD21L = await detectUndirectedCycleUsingDisjointSet(_graphgGnBkOf)
	});
})