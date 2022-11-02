export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _arrayValueCflEoAk = {
		
	}
		const _arrayValueO8h7U6 = "8";
		const _returnValueHGw87mn = true;
		const _returnValuewGpi5Oo = () => { return _returnValueHGw87mn };
		const _arrayValuegTSTrRl = () => { return _returnValuewGpi5Oo };
		const _arrayValueCikEBZx = {
		
	}
		const _arrayValueNZ1IViS = [_arrayValueCflEoAk, _arrayValueO8h7U6, _arrayValuegTSTrRl, _arrayValueCikEBZx]
		const _arrayValuedBr1Fyt = false;
		const _valhvQSE7r = [_arrayValueNZ1IViS, _arrayValuedBr1Fyt]
		const _returnValueC9hwZ5C = await compileQueryParser(_valhvQSE7r)
	});

	it('test for compileQueryParser', async () => {
		const _arrayValueef6xg1n = null;
		const _arrayValuevFZDOFy = 6.964252202660916;
		const _arrayValueZYnoMmf = -2.550577404417189;
		const _arrayValueyyyxYwN = null;
		const _arrayValueq2pl6HI = [_arrayValueef6xg1n, _arrayValuevFZDOFy, _arrayValueZYnoMmf, _arrayValueyyyxYwN]
		const _returnValueo8SeE6S = [_arrayValueq2pl6HI]
		const _valWWRpduE = () => { return _returnValueo8SeE6S };
		const _returnValueFFn0vDz = await compileQueryParser(_valWWRpduE)
	});
})