export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputAV2Ifxi = undefined;
		const _formatJM0PGna = 0.8935656918019248;
		const _localeOhvBSZ9 = "g5rqAg";
		const _isUTCFjx5yP = false;
		const _strictAFfVXxJ = undefined;
		const __iZOP5ziI = undefined;
		const __fGQAYQgK = -2.592113191849407;
		const __localegf2tRxO = 1.575341735055897;
		const _returnValueQgjipM = "UQRk1MWXUN";
		const __isUTCLigGcc4 = () => { return _returnValueQgjipM };
		const _arrayValuelXMyQEZ = null;
		const __strictVlwLY1u = [_arrayValuelXMyQEZ]
		const _mSvdJu14 = {
			"input": _inputAV2Ifxi,
		"format": _formatJM0PGna,
		"locale": _localeOhvBSZ9,
		"isUTC": _isUTCFjx5yP,
		"strict": _strictAFfVXxJ,
		"_i": __iZOP5ziI,
		"_f": __fGQAYQgK,
		"_locale": __localegf2tRxO,
		"_isUTC": __isUTCLigGcc4,
		"_strict": __strictVlwLY1u
	}
		const _returnValueww6Qla8 = await isValid(_mSvdJu14)
	});
})