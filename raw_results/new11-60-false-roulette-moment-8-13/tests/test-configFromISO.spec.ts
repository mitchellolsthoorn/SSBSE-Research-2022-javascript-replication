export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _configTW2q3U = "hh3vg1ZmwybCuMQVB6EglZflHKsSLhlKIibu4Ut4pE";
		const _returnValuetif3gDX = await configFromISO(_configTW2q3U)
	});
})