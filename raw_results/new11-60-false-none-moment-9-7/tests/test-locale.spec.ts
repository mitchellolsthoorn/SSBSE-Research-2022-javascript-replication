export {}
import {locale} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/locale.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('locale', () => {
	it('test for locale', async () => {
		const _keyEuqTZ75 = undefined;
		const _returnValueClItYFE = await locale(_keyEuqTZ75)
	});
})