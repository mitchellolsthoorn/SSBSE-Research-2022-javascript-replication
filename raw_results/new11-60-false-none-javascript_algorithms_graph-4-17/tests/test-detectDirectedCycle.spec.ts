export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueovGUJv = false;
		const _arrayValuelaJsfoC = () => { return _returnValueovGUJv };
		const _arrayValueAgF1KCl = null;
		const _graphJQAinG6 = [_arrayValuelaJsfoC, _arrayValueAgF1KCl]
		const _returnValueutrEomO = await detectDirectedCycle(_graphJQAinG6)
	});
})