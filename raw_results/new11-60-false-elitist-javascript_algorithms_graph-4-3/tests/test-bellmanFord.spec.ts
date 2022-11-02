export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphtFNXV4k = "lkQiJOwGv0sBiwRrP7x66cagUrBPLmilijvErTkO2yh2ed5wnVMhQByri";
		const _returnValue38ZS9F = undefined;
		const _getKeyUKukdJ = () => { return _returnValue38ZS9F };
		const _startVertexfweF2D6 = {
			"getKey": _getKeyUKukdJ
	}
		const _returnValueiXpjnsT = await bellmanFord(_graphtFNXV4k, _startVertexfweF2D6)
	});

	it('test for bellmanFord', async () => {
		const _returnValue1h9FDE = []
		const _getAllVerticesGbRPaMq = () => { return _returnValue1h9FDE };
		const _returnValueiA8i7Lg = undefined;
		const _getVertexByKeyYWdaUGV = () => { return _returnValueiA8i7Lg };
		const _returnValue6fueFO = false;
		const _returnValuePqzC9GT = () => { return _returnValue6fueFO };
		const _getNeighborsrK6mPhJ = () => { return _returnValuePqzC9GT };
		const _returnValuelCMFFoY = -4.5191827428492415;
		const _findEdgebv2D80G = () => { return _returnValuelCMFFoY };
		const _graphCINyhnH = {
			"getAllVertices": _getAllVerticesGbRPaMq,
		"getVertexByKey": _getVertexByKeyYWdaUGV,
		"getNeighbors": _getNeighborsrK6mPhJ,
		"findEdge": _findEdgebv2D80G
	}
		const _returnValuew4uPryh = false;
		const _getKeyqhhMDe0 = () => { return _returnValuew4uPryh };
		const _startVertexBSZOkrt = {
			"getKey": _getKeyqhhMDe0
	}
		const _returnValuezhLyZjQ = await bellmanFord(_graphCINyhnH, _startVertexBSZOkrt)
	});
})