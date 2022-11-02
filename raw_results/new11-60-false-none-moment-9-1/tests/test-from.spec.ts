export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _timeWbmDF0l = "KEWd8JS4k3SJrJLhZF1bTwpnyWYeRwWbEyzlJCeCTryeaPBd8mrb1KfuMU6vlc2oA";
		const _withoutSuffixn4ZgArk = null;
		const _returnValuewMpTsqp = await from(_timeWbmDF0l, _withoutSuffixn4ZgArk)
	});
})