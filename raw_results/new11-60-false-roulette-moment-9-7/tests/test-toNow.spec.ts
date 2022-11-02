export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _returnValueAXWgyIA = []
		const _withoutSuffixVnCjHiI = () => { return _returnValueAXWgyIA };
		const _returnValueFgfv7F2 = await toNow(_withoutSuffixVnCjHiI)
	});
})