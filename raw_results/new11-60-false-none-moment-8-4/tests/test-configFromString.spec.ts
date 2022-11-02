export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _arrayValueNPOWI2C = 9.039542812930016;
		const _configSn7VSPc = [_arrayValueNPOWI2C]
		const _returnValueRo7O1qm = await configFromString(_configSn7VSPc)
	});
})