export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _arrayValueAxqMMty = null;
		const _arrayValueVywg4ZR = "CBrUjRhNavbsjV";
		const _arrayValuerJ1XgTe = false;
		const _arrayValuekWqtbJS = "Eb1GNYvpVVMUieevJvMUPvKUAI1Lz7afnsHSLXpk7kKIPiUqm";
		const _arrayValueOqq0X11 = undefined;
		const _arrayValueURBonu = "VF6dIAzBvZk249mn76Z0XOkpiMK2kBHbsoMrKRExo4l1XrK7hv";
		const _arrayValuefqRa4m2 = []
		const _arrayValuelqN5Bku = [_arrayValuekWqtbJS, _arrayValueOqq0X11, _arrayValueURBonu, _arrayValuefqRa4m2]
		const _returnValueeZflFK5 = "NIFgGsfXKEwEjWr19VYwkMrYxdJSJXoXPLRaySDv557JOQOaAeiGSmTYr";
		const _arrayValueiAd4gHK = () => { return _returnValueeZflFK5 };
		const _arrayValuedLRYtdH = null;
		const _arrayValueaAkBmV5 = [_arrayValuelqN5Bku, _arrayValueiAd4gHK, _arrayValuedLRYtdH]
		const _arrayValuekuOkUHo = null;
		const _arrayValuewsgHYpi = [_arrayValueaAkBmV5, _arrayValuekuOkUHo]
		const _configWE4hDb6 = [_arrayValueAxqMMty, _arrayValueVywg4ZR, _arrayValuerJ1XgTe, _arrayValuewsgHYpi]
		const _returnValueVeEzyUj = await configFromRFC2822(_configWE4hDb6)
	});
})