export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedhFfhWja = undefined;
		const _returnValueDnpxnkN = true;
		const _getAllVerticesIyG47Yg = () => { return _returnValueDnpxnkN };
		const _graphHmDIbBT = {
			"isDirected": _isDirectedhFfhWja,
		"getAllVertices": _getAllVerticesIyG47Yg
	}
		const _returnValueps76MK = await prim(_graphHmDIbBT)
	});

	it('test for prim', async () => {
		const _isDirectedApgnF3 = "5lGGMN9ALeq1RCuhztFjBDxzWw1iA50gCeDZFXwJZklkBW5NFT4QXkhwI8saO1jJ2l3NKlE2YGKHWEqbH";
		const _returnValueMC4lq7Q = "VdrbI1q1uosbH";
		const _getAllVerticesNUKhBd9 = () => { return _returnValueMC4lq7Q };
		const _graphqhoD9wa = {
			"isDirected": _isDirectedApgnF3,
		"getAllVertices": _getAllVerticesNUKhBd9
	}
		const _returnValuecNoDU7u = await prim(_graphqhoD9wa)
	});
})