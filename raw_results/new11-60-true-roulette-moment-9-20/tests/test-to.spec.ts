export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueIa9MLdg = 6.127683564896426;
		const _arrayValueP1zSaWK = () => { return _returnValueIa9MLdg };
		const _arrayValuebUVvv1J = true;
		const _arrayValuecXWPVe6 = null;
		const _arrayValuebMvS4Yh = undefined;
		const _returnValuecVRJRiV = true;
		const _arrayValuegQBLNfk = () => { return _returnValuecVRJRiV };
		const _arrayValueT8SMff = [_arrayValuebUVvv1J, _arrayValuecXWPVe6, _arrayValuebMvS4Yh, _arrayValuegQBLNfk]
		const _arrayValueayL5Dln = "Ue4gI7h1Y65FYuD8E6c3hpPjhMFf2mD8ulP6Q5gWQKp5DEvacSQr3Olt4v";
		const _returnValueRpjMi66 = [_arrayValueP1zSaWK, _arrayValueT8SMff, _arrayValueayL5Dln]
		const _isValidIFXmgD = () => { return _returnValueRpjMi66 };
		const _returnValueEA3No9r = "50vue5ojHDAzvcxQ8Fh5mh54ieautvqIo172eUU7tLBzZX2c6NvDhD9kdaR5fidFE5UOX6SeukkCFqK5yRdYbGyU";
		const _localeDvemYak = () => { return _returnValueEA3No9r };
		const _returnValueiwGWFlY = 4.936480063108968;
		const _localeDataCWcKu9g = () => { return _returnValueiwGWFlY };
		const _timeoDZ33W = {
			"isValid": _isValidIFXmgD,
		"locale": _localeDvemYak,
		"localeData": _localeDataCWcKu9g
	}
		const _withoutSuffix9hdACn = false;
		const _returnValueNK79JbK = await to(_timeoDZ33W, _withoutSuffix9hdACn)
	});
})