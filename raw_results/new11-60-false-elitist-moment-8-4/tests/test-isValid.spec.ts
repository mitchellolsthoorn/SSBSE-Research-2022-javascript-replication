export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _input9nxY2x = false;
		const _returnValuejHaXnVo = -9.377505848851;
		const _formatah6aYrS = () => { return _returnValuejHaXnVo };
		const _localeYMQvidI = "p9SNKQHMuEOBQ2xXQY5H15JYTYHbUdACFtPfvavmSIOzw22StWj";
		const _isUTCrLxNpXw = 4.94430903232972;
		const _arrayValueIq9eRbr = true;
		const _arrayValuejQmlPnl = false;
		const _arrayValueOWhXpXA = [_arrayValueIq9eRbr, _arrayValuejQmlPnl]
		const _arrayValueKcuQTRS = true;
		const _arrayValuee9MUScx = [_arrayValueKcuQTRS]
		const _strictzCQWyNg = [_arrayValueOWhXpXA, _arrayValuee9MUScx]
		const __ideebSqf = null;
		const __fdKnaNxP = undefined;
		const __localeFNkY263 = {
		
	}
		const __isUTCr6We5Q6 = -5.220055035000165;
		const __strictiudxdi3 = undefined;
		const _mdDPSsNJ = {
			"input": _input9nxY2x,
		"format": _formatah6aYrS,
		"locale": _localeYMQvidI,
		"isUTC": _isUTCrLxNpXw,
		"strict": _strictzCQWyNg,
		"_i": __ideebSqf,
		"_f": __fdKnaNxP,
		"_locale": __localeFNkY263,
		"_isUTC": __isUTCr6We5Q6,
		"_strict": __strictiudxdi3
	}
		const _returnValueoUgaSfP = await isValid(_mdDPSsNJ)
	});
})