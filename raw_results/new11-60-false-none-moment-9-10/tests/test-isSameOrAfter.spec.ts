export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputOSJ9gn = "cbPupEw6ozGJTLCpwWnTdPIKATUHrVHc3y6u5IOmgmXUDVUBypfwXdQPJePn4";
		const _unitsgd6CkTI = -3.638941670294332;
		const _returnValueXAjszOz = await isSameOrAfter(_inputOSJ9gn, _unitsgd6CkTI)
	});
})