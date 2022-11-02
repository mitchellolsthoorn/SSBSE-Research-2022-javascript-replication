export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromSl5RZ1 = "VctvVuOOLoFLhE2sdsfw1IEKl98DvS2Z7f37CKVIzeL7KQ508hdXTKyKBN9Iux9ewATvldnv7nBYUnymnOuV72UmDQS5j";
		const _tomloucss = true;
		const _unitskenvr4 = false;
		const _arrayValueMavArwt = 6.743263793645699;
		const _arrayValueQTY3xh6 = "VGBXphuUbhb3il9pc5";
		const _inclusivitymxIXe93 = [_arrayValueMavArwt, _arrayValueQTY3xh6]
		const _returnValueNb2TLoz = await isBetween(_fromSl5RZ1, _tomloucss, _unitskenvr4, _inclusivitymxIXe93)
	});
})