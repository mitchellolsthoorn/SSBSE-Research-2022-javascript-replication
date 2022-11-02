export {}
import {locale} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/locale.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('locale', () => {
	it('test for locale', async () => {
		const _keyukwCUJ = 1.3639962267708405;
		const _returnValueZ6A5kMP = await locale(_keyukwCUJ)
	});
})