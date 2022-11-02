export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputXNINm1u = true;
		const _unitsodQViF = -6.191582105060551;
		const _returnValueY4u45Tq = await isSameOrAfter(_inputXNINm1u, _unitsodQViF)
	});
})