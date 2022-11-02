export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _arrayValueL0qBph = 8.501051251176769;
		const _arrayValueJFoJFaH = {
		
	}
		const _arrayValuezoriZEO = [_arrayValueJFoJFaH]
		const _arrayValueVERhGo5 = undefined;
		const _inputymQ0rXy = [_arrayValueL0qBph, _arrayValuezoriZEO, _arrayValueVERhGo5]
		const _unitsKuDxKtH = {
		
	}
		const _arrayValuemQAmke5 = null;
		const _arrayValuej0gAC0x = false;
		const _returnValueMe6ihk1 = null;
		const _arrayValuerWuiMB6 = () => { return _returnValueMe6ihk1 };
		const _asFloatuVVyMP = [_arrayValuemQAmke5, _arrayValuej0gAC0x, _arrayValuerWuiMB6]
		const _returnValuefUsoUpj = await diff(_inputymQ0rXy, _unitsKuDxKtH, _asFloatuVVyMP)
	});
})