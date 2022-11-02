export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _returnValueCTwJwB9 = {
		
	}
		const _withoutSuffixvGxkYt1 = () => { return _returnValueCTwJwB9 };
		const _returnValueIRqSLe9 = await toNow(_withoutSuffixvGxkYt1)
	});
})