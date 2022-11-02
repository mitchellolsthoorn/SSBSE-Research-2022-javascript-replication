export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _configIatSO0l = 3.7074052658609027;
		const _returnValueb9hwUwX = await configFromStringAndFormat(_configIatSO0l)
	});

	it('test for configFromStringAndFormat', async () => {
		const _returnValueZsNHN8m = "5f7aSofNlWH4srsoMEXmUbHzuGiwhot2kTYggClTKWMdcr6";
		const _configZIv4DrN = () => { return _returnValueZsNHN8m };
		const _returnValuef92wKAP = await configFromStringAndFormat(_configZIv4DrN)
	});
})