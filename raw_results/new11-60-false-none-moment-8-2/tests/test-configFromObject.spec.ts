export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValueO0ociA = undefined;
		const _arrayValueuQyrADd = "WhAU48frqrT8tOjJHXxExTAgWsowQVy0FjKjSLV8IOICDlO1qW3HnbrfG";
		const _arrayValueasQbmJZ = "PHUUVNTiqgbFn4prjjwUWuUbzGcau6BnuYDqVxIaPLRtW42v39S";
		const _arrayValuegE7tyNB = {
		
	}
		const _arrayValuePy6jra = [_arrayValueasQbmJZ, _arrayValuegE7tyNB]
		const _configAuvET0 = [_arrayValueO0ociA, _arrayValueuQyrADd, _arrayValuePy6jra]
		const _returnValueqC8M4Cz = await configFromObject(_configAuvET0)
	});
})