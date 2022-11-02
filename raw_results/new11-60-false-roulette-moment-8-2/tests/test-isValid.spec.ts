export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputMQMBqbp = -2.940404449046742;
		const _formatOJZVRuV = "whgXbYjhL7ZsbYYyh5nT2gVW0WWMPFVnJmdKlJKjlQ29OGUf5MantJA1mM0GhSMo6kUE2h6urmxEIfkx";
		const _localepen2FXT = false;
		const _isUTCnbxhx23 = "Z7OcGNfxbrm3v4faQ78zVN02i2PQkhfBgZzkqGptqQbkMMrszSWDUFVr80ShsYhqLwoc4BudbEu5bww66eg";
		const _returnValueavMS0x = 7.848811690588832;
		const _strictDtQMJYS = () => { return _returnValueavMS0x };
		const __iMO4DiLG = null;
		const _returnValueLxNqaM = null;
		const __fw6ybK89 = () => { return _returnValueLxNqaM };
		const __localelx9zv5I = 2.019459611798064;
		const __isUTCRhZffY8 = undefined;
		const __strictU9NYYTe = 7.278290853277728;
		const _mmsVLBav = {
			"input": _inputMQMBqbp,
		"format": _formatOJZVRuV,
		"locale": _localepen2FXT,
		"isUTC": _isUTCnbxhx23,
		"strict": _strictDtQMJYS,
		"_i": __iMO4DiLG,
		"_f": __fw6ybK89,
		"_locale": __localelx9zv5I,
		"_isUTC": __isUTCRhZffY8,
		"_strict": __strictU9NYYTe
	}
		const _returnValuewnw0jRo = await isValid(_mmsVLBav)
	});
})