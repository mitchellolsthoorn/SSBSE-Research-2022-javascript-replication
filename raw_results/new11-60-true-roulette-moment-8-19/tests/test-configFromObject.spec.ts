export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValueYY0owK6 = null;
		const _arrayValueTmFsjCj = {
		
	}
		const _utcOffsetmy4dkuQ = [_arrayValueYY0owK6, _arrayValueTmFsjCj]
		const _returnValuesLgrOMN = undefined;
		const __tzmM84hMb0 = () => { return _returnValuesLgrOMN };
		const __ijLk82Ru = undefined;
		const _configZXzCfJG = {
			"utcOffset": _utcOffsetmy4dkuQ,
		"_tzm": __tzmM84hMb0,
		"_i": __ijLk82Ru
	}
		const _returnValuecEaEtRF = await configFromObject(_configZXzCfJG)
	});
})