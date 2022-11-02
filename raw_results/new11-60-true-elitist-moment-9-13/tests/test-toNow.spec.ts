export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _returnValuem9mtbLd = false;
		const _withoutSuffixUaFzHmI = () => { return _returnValuem9mtbLd };
		const _returnValueR44g3y6 = await toNow(_withoutSuffixUaFzHmI)
	});
})