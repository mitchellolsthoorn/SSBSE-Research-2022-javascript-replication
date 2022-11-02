export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _withoutSuffixQA8a0bU = 5.52546246863127;
		const _returnValueEkpiqOC = await toNow(_withoutSuffixQA8a0bU)
	});
})