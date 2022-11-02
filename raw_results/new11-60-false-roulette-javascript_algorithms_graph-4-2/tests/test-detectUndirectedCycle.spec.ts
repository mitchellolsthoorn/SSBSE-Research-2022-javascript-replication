export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueFPWIHcI = false;
		const _arrayValueRnwIGIu = {
		
	}
		const _returnValueYaNbzE = undefined;
		const _arrayValueehbW7BQ = () => { return _returnValueYaNbzE };
		const _arrayValueC5WQlcV = [_arrayValueFPWIHcI, _arrayValueRnwIGIu, _arrayValueehbW7BQ]
		const _arrayValueK6rWW3 = undefined;
		const _returnValueecBnYw = [_arrayValueC5WQlcV, _arrayValueK6rWW3]
		const _getAllVerticesL6zJLV4 = () => { return _returnValueecBnYw };
		const _graphieeQxhR = {
			"getAllVertices": _getAllVerticesL6zJLV4
	}
		const _returnValueVMbbQZH = await detectUndirectedCycle(_graphieeQxhR)
	});
})