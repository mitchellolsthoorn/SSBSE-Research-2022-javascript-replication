export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphi9qm1Za = undefined;
		const _returnValueFEqQ0xL = await kruskal(_graphi9qm1Za)
	});

	it('test for kruskal', async () => {
		const _isDirectedZjFpfvJ = -4.339443040863184;
		const _getAllEdgesH0ibsOS = {
		
	}
		const _returnValueC3GoCFy = true;
		const _getAllVertices2uZtwD = () => { return _returnValueC3GoCFy };
		const _graph8y5R4X = {
			"isDirected": _isDirectedZjFpfvJ,
		"getAllEdges": _getAllEdgesH0ibsOS,
		"getAllVertices": _getAllVertices2uZtwD
	}
		const _returnValueNzoDRxk = await kruskal(_graph8y5R4X)
	});

	it('test for kruskal', async () => {
		const _isDirectedoS9pGXF = undefined;
		const _returnValuext6wVDb = "ARtnQF4";
		const _getAllEdgesnyRR424 = () => { return _returnValuext6wVDb };
		const _returnValueeO8aeSg = "4daunDp80tZqZ8ebm";
		const _getAllVerticesdMAcSRy = () => { return _returnValueeO8aeSg };
		const _graphSe0N2cQ = {
			"isDirected": _isDirectedoS9pGXF,
		"getAllEdges": _getAllEdgesnyRR424,
		"getAllVertices": _getAllVerticesdMAcSRy
	}
		const _returnValueq2KXcb = await kruskal(_graphSe0N2cQ)
	});
})