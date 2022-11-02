export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _arrayValueEC9ERrX = null;
		const _arrayValuelrSjcf = null;
		const _returnValueJl448qm = [_arrayValueEC9ERrX, _arrayValuelrSjcf]
		const _configg2mGIHK = () => { return _returnValueJl448qm };
		const _returnValuev1HQ5AQ = await configFromString(_configg2mGIHK)
	});
})