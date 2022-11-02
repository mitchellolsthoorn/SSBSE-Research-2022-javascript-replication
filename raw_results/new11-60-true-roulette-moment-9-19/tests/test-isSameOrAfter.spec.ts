export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputPVJ9HV = "agDw1lhuDrRbqF5BHCNCsZdRPi3GdpyHuD5kP5htniOuOw4KDoHiwecfOs2wTCAuzy";
		const _unitsNCIspik = -1.5728135812560708;
		const _returnValuee2luSAF = await isSameOrAfter(_inputPVJ9HV, _unitsNCIspik)
	});
})