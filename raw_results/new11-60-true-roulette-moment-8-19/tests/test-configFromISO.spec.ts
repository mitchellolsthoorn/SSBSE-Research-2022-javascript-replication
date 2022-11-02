export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _configSqYEGY4 = "G3t5YQKSuOSwqo";
		const _returnValuefse1lpo = await configFromISO(_configSqYEGY4)
	});
})