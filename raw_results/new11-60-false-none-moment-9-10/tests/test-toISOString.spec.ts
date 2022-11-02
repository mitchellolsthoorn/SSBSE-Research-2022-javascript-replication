export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _arrayValuedca9pQw = 4.5686929497068185;
		const _returnValuejdZhOi5 = undefined;
		const _arrayValueUXXDPLv = () => { return _returnValuejdZhOi5 };
		const _keepOffsetyKOkR5n = [_arrayValuedca9pQw, _arrayValueUXXDPLv]
		const _returnValuehj9ChzL = await toISOString(_keepOffsetyKOkR5n)
	});
})