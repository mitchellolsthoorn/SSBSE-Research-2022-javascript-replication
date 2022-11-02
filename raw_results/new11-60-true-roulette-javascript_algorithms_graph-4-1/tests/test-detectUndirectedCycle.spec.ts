export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueY4vpDsA = "YTHtQw7HsbnCGdmGouxwip5fHoKxaKQmLZO4R5PIQMz5z3zaBcN9K89cuhH6OOf7SpypjvuCdNGIc4fxw";
		const _getAllVerticesq95etdr = () => { return _returnValueY4vpDsA };
		const _graphvRL0GVV = {
			"getAllVertices": _getAllVerticesq95etdr
	}
		const _returnValueVH2mBZ = await detectUndirectedCycle(_graphvRL0GVV)
	});
})