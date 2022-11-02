export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _returnValueUvQwoL2 = false;
		const _keepOffsetDoelqfC = () => { return _returnValueUvQwoL2 };
		const _returnValueL5WYRUd = await toISOString(_keepOffsetDoelqfC)
	});
})