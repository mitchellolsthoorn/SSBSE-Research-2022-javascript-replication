export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const _arrayValueokdI4G = "9PNW9T2YzjWQu9dvtA4zoyKKlm9Je5VffQKnpRf6MOJ1HLZ33czmRoRBfPmk9i2RGrogyVlthDjryjy";
		const _configr4r2DN = [_arrayValueokdI4G]
		const _returnValueeH6zJfL = await configFromArray(_configr4r2DN)
	});
})