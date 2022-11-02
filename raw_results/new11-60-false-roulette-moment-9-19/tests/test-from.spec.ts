export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const __isUTCu1Tz5AB = true;
		const _arrayValuem31c9CP = null;
		const __offseti5Mshfi = [_arrayValuem31c9CP]
		const _returnValuen9NthUJ = []
		const _isValidtw8G5Sc = () => { return _returnValuen9NthUJ };
		const _timeJ1xJxkU = {
			"_isUTC": __isUTCu1Tz5AB,
		"_offset": __offseti5Mshfi,
		"isValid": _isValidtw8G5Sc
	}
		const _withoutSuffixaKqfSK2 = undefined;
		const _returnValueIMz7v5k = await from(_timeJ1xJxkU, _withoutSuffixaKqfSK2)
	});
})