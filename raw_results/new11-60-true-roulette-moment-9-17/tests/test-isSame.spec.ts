export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputkm85EAF = 3.715349980001614;
		const _unitscF5ZPKv = "cWYH99";
		const _returnValueAnAKFa8 = await isSame(_inputkm85EAF, _unitscF5ZPKv)
	});
})