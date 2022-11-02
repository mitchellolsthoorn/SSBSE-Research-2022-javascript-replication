export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueujHnVa7 = null;
		const _arrayValuedGK4R9n = "jSnRnm4xY3Cuh60rNzsow4irEXkDWBpjhB6R639frBAdGRjlgvCesBucwKplrY815I8sNlUP9R9e9RHEum34CcW8E5";
		const _arrayValuelqN6KHd = -7.058000873269054;
		const _arrayValuePfP7psu = [_arrayValueujHnVa7, _arrayValuedGK4R9n, _arrayValuelqN6KHd]
		const _arrayValueOMlnZs9 = [_arrayValuePfP7psu]
		const _arrayValuePt6oI4d = undefined;
		const _arrayValueRbGYxo9 = undefined;
		const _graphDpD89X3 = [_arrayValueOMlnZs9, _arrayValuePt6oI4d, _arrayValueRbGYxo9]
		const _returnValuepYsMD5g = await detectUndirectedCycle(_graphDpD89X3)
	});
})