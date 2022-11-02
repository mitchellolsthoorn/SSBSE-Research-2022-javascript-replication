export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _returnValueNuaLQxB = -7.190478858844713;
		const _configGNkoYk1 = () => { return _returnValueNuaLQxB };
		const _returnValueOevSqN3 = await configFromStringAndFormat(_configGNkoYk1)
	});
})