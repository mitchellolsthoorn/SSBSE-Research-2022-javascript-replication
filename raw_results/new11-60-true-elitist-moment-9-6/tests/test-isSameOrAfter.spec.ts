export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _arrayValuem9krRAr = 1.3317485008725622;
		const _arrayValueqzBaXHR = null;
		const _arrayValueIIFRIuD = [_arrayValueqzBaXHR]
		const _arrayValueMUbkcOe = -1.1739998394187605;
		const _returnValuezwQ7RKf = [_arrayValuem9krRAr, _arrayValueIIFRIuD, _arrayValueMUbkcOe]
		const _arrayValueBD5ngnV = () => { return _returnValuezwQ7RKf };
		const _inputhtcOP9x = [_arrayValueBD5ngnV]
		const _unitsMOghrbS = -6.190626495838776;
		const _returnValuec1indrJ = await isSameOrAfter(_inputhtcOP9x, _unitsMOghrbS)
	});
})