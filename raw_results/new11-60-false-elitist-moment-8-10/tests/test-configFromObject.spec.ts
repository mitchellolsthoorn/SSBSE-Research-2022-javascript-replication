export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputuyh6DoY = "9nTJAMRynB3vzPPcIR7ljXswySj6g5OZm3AnvvzqSz3lDnNGvqd9wK5SMxGSsjdHXqeIIEpggJwCjw6MJYnUfRbPrx";
		const _formatZf9JiTy = true;
		const _localeXYkxJae = "jMQ3UCt9bap7DVbPLbuHA";
		const _isUTCVcYba3 = 8.178043306913619;
		const _strictLzmCSD8 = null;
		const __io2TV6w = 2.307635509643779;
		const __fzs36X5 = "uaf8pTSBJBNONX6aTRoXEypUgvE9yaj4oJozgny2eSoIz8Mj5GclCENOQLjbuJQF9tovdk8sbjEgP93GFb8aLc2CXsH809mEhh";
		const __locales9ONC8 = -9.167066384157016;
		const __isUTCloUQor2 = undefined;
		const _arrayValueuGJuZ0d = null;
		const __strictbVqbum1 = [_arrayValueuGJuZ0d]
		const _configv6LJ0B4 = {
			"input": _inputuyh6DoY,
		"format": _formatZf9JiTy,
		"locale": _localeXYkxJae,
		"isUTC": _isUTCVcYba3,
		"strict": _strictLzmCSD8,
		"_i": __io2TV6w,
		"_f": __fzs36X5,
		"_locale": __locales9ONC8,
		"_isUTC": __isUTCloUQor2,
		"_strict": __strictbVqbum1
	}
		const _returnValuebE2RqU4 = await configFromObject(_configv6LJ0B4)
	});
})