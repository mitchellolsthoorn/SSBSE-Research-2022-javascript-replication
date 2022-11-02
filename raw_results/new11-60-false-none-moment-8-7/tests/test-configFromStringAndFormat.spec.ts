export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _configWcsFVUz = "q6LNRMx7V6HoiXT8h7bhX8HbJE8qXbgcMQf4lXDDIXE9TwNqK1DBCrNe6I0Xlf5GhfgZNA2nRcysCS6RiTn4vJaLlM1RSx1";
		const _returnValueXD5tYOA = await configFromStringAndFormat(_configWcsFVUz)
	});

	it('test for configFromStringAndFormat', async () => {
		const _returnValuea0dmGF = false;
		const _configLCs6pIt = () => { return _returnValuea0dmGF };
		const _returnValuezEGbdXS = await configFromStringAndFormat(_configLCs6pIt)
	});
})