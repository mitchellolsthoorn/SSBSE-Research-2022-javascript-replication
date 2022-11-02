export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _confignvyNTxy = "p6zJtepBr8DXqgeiFeLYm8G0RlTDS4Y8ok2Qa";
		const _returnValueRJOE60W = await configFromISO(_confignvyNTxy)
	});
})