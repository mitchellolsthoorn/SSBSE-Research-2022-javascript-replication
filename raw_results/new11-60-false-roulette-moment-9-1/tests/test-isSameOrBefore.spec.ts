export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueJErPxlJ = 1.3981179920792002;
		const _arrayValuevcPdQXt = -4.256731089606256;
		const _inputjP82gp9 = [_arrayValueJErPxlJ, _arrayValuevcPdQXt]
		const _unitsLyY75Wy = "u8bK8E4NSi2WgX7lT9zlvqcF4myVf5KdzxFXLRk7yBNBhtJLUVf2IENhTzx8on1OF4vzWv";
		const _returnValuejh7cqVz = await isSameOrBefore(_inputjP82gp9, _unitsLyY75Wy)
	});
})