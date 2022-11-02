export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValuePJaY9ns = false;
		const _configPs06NVo = () => { return _returnValuePJaY9ns };
		const _returnValuesQIA35L = await configFromObject(_configPs06NVo)
	});
})