export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const __millisecondsYXksbc0 = undefined;
		const __daysZbzR36 = true;
		const __monthsdNieOl1 = false;
		const _isValidx7fehRF = null;
		const _timeye7KGF1 = {
			"_milliseconds": __millisecondsYXksbc0,
		"_days": __daysZbzR36,
		"_months": __monthsdNieOl1,
		"isValid": _isValidx7fehRF
	}
		const _withoutSuffixIL4WEe = false;
		const _returnValueosnPbIf = await to(_timeye7KGF1, _withoutSuffixIL4WEe)
	});
})