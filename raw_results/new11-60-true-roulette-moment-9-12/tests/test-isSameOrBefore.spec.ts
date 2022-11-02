export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputCOjqlBI = -6.435693923864693;
		const _unitsBDUUZO = false;
		const _returnValueMis6Qfj = await isSameOrBefore(_inputCOjqlBI, _unitsBDUUZO)
	});
})