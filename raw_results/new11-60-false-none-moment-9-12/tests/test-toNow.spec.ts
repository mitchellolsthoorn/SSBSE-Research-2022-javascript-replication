export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _returnValueDgq4Bpb = null;
		const _withoutSuffixGjxoF6c = () => { return _returnValueDgq4Bpb };
		const _returnValueflksoz = await toNow(_withoutSuffixGjxoF6c)
	});
})