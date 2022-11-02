export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputJog4mtp = -7.953979754750954;
		const _formatws4BX6 = undefined;
		const _localeyjlJlR2 = null;
		const _isUTCZnWlKQE = true;
		const _strictkf11a5o = true;
		const __iAPsNtBA = undefined;
		const __fw4m6nPI = null;
		const __localeSGM1Moj = false;
		const __isUTCaQ0W4kQ = null;
		const __strictMNRCvfD = undefined;
		const _confignFdz3yO = {
			"input": _inputJog4mtp,
		"format": _formatws4BX6,
		"locale": _localeyjlJlR2,
		"isUTC": _isUTCZnWlKQE,
		"strict": _strictkf11a5o,
		"_i": __iAPsNtBA,
		"_f": __fw4m6nPI,
		"_locale": __localeSGM1Moj,
		"_isUTC": __isUTCaQ0W4kQ,
		"_strict": __strictMNRCvfD
	}
		const _returnValuelm9HuRU = await configFromObject(_confignFdz3yO)
	});
})