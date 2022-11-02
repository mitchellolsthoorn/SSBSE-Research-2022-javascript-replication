export {}
import {stringGet} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stringGet', () => {
	it('test for stringGet', async () => {
		const _units6b12cG = "cICAy0P26M85Yi3vp22gU3izPML08TB3YNtjt7TQ";
		const _returnValuenH8dJJn = await stringGet(_units6b12cG)
	});
})