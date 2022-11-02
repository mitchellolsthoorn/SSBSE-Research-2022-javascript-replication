export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValueFRSBzI9 = "x279btN0xtqJyweP5XcMvDau1SSq7iTwepkbz6mAomOg8FnRE6jK9MFSbheT8mRWlXwDvMzM5y4CG2baTTLqiLw2mgjx2X";
		const _configk1bixsU = () => { return _returnValueFRSBzI9 };
		const _returnValuew0dxwrQ = await configFromObject(_configk1bixsU)
	});
})