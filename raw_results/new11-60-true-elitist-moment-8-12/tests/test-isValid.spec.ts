export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputDilGRXy = undefined;
		const _returnValuecAHzMIO = false;
		const _formatnm0bd09 = () => { return _returnValuecAHzMIO };
		const _localesbPgB15 = undefined;
		const _isUTCk9aLumm = 9.945620828108208;
		const _strictLTsQaz = undefined;
		const __iwF9t8V0 = null;
		const __fnS7GspE = {
		
	}
		const __localeCOTCXVj = "KAIjJnrFWC2cGRLpfoEr9piaFeHTKZJvPOK2N9sTr51INGmWvxzzv7p";
		const _arrayValue4dkSYu = -7.972467632061603;
		const _arrayValueO9DRG6N = undefined;
		const _arrayValuekWn99eG = 9.413333181926337;
		const _arrayValuerMpYYgp = [_arrayValuekWn99eG]
		const _returnValuecfyIsWB = [_arrayValue4dkSYu, _arrayValueO9DRG6N, _arrayValuerMpYYgp]
		const __isUTCBsoAKnH = () => { return _returnValuecfyIsWB };
		const __strictqenuUp4 = {
		
	}
		const _mwM1gfJr = {
			"input": _inputDilGRXy,
		"format": _formatnm0bd09,
		"locale": _localesbPgB15,
		"isUTC": _isUTCk9aLumm,
		"strict": _strictLTsQaz,
		"_i": __iwF9t8V0,
		"_f": __fnS7GspE,
		"_locale": __localeCOTCXVj,
		"_isUTC": __isUTCBsoAKnH,
		"_strict": __strictqenuUp4
	}
		const _returnValueU5lFJe3 = await isValid(_mwM1gfJr)
	});
})