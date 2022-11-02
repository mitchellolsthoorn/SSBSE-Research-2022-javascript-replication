export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _timeuqM9oS0 = 6.246968135292725;
		const _withoutSuffixfRvuqyo = -5.5807973084557165;
		const _returnValueVvI7zH6 = await from(_timeuqM9oS0, _withoutSuffixfRvuqyo)
	});
})