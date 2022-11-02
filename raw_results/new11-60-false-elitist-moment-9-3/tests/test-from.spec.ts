export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuetVjdcbA = null;
		const _isValidLlkbpI = () => { return _returnValuetVjdcbA };
		const _timejbNJmkS = {
			"isValid": _isValidLlkbpI
	}
		const _arrayValuexXmNf0k = true;
		const _arrayValueY5KKKf = false;
		const _arrayValueS4HEfe = -5.476266170774785;
		const _withoutSuffixiKk4sOt = [_arrayValuexXmNf0k, _arrayValueY5KKKf, _arrayValueS4HEfe]
		const _returnValuellSfOaX = await from(_timejbNJmkS, _withoutSuffixiKk4sOt)
	});
})