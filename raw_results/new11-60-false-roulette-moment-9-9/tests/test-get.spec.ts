export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueNzkb1Gc = "SYtrRBkkucwNtMbO6ug6PlHeQv4PopIv2DlPrtRC4UtHxZwk9irbYcpd2BTQlEuODfAV2rgX";
		const _isValidJVlp5W6 = () => { return _returnValueNzkb1Gc };
		const _returnValueNDaUMOZ = null;
		const _dayT6DOlk = () => { return _returnValueNDaUMOZ };
		const _returnValueWoxEzj = null;
		const _localeDataabQHRlS = () => { return _returnValueWoxEzj };
		const _returnValueqrBYyIG = true;
		const _returnValuerjk9zU = () => { return _returnValueqrBYyIG };
		const _addtQzowZh = () => { return _returnValuerjk9zU };
		const _momB3bU6Ic = {
			"isValid": _isValidJVlp5W6,
		"day": _dayT6DOlk,
		"localeData": _localeDataabQHRlS,
		"add": _addtQzowZh
	}
		const _unitLcPsnP = 7.87103140052578;
		const _returnValueYUVJ8W = await get(_momB3bU6Ic, _unitLcPsnP)
	});
})