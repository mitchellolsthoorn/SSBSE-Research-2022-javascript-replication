export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueyirkzGW = null;
		const _splitnlU6OmI = () => { return _returnValueyirkzGW };
		const _flagsVK9nyiZ = {
			"split": _splitnlU6OmI
	}
		const _returnValueyASceEV = await splitOptionFlags(_flagsVK9nyiZ)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsYHrwZy = "q2GBvWTp1miLZiCU9JTXx";
		const _returnValueSWjTYi = await splitOptionFlags(_flagsYHrwZy)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueQiimMtz = false;
		const _arrayValueoBx5gQm = null;
		const _arrayValueLeGbSUn = null;
		const _arrayValuesjwnaNI = null;
		const _arrayValueNvTgPy5 = [_arrayValuesjwnaNI]
		const _arrayValueLUuMKDM = undefined;
		const _arrayValuebjGJB7z = [_arrayValueLeGbSUn, _arrayValueNvTgPy5, _arrayValueLUuMKDM]
		const _returnValuelpSA511 = [_arrayValueQiimMtz, _arrayValueoBx5gQm, _arrayValuebjGJB7z]
		const _splitUC5tadg = () => { return _returnValuelpSA511 };
		const _flagsqiG5ASO = {
			"split": _splitUC5tadg
	}
		const _returnValueju0SmaP = await splitOptionFlags(_flagsqiG5ASO)
	});
})