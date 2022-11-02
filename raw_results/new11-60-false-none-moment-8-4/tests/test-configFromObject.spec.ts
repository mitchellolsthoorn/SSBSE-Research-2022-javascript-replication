export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValueCxQr2Us = null;
		const _configDA3Sw2h = () => { return _returnValueCxQr2Us };
		const _returnValueJbZWSgP = await configFromObject(_configDA3Sw2h)
	});
})