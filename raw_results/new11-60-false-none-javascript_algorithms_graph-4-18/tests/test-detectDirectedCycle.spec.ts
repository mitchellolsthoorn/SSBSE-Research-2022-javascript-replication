export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueHpNhQqI = "AxG7DMGQHRfs";
		const _graphJtR1kZ9 = () => { return _returnValueHpNhQqI };
		const _returnValuewBIBJ4X = await detectDirectedCycle(_graphJtR1kZ9)
	});
})