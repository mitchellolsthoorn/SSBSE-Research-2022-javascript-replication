export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValueSJKR14E = undefined;
		const _arrayValueC0nuuoc = false;
		const _returnValueF4J55xI = [_arrayValueSJKR14E, _arrayValueC0nuuoc]
		const _isValidlOPwC3o = () => { return _returnValueF4J55xI };
		const _timeJOvqUB3 = {
			"isValid": _isValidlOPwC3o
	}
		const _withoutSuffixskVowQf = "qsONb4NzKkkzQon4YJcAMwKuN7zNOgr3v716eumNKcRooqbnng1gf4qJE7UHq6INSaUKeyOaqU9V5AU";
		const _returnValuekettb7n = await from(_timeJOvqUB3, _withoutSuffixskVowQf)
	});
})