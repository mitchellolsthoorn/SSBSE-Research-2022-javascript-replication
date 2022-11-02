export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const _configz9sWNOh = "CxabOdTxN6ertr64O3zN25y1fv7tgakzkKgk1Eg9lNmXy5RpGcdjjToJslO";
		const _returnValueFabNXB = await configFromArray(_configz9sWNOh)
	});
})