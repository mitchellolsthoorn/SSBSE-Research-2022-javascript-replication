export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValueYv39kJU = null;
		const _arrayValueOW2WT1e = []
		const _arrayValueQtqQcKU = -0.8769936479363523;
		const _arrayValueJqFM3y = "3xNphOxyGpbGmxzw1YSuhAbSaiU5jatDN7buaAL7rXQrLWUE6v7qWaYUHTE5m8LOeAJmQlkYgCvGVThWhXLL5E7";
		const _arrayValuemm1PVbS = [_arrayValueOW2WT1e, _arrayValueQtqQcKU, _arrayValueJqFM3y]
		const _mOG6EG57 = [_arrayValueYv39kJU, _arrayValuemm1PVbS]
		const _returnValueHm2rrXz = await isValid(_mOG6EG57)
	});
})