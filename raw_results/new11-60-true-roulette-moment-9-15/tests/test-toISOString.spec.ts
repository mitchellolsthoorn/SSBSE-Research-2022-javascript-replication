export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _keepOffsetOk3OrTd = true;
		const _returnValueb0TFl1B = await toISOString(_keepOffsetOk3OrTd)
	});
})