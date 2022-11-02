export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const __offsetT4b2S60 = 8.475972019874018;
		const __isUTCfWRv9V1 = undefined;
		const __changeInProgressjgwCp1e = {
		
	}
		const _returnValuebbxwElx = {
		
	}
		const _returnValueG1NZuoo = () => { return _returnValuebbxwElx };
		const _isValids8VE3fH = () => { return _returnValueG1NZuoo };
		const _arrayValuecbDBVIv = null;
		const _returnValueBpqL7Hl = [_arrayValuecbDBVIv]
		const _addRkMpkXd = () => { return _returnValueBpqL7Hl };
		const _mommEIekeB = {
			"_offset": __offsetT4b2S60,
		"_isUTC": __isUTCfWRv9V1,
		"_changeInProgress": __changeInProgressjgwCp1e,
		"isValid": _isValids8VE3fH,
		"add": _addRkMpkXd
	}
		const _unitJGyVyGz = "ySrSr71BEgs3SVdQAkmDImeBC61sTDDBO0eqNgNLiAxFZpJM4gET9XLaPA3Cp2kbXIUTlMYKU7FeEJzRUfErluLgCfbOcaQg";
		const _returnValueN9o25M = await get(_mommEIekeB, _unitJGyVyGz)
	});
})