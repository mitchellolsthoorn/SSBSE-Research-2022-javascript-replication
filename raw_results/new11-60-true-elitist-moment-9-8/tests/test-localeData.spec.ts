export {}
import {localeData} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/locale.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('localeData', () => {
	it('test for localeData', async () => {
		const _returnValuePyV1xxB = await localeData()
	});
})