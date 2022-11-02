export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _config3LeZ78 = null;
		const _returnValuet03iQaH = await configFromString(_config3LeZ78)
	});

	it('test for configFromString', async () => {
		const _returnValueIlq1gaZ = 5.114907403149713;
		const _configJNYICwZ = () => { return _returnValueIlq1gaZ };
		const _returnValuelvRCHm = await configFromString(_configJNYICwZ)
	});
})