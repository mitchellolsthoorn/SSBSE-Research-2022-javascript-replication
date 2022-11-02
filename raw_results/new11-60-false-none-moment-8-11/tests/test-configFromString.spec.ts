export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _config8Hr4Qt = 1.6624440425454132;
		const _returnValueR2Cr8N3 = await configFromString(_config8Hr4Qt)
	});

	it('test for configFromString', async () => {
		const _arrayValueHjTBkc = 1.8137369004840949;
		const _arrayValuecA5iHzU = undefined;
		const _returnValueQZZ73U6 = [_arrayValueHjTBkc, _arrayValuecA5iHzU]
		const _configBSoi0V5 = () => { return _returnValueQZZ73U6 };
		const _returnValueUG2YNO = await configFromString(_configBSoi0V5)
	});
})