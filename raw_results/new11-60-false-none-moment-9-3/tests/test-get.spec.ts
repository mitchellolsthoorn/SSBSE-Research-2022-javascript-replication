export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValueXa3Uv6s = undefined;
		const _arrayValuenbnXXUM = -6.447783892276666;
		const _arrayValueKG6Rwam = true;
		const _arrayValueOANUsiZ = null;
		const _arrayValuecVro6uY = [_arrayValueXa3Uv6s, _arrayValuenbnXXUM, _arrayValueKG6Rwam, _arrayValueOANUsiZ]
		const _arrayValueianYheA = "NKwngwvDiqC6quyvSKQfGqkHRWFMAfXi3AaJVv3XYROASHP6mLBGeoePDsi1wUnvaPqLbQscQAIOpMxYQk1Eko";
		const _arrayValueP6ZWMJZ = false;
		const _momkQGXoCy = [_arrayValuecVro6uY, _arrayValueianYheA, _arrayValueP6ZWMJZ]
		const _unitxjdl2io = undefined;
		const _returnValuecba5nFh = await get(_momkQGXoCy, _unitxjdl2io)
	});
})