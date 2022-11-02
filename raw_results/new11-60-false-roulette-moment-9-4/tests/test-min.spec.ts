export {}
import {min} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/min-max.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('min', () => {
	it('test for min', async () => {
		const _returnValuek07eqfR = await min()
	});
})