export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValueyPiHaJF = -6.613248163400424;
		const _arrayValueA6E5sa = () => { return _returnValueyPiHaJF };
		const _arrayValuekURW2Tb = null;
		const _arrayValueAeF4cS3 = true;
		const _configaW7yFL5 = [_arrayValueA6E5sa, _arrayValuekURW2Tb, _arrayValueAeF4cS3]
		const _returnValueGpVI3GX = await configFromObject(_configaW7yFL5)
	});
})