export {}
import {configFromStringAndArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndArray', () => {
	it('test for configFromStringAndArray', async () => {
		const _configrsz2XX1 = "oQKCsXym7FzXdprxRW3uEyRWY";
		const _returnValueomYHIY = await configFromStringAndArray(_configrsz2XX1)
	});
})