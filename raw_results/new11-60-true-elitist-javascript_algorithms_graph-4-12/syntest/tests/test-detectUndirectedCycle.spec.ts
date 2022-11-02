export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValuedyGUwpl = undefined;
		const _arrayValuej3hRFp2 = "eeOb1rTuQbwrqq8b37lhvz8e6Z2AqrIevLIGLAYqHvksqIbGy7Y";
		const _arrayValuedGMd8S = undefined;
		const _arrayValuekAHJJAy = {
		
	}
		const _returnValueR1LmYls = [_arrayValuedyGUwpl, _arrayValuej3hRFp2, _arrayValuedGMd8S, _arrayValuekAHJJAy]
		const _getAllVerticesZhwmGJu = () => { return _returnValueR1LmYls };
		const _graphyUGyJQA = {
			"getAllVertices": _getAllVerticesZhwmGJu
	}
		const _returnValueSaqBQyl = await detectUndirectedCycle(_graphyUGyJQA)
	});
})