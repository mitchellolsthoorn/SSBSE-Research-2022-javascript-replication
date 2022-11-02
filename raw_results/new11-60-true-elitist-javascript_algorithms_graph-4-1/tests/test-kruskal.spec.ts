export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedR5VQBth = true;
		const _arrayValueFeghQfZ = []
		const _arrayValuezWtSLXq = undefined;
		const _arrayValueAQUOP5f = true;
		const _arrayValuexp2WZRr = "NY3WA8h1UvyBuyS6xq2su5Ps3SWKTjfWJqUJ31Ox3gSJ8VSHmlEtUimz0lU9VUNSSzNsVZcrReOI6IkgJvRjuTHwTWv";
		const _returnValueoDbRdxR = [_arrayValueFeghQfZ, _arrayValuezWtSLXq, _arrayValueAQUOP5f, _arrayValuexp2WZRr]
		const _getAllEdgesSODdor = () => { return _returnValueoDbRdxR };
		const _arrayValueBUnypJV = undefined;
		const _arrayValueJ6eWfq = -3.4243588503706635;
		const _returnValueyznM92 = null;
		const _arrayValueOcT05zQ = () => { return _returnValueyznM92 };
		const _returnValueS1kZf5Z = [_arrayValueBUnypJV, _arrayValueJ6eWfq, _arrayValueOcT05zQ]
		const _getAllVerticesRXSU4uw = () => { return _returnValueS1kZf5Z };
		const _graphOPmSZQJ = {
			"isDirected": _isDirectedR5VQBth,
		"getAllEdges": _getAllEdgesSODdor,
		"getAllVertices": _getAllVerticesRXSU4uw
	}
		const _returnValueBMGiVdM = await kruskal(_graphOPmSZQJ)
	});

	it('test for kruskal', async () => {
		const _isDirectedzr36c4Y = null;
		const _returnValueaNwXJuL = "HeWVRb1DQfmhoDr7xGiOjBnoVrpwiQlVc2Uc4xKd8i8mVN3kfUPq2QAjzxl2pCx3pBzcyehtgusqvOLIpVFD";
		const _getAllEdgesj8PqETt = () => { return _returnValueaNwXJuL };
		const _returnValuer8UtBnR = null;
		const _getAllVerticesODKVDlY = () => { return _returnValuer8UtBnR };
		const _graphmHtd4Zt = {
			"isDirected": _isDirectedzr36c4Y,
		"getAllEdges": _getAllEdgesj8PqETt,
		"getAllVertices": _getAllVerticesODKVDlY
	}
		const _returnValueWlWLPq8 = await kruskal(_graphmHtd4Zt)
	});
})