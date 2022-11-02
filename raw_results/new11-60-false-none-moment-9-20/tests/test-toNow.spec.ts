export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _arrayValueiERgVT1 = -6.665376862852996;
		const _arrayValueshVWeOg = null;
		const _arrayValueIh8dVK6 = null;
		const _withoutSuffixAfgCtgt = [_arrayValueiERgVT1, _arrayValueshVWeOg, _arrayValueIh8dVK6]
		const _returnValueQGLsk9g = await toNow(_withoutSuffixAfgCtgt)
	});
})