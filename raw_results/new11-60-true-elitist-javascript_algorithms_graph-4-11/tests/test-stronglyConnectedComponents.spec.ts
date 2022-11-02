export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuee125T7 = "TWJ0Hb2DHXUcAezOgvWmjBBwqIfsycJe8lReXgj4Z";
		const _reverseOuV9YdY = () => { return _returnValuee125T7 };
		const _grapheFehE5 = {
			"reverse": _reverseOuV9YdY
	}
		const _returnValuelByv60Y = await stronglyConnectedComponents(_grapheFehE5)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedjN1sbi0 = true;
		const _graphfCLJWcJ = new Graph(_isDirectedjN1sbi0)
		const _returnValuexnjtrFK = await _graphfCLJWcJ.getAllEdges()
		const _returnValueFdlezBZ = await stronglyConnectedComponents(_graphfCLJWcJ)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedZ5YnIUz = undefined;
		const _graphyTohiR = new Graph(_isDirectedZ5YnIUz)
		const _returnValueoBaZwfU = await _graphyTohiR.getAllEdges()
		const _arrayValuewhUDkuu = 8.342584546819293;
		const _arrayValueZqj6t0z = undefined;
		const _arrayValueRAVor4A = true;
		const _arrayValueI6PjeV = "ChXM8Zimbnigo8ch1mmUGkgI5fqMnAyVsM6qbzXgdedl38pLKYztABWKJklYxgj3";
		const _returnValueopCx2kk = false;
		const _arrayValueKVPfSi8 = () => { return _returnValueopCx2kk };
		const _returnValuePMHDWYV = [_arrayValuewhUDkuu, _arrayValueZqj6t0z, _arrayValueRAVor4A, _arrayValueI6PjeV, _arrayValueKVPfSi8]
		const _valuePEevgp0 = () => { return _returnValuePMHDWYV };
		const _newVertexqqJPVCI = new GraphVertex(_valuePEevgp0)
		const _requiredEdge4JY7AO = "TCyombCVSMJr9yU2Ufu8xtJtCeuVFxhlHsUTPATl1h3xPRoxwSEsRs6";
		const _returnValueljM5Ae = await _newVertexqqJPVCI.hasEdge(_requiredEdge4JY7AO)
		const _returnValueBPiNfk1 = await _newVertexqqJPVCI.getKey()
		const _returnValuereN3pEB = await _newVertexqqJPVCI.getEdges()
		const _requiredEdgevEf1TVK = "Fy4YH";
		const _returnValuetc77BKF = await _newVertexqqJPVCI.hasEdge(_requiredEdgevEf1TVK)
		const _returnValueDhwecus = await _graphyTohiR.addVertex(_newVertexqqJPVCI)
		const _returnValuecVIjzz = await _graphyTohiR.getVerticesIndices()
		const _returnValueGVz5yW6 = await stronglyConnectedComponents(_graphyTohiR)
	});
})