export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _arrayValueBEB2ajm = true;
		const _arrayValueSAjTPBr = false;
		const _configvIVWuzS = [_arrayValueBEB2ajm, _arrayValueSAjTPBr]
		const _returnValueB7RkYjn = await configFromStringAndFormat(_configvIVWuzS)
	});
})