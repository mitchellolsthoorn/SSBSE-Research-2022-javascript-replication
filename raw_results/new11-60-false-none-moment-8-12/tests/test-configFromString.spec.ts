export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _configFooFpL = "nDMbGmrBfwGpMJfFRRpUoq5eGZ1PFhTNrDfe63y6OHFKPtRy";
		const _returnValueu9GvY4 = await configFromString(_configFooFpL)
	});

	it('test for configFromString', async () => {
		const _returnValuePoWpH1m = undefined;
		const _configuUVIRqy = () => { return _returnValuePoWpH1m };
		const _returnValuedGeFsrL = await configFromString(_configuUVIRqy)
	});
})