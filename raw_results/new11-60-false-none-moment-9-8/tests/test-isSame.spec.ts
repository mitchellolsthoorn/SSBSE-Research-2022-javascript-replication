export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _returnValuem9KYNGc = undefined;
		const _arrayValuelNSXyS = () => { return _returnValuem9KYNGc };
		const _arrayValueZjd7TMB = "ExlKslwEgs5MrzfaY3mAsT5bCYWOYK71fVfNJlPFVpTrB9Z1eIfeYKhqH5u8xLTkBTf5hzhyPNwRF6tnf1nwSIK3Zo2wkpoj";
		const _inputqChzEp0 = [_arrayValuelNSXyS, _arrayValueZjd7TMB]
		const _unitsLSLCcRY = undefined;
		const _returnValuetyqZksK = await isSame(_inputqChzEp0, _unitsLSLCcRY)
	});

	it('test for isSame', async () => {
		const _returnValuexpNGVa = true;
		const _inputv7dtpFl = () => { return _returnValuexpNGVa };
		const _unitsM3YtlfB = -4.0731321641719465;
		const _returnValueHdWSDIj = await isSame(_inputv7dtpFl, _unitsM3YtlfB)
	});
})