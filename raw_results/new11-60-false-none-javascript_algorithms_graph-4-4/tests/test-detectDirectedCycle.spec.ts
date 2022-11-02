export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValue5jK93f = -0.32827451978829814;
		const _returnValuejxO7pH = () => { return _returnValue5jK93f };
		const _graphZqtxMaA = () => { return _returnValuejxO7pH };
		const _returnValueJaMYN2W = await detectDirectedCycle(_graphZqtxMaA)
	});
})