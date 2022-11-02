export {}
import {configFromStringAndArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndArray', () => {
	it('test for configFromStringAndArray', async () => {
		const _configURH3ACQ = "BxojE7BlT8WvI96dH61n4fgAi";
		const _returnValueKqw9Mv = await configFromStringAndArray(_configURH3ACQ)
	});
})