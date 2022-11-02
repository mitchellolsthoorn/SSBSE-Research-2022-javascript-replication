export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _mPaiBfAA = "njv7frOnrsL9x1KEpE1DEdvrClMqYcsobPLpzLWlBazGOPTMYr0ygv7LFOJ2yndppUiIXRncukc0irBkj47";
		const _returnValuefUr3dMY = await isValid(_mPaiBfAA)
	});

	it('test for isValid', async () => {
		const _returnValuepVds3Pk = undefined;
		const _mtsUwCsv = () => { return _returnValuepVds3Pk };
		const _returnValueQ4JVQWk = await isValid(_mtsUwCsv)
	});
})