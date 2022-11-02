export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValuebdJ4icw = undefined;
		const _graphf21hndh = [_arrayValuebdJ4icw]
		const _returnValueOWO9CSL = await kruskal(_graphf21hndh)
	});

	it('test for kruskal', async () => {
		const _isDirectedtpJgJ6u = 5.808504703133661;
		const _returnValueLhMZ12W = "MczTLXyctDHLXuyj9DapEmTwj5PrSo62i5IJ19w34pnfw4gAttB5lyXng";
		const _getAllEdgesAnLRPtZ = () => { return _returnValueLhMZ12W };
		const _returnValueG41Irv1 = {
		
	}
		const _getAllVerticesAAPEFmT = () => { return _returnValueG41Irv1 };
		const _graphXA1LzV = {
			"isDirected": _isDirectedtpJgJ6u,
		"getAllEdges": _getAllEdgesAnLRPtZ,
		"getAllVertices": _getAllVerticesAAPEFmT
	}
		const _returnValueUtlAJj2 = await kruskal(_graphXA1LzV)
	});

	it('test for kruskal', async () => {
		const _isDirectedLrr3Eol = false;
		const _returnValueDlPniXn = "gwrtDpRrKSoTtzW5ruHeiPOQ3g3wu2HodppQosn3Ic2vYiXlWpyRb9f8dUoQcuwx";
		const _getAllEdgeschq2Nzi = () => { return _returnValueDlPniXn };
		const _returnValueMUPCpif = true;
		const _getAllVerticesYAYwVZG = () => { return _returnValueMUPCpif };
		const _graphFdp3BY = {
			"isDirected": _isDirectedLrr3Eol,
		"getAllEdges": _getAllEdgeschq2Nzi,
		"getAllVertices": _getAllVerticesYAYwVZG
	}
		const _returnValueS8YUbfV = await kruskal(_graphFdp3BY)
	});
})