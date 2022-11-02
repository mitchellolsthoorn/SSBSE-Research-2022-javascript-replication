export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueQhwgt2A = "gSfsA8nyMYMVJyMHehdPQeMpPTiGcMbm3H";
		const _arrayValuefwDca2G = true;
		const _returnValueec4EcKl = [_arrayValueQhwgt2A, _arrayValuefwDca2G]
		const _getAllVerticesF1nTnH = () => { return _returnValueec4EcKl };
		const _graphCwY2VtJ = {
			"getAllVertices": _getAllVerticesF1nTnH
	}
		const _returnValuer6k6F6b = await detectUndirectedCycle(_graphCwY2VtJ)
	});
})