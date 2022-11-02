export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueXbNJELe = {
		
	}
		const _arrayValuefJbOcYn = "1RwaKuOQKOYOPGm81PMtXOUrR10vlBwJomUccvOhQUuw4iwCKrLUcoezdIDACj2Q";
		const _arrayValuePunlZ3D = true;
		const _arrayValueLX2kkz = "O1ppOp7VPaptVlO";
		const _arrayValuetg5hXNh = {
		
	}
		const _arrayValueqvWrQFT = [_arrayValuePunlZ3D, _arrayValueLX2kkz, _arrayValuetg5hXNh]
		const _graphrAjKesL = [_arrayValueXbNJELe, _arrayValuefJbOcYn, _arrayValueqvWrQFT]
		const _returnValueLhnCmMR = await detectUndirectedCycle(_graphrAjKesL)
	});
})