export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphpo0wryl = "yhGGcD1bqjvyVO1V7OMTwgcF9AjmPfmSzQDlx9N4";
		const _returnValueHbzBM6n = await detectDirectedCycle(_graphpo0wryl)
	});
})