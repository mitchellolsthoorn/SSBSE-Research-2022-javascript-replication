export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueFesC9LU = true;
		const _arrayValuevX3v5UJ = -5.6988018608259985;
		const _graphkj92W4w = [_arrayValueFesC9LU, _arrayValuevX3v5UJ]
		const _returnValueTfSsexN = await detectDirectedCycle(_graphkj92W4w)
	});
})