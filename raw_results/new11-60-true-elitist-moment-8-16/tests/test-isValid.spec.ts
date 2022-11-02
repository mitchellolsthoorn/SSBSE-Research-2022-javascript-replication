export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputmOjTd6Z = null;
		const _formatdZSAERT = null;
		const _returnValueU4ClCik = "9DmgqS8WgtjGAy19DywaFnziqHrgIrSiaos45mnezqksp7QyKJowFM6zjPEPgV7l3H3IGCcD5R6ksOnYCEI";
		const _localeweaJm72 = () => { return _returnValueU4ClCik };
		const _returnValuerfupzI4 = null;
		const _isUTCQywaYhY = () => { return _returnValuerfupzI4 };
		const _stricto4CGi7j = "DpLtTLtpk8VPck6JQuU7w9ZIQlvVMqbYtPsYy4fTH";
		const __ixuJUTvi = true;
		const __fI4xkFHc = -0.9572425422152779;
		const __localeCcfRREV = null;
		const __isUTCNmXQMBZ = true;
		const __strictBtQqfFW = {
		
	}
		const _myXeD8xe = {
			"input": _inputmOjTd6Z,
		"format": _formatdZSAERT,
		"locale": _localeweaJm72,
		"isUTC": _isUTCQywaYhY,
		"strict": _stricto4CGi7j,
		"_i": __ixuJUTvi,
		"_f": __fI4xkFHc,
		"_locale": __localeCcfRREV,
		"_isUTC": __isUTCNmXQMBZ,
		"_strict": __strictBtQqfFW
	}
		const _returnValueRZGJwdH = await isValid(_myXeD8xe)
	});
})