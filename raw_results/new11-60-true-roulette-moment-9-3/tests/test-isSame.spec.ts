export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputhrjSLZU = -8.265609598204938;
		const _unitsJQ1Akcp = "sLudD8mT3bY42erhcVGxMI7BDMyCdWTzHmRhw5J9TFJ9ob7NEkrk0Mrpn4qi8";
		const _returnValueKasJT4r = await isSame(_inputhrjSLZU, _unitsJQ1Akcp)
	});
})