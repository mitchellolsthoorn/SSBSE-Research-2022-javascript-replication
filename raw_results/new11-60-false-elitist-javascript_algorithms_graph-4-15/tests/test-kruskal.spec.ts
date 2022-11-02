export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValuev5LhtyJ = {
		
	}
		const _returnValueN1SYx8c = [_arrayValuev5LhtyJ]
		const _graphJLBag8b = () => { return _returnValueN1SYx8c };
		const _returnValueo73S3gM = await kruskal(_graphJLBag8b)
	});

	it('test for kruskal', async () => {
		const _isDirectedrI3zqfN = -2.7642450348472334;
		const _getAllEdgesIgPZI3M = true;
		const _returnValuejoACdsx = "IbmGthmDKV1T4i9hyQzB1lubHCA1spL2A3NcQdJU";
		const _getAllVerticesKsvh5pa = () => { return _returnValuejoACdsx };
		const _graphjzI3Jq8 = {
			"isDirected": _isDirectedrI3zqfN,
		"getAllEdges": _getAllEdgesIgPZI3M,
		"getAllVertices": _getAllVerticesKsvh5pa
	}
		const _returnValueJXZJBEC = await kruskal(_graphjzI3Jq8)
	});

	it('test for kruskal', async () => {
		const _isDirectedpNUeHbq = null;
		const _returnValueMOfjSCz = "NQAcfM";
		const _getAllEdgesGxEJtGx = () => { return _returnValueMOfjSCz };
		const _returnValuejpeVhCE = true;
		const _getAllVerticesMQhkIu9 = () => { return _returnValuejpeVhCE };
		const _graphmEGuONn = {
			"isDirected": _isDirectedpNUeHbq,
		"getAllEdges": _getAllEdgesGxEJtGx,
		"getAllVertices": _getAllVerticesMQhkIu9
	}
		const _returnValueEc3zV8N = await kruskal(_graphmEGuONn)
	});
})