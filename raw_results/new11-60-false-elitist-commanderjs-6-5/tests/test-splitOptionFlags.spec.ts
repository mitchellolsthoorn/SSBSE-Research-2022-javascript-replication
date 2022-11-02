export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueRUjHQub = "N831uOxWOdcQNb";
		const _splitYUWbUZL = () => { return _returnValueRUjHQub };
		const _flagsBUUbIuG = {
			"split": _splitYUWbUZL
	}
		const _returnValuedHvujx8 = await splitOptionFlags(_flagsBUUbIuG)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueqJAER52 = true;
		const _splitDEbpPE = () => { return _returnValueqJAER52 };
		const _flagsfXDVctX = {
			"split": _splitDEbpPE
	}
		const _returnValuewLIyLtZ = await splitOptionFlags(_flagsfXDVctX)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueQEtTasa = {
		
	}
		const _arrayValueL1PORjD = true;
		const _arrayValuetbDs8r = {
		
	}
		const _returnValuem3Log3r = "8C8ejHQgWdsxaMvjuvH1V1E1mH4XiNwvI7lDHj6OixwBYcRayF6Xq1CqkxvPwnCbbeT1i1RyIf99DizqdNTrwkSbzK";
		const _arrayValuek3el3jB = () => { return _returnValuem3Log3r };
		const _arrayValuepcVfZ48 = null;
		const _returnValuenXaokbN = [_arrayValueL1PORjD, _arrayValuetbDs8r, _arrayValuek3el3jB, _arrayValuepcVfZ48]
		const _arrayValueLBJDAeq = () => { return _returnValuenXaokbN };
		const _returnValueYpj319I = [_arrayValueQEtTasa, _arrayValueLBJDAeq]
		const _splitpQGZs2 = () => { return _returnValueYpj319I };
		const _flagsZFjA0FK = {
			"split": _splitpQGZs2
	}
		const _returnValueUETSde2 = await splitOptionFlags(_flagsZFjA0FK)
	});
})