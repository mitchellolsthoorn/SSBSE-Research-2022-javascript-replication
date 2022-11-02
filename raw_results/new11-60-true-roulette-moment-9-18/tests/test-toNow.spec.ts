export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _withoutSuffixlimXKpm = "63UxcCauWE7USNrPIXKrFG5IlJtHwnmbJpmccX1UMG8YtJX3JtVZIQ48ROPMR9DFCU6T7joXtT3Qly3mUZOZ04HQSBEvyN6CyK";
		const _returnValuec2UIVVo = await toNow(_withoutSuffixlimXKpm)
	});
})