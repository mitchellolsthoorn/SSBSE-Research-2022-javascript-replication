export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueH2RMei = null;
		const _splitCW8JGTj = () => { return _returnValueH2RMei };
		const _flagskZ7wX12 = {
			"split": _splitCW8JGTj
	}
		const _returnValueLHwCOoW = await splitOptionFlags(_flagskZ7wX12)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuegMGq3zz = true;
		const _splitMCBsznh = () => { return _returnValuegMGq3zz };
		const _flagsYWltt2w = {
			"split": _splitMCBsznh
	}
		const _returnValuehd9hury = await splitOptionFlags(_flagsYWltt2w)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueeOi7mgR = {
		
	}
		const _arrayValueICdGqgr = null;
		const _arrayValuedjDZijz = true;
		const _arrayValuekMZvOfi = 1.2865440632032978;
		const _arrayValuev4geBap = [_arrayValueICdGqgr, _arrayValuedjDZijz, _arrayValuekMZvOfi]
		const _returnValueO0gAM4t = [_arrayValueeOi7mgR, _arrayValuev4geBap]
		const _splitvg6fMF8 = () => { return _returnValueO0gAM4t };
		const _flagsPfAjb4f = {
			"split": _splitvg6fMF8
	}
		const _returnValuexkn2qWP = await splitOptionFlags(_flagsPfAjb4f)
	});
})