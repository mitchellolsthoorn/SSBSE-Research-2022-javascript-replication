export {}
import {inspect} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('inspect', () => {
	it('test for inspect', async () => {
		const _returnValueFfWCdb1 = await inspect()
	});
})