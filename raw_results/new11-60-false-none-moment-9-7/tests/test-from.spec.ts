export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _timeKnLRkQ4 = "ZAVVs9W8IFLcd4oTJedbYYzuTdakX3BprxNaxfT4nR11mem";
		const _withoutSuffixR6zJcnQ = -0.14282890351874755;
		const _returnValuepfZS4Fo = await from(_timeKnLRkQ4, _withoutSuffixR6zJcnQ)
	});
})