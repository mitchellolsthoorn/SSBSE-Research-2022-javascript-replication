export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValuepVUy5rV = "f6pvXvVdqL2TmQ2eLU2L3lasYaspXvAmmjOnm4qr0XVpAex8C5UHzLVViYu3OfiHxO6d64b5ofTEqMZocINJCA3";
		const _arrayValueQMECPLO = -4.321094187244485;
		const _returnValuew7eluRe = [_arrayValuepVUy5rV, _arrayValueQMECPLO]
		const _isValidzOFPfqk = () => { return _returnValuew7eluRe };
		const _momnsPGNRo = {
			"isValid": _isValidzOFPfqk
	}
		const _unitD6jiyEH = 2.8624855025732714;
		const _returnValuebiOi0L9 = await get(_momnsPGNRo, _unitD6jiyEH)
	});
})