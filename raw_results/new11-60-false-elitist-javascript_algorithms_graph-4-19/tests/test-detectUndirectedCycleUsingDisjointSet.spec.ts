export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _getAllVerticesYOAmXUR = false;
		const _returnValueIpG2FrM = "MYhA1c4CqWewd";
		const _getAllEdgese2VOOO = () => { return _returnValueIpG2FrM };
		const _graphBwLbtpq = {
			"getAllVertices": _getAllVerticesYOAmXUR,
		"getAllEdges": _getAllEdgese2VOOO
	}
		const _returnValuen6ZNdBr = await detectUndirectedCycleUsingDisjointSet(_graphBwLbtpq)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueVYGAVQ5 = []
		const _getAllVerticesaykZ6mM = () => { return _returnValueVYGAVQ5 };
		const _returnValueR6EhLZ0 = true;
		const _getAllEdgesKYC8cI1 = () => { return _returnValueR6EhLZ0 };
		const _graphUeiWfR = {
			"getAllVertices": _getAllVerticesaykZ6mM,
		"getAllEdges": _getAllEdgesKYC8cI1
	}
		const _returnValueO3kn2zI = await detectUndirectedCycleUsingDisjointSet(_graphUeiWfR)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuefIi8E2 = []
		const _getAllVerticesHHhdlbd = () => { return _returnValuefIi8E2 };
		const _arrayValueOSOkmCw = null;
		const _arrayValueZB0pZfw = 8.860908045390403;
		const _arrayValueCye8tIS = -1.5560531287205084;
		const _arrayValuewPH0Hzk = undefined;
		const _returnValuemubHZMr = [_arrayValueOSOkmCw, _arrayValueZB0pZfw, _arrayValueCye8tIS, _arrayValuewPH0Hzk]
		const _getAllEdgesz2dAvnn = () => { return _returnValuemubHZMr };
		const _graphsLQBS2J = {
			"getAllVertices": _getAllVerticesHHhdlbd,
		"getAllEdges": _getAllEdgesz2dAvnn
	}
		const _returnValuexjqvrUS = await detectUndirectedCycleUsingDisjointSet(_graphsLQBS2J)
	});
})