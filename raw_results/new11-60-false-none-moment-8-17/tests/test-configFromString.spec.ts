export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _arrayValueW2SXwa = -7.486118636136072;
		const _returnValueezY4oGr = [_arrayValueW2SXwa]
		const _configB23wdBI = () => { return _returnValueezY4oGr };
		const _returnValueht0d4z0 = await configFromString(_configB23wdBI)
	});
})