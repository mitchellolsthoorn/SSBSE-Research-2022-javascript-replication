export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromzvgR4rz = -3.4996726729154055;
		const _tolZNhNDL = null;
		const _arrayValueK4E2fhN = true;
		const _arrayValuea2DIcUQ = "YbQoHLngzzV4N3Fk6PICdVjLNcj27tv5DPWrRyjBDCgBZ2MOaNo9vfzKlBSktFmyZf1Kh4V1WDQKmtjmXfhBE";
		const _arrayValuekbbkgq0 = true;
		const _unitsu4fQCH9 = [_arrayValueK4E2fhN, _arrayValuea2DIcUQ, _arrayValuekbbkgq0]
		const _inclusivitycfYPbER = {
		
	}
		const _returnValueXxXuVcM = await isBetween(_fromzvgR4rz, _tolZNhNDL, _unitsu4fQCH9, _inclusivitycfYPbER)
	});
})