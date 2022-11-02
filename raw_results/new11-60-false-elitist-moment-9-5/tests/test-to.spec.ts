export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValuekGNJixP = "d2ct5xYvbD6mCfV7MRH4Ouom9FJqufof5owl105XC5Vfq4cYexvL3t7fKKkftpuTqMnExCfUe";
		const _isValidSlQEQsm = () => { return _returnValuekGNJixP };
		const _timeqXBi5U = {
			"isValid": _isValidSlQEQsm
	}
		const _withoutSuffixrLckGY6 = -3.4241229047620845;
		const _returnValueo4Kqo2B = await to(_timeqXBi5U, _withoutSuffixrLckGY6)
	});
})