export {}
import {locale} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/locale.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('locale', () => {
	it('test for locale', async () => {
		const _keyAL1JG50 = undefined;
		const _returnValueD8RVU4c = await locale(_keyAL1JG50)
	});
})