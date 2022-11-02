export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const _arrayValuejtt7783 = true;
		const _arrayValueBx6HEUz = null;
		const _configIm5qe0r = [_arrayValuejtt7783, _arrayValueBx6HEUz]
		const _returnValuejnqb7f = await configFromArray(_configIm5qe0r)
	});
})