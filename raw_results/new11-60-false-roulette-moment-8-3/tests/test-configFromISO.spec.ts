export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _configKkEHyyR = "5qOkUQ2bVY5Iq6oTKH3lUkyLo9ULPEKh0T8rT";
		const _returnValuel33Uer1 = await configFromISO(_configKkEHyyR)
	});
})