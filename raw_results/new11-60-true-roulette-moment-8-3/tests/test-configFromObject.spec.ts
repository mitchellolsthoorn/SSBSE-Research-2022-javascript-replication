export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _configWN5pCL = "4CiQ4ibGDqHIX21lsXzjv4ygN72PHuX8fCmuFYV3dpemPSku7YTSoBVA9lXktFlnz2j6r5F6M5ajX0q9L";
		const _returnValueNBP9OTW = await configFromObject(_configWN5pCL)
	});
})