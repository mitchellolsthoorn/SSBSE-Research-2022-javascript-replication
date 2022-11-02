export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValuezFPfM8K = undefined;
		const _arrayValueyfAV49D = null;
		const _arrayValueyc2vev6 = undefined;
		const __isUTCFMOL9OX = [_arrayValuezFPfM8K, _arrayValueyfAV49D, _arrayValueyc2vev6]
		const __offsetxE4ABG2 = undefined;
		const _returnValueNP77pN = undefined;
		const _returnValueZ7fnON2 = () => { return _returnValueNP77pN };
		const _isValidxKBDOzn = () => { return _returnValueZ7fnON2 };
		const _momOILitWI = {
			"_isUTC": __isUTCFMOL9OX,
		"_offset": __offsetxE4ABG2,
		"isValid": _isValidxKBDOzn
	}
		const _unit2tDpa6 = 3.347953930464012;
		const _returnValueQZ6HkZ7 = await get(_momOILitWI, _unit2tDpa6)
	});
})