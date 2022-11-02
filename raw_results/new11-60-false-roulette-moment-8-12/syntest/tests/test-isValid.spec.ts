export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _mDhsNMxd = "af33DCqbllRklqr2f62DCNujfQeefe7BOzflLpRoI6HCDdqU39KMtmHlA5TqevWzeLZtB1dOPuIn2WJW";
		const _returnValuehHpD836 = await isValid(_mDhsNMxd)
	});

	it('test for isValid', async () => {
		const _arrayValuepkWphlu = "4eQDgQdxb";
		const _arrayValuecKOLjuz = -6.138025175420987;
		const _mCVesuKR = [_arrayValuepkWphlu, _arrayValuecKOLjuz]
		const _returnValueM30ONjd = await isValid(_mCVesuKR)
	});
})