export {}
import checkOverflow from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/check-overflow.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('checkOverflow', () => {
	it('test for checkOverflow', async () => {
		const _mAHF4ma8 = null;
		const _returnValueWjZR7Bg = await checkOverflow(_mAHF4ma8)
	});

	it('test for checkOverflow', async () => {
		const _arrayValueWwIwob8 = false;
		const _arrayValueUmiTASK = undefined;
		const _mf9l6qv4 = [_arrayValueWwIwob8, _arrayValueUmiTASK]
		const _returnValueX5XZ6Lz = await checkOverflow(_mf9l6qv4)
	});
})