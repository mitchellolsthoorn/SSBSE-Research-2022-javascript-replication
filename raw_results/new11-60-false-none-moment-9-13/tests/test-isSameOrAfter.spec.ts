export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputUSK2Sh1 = undefined;
		const _unitsRP9GTlX = undefined;
		const _returnValuenABsCG = await isSameOrAfter(_inputUSK2Sh1, _unitsRP9GTlX)
	});
})