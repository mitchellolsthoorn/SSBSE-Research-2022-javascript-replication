export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValueEj7iise = "QOw1BMF0OGO1hXZG";
		const _arrayValueHOckAFM = [_arrayValueEj7iise]
		const _arrayValueuSbw3A3 = undefined;
		const _configHoU323P = [_arrayValueHOckAFM, _arrayValueuSbw3A3]
		const _returnValueaOb5MNV = await configFromObject(_configHoU323P)
	});
})