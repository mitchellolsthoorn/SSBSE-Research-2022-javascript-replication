export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _isValidOowCCHj = "Ywrdxyb6wUfDTFQVC";
		const _returnValueQ37ND0o = null;
		const _localeDatazne985 = () => { return _returnValueQ37ND0o };
		const _timeyUJjQof = {
			"isValid": _isValidOowCCHj,
		"localeData": _localeDatazne985
	}
		const _withoutSuffixCPJjyia = undefined;
		const _returnValueS3y5c7c = await from(_timeyUJjQof, _withoutSuffixCPJjyia)
	});
})