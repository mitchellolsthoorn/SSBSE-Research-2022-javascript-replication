export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuebs7ZiM = "GKfOcJxfdHUmJ5f76";
		const _isValidQMRRMXB = () => { return _returnValuebs7ZiM };
		const _timeZsnnScd = {
			"isValid": _isValidQMRRMXB
	}
		const _returnValueHQhZMT7 = null;
		const _withoutSuffixoCBQCQI = () => { return _returnValueHQhZMT7 };
		const _returnValuehujbUid = await from(_timeZsnnScd, _withoutSuffixoCBQCQI)
	});
})