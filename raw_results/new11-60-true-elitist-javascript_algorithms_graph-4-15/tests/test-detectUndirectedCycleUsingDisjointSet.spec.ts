export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuea835FC = "3pK";
		const _getAllVerticesTjADEb9 = () => { return _returnValuea835FC };
		const _returnValuei6447BJ = {
		
	}
		const _getAllEdgesuiyi8Y0 = () => { return _returnValuei6447BJ };
		const _graphgh3940Q = {
			"getAllVertices": _getAllVerticesTjADEb9,
		"getAllEdges": _getAllEdgesuiyi8Y0
	}
		const _returnValueiXDYCUh = await detectUndirectedCycleUsingDisjointSet(_graphgh3940Q)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueHizZmWe = []
		const _getAllVerticesPbiOiVz = () => { return _returnValueHizZmWe };
		const _arrayValueVfeTFUK = {
		
	}
		const _arrayValueGEumE0X = null;
		const _arrayValuezwI0qjb = -6.796887897863257;
		const _arrayValueiiEFKSP = "wHhZ1FqWgwe3rSFoEzD9Bsw6sdvRdMIAHsOjBXgHkiaPRRwG53df7QWYjLJ";
		const _arrayValueK6Io8GL = [_arrayValueGEumE0X, _arrayValuezwI0qjb, _arrayValueiiEFKSP]
		const _returnValue414oRa = [_arrayValueVfeTFUK, _arrayValueK6Io8GL]
		const _getAllEdgesE6R0aB7 = () => { return _returnValue414oRa };
		const _graphJF9ypPK = {
			"getAllVertices": _getAllVerticesPbiOiVz,
		"getAllEdges": _getAllEdgesE6R0aB7
	}
		const _returnValuerliCms = await detectUndirectedCycleUsingDisjointSet(_graphJF9ypPK)
	});
})