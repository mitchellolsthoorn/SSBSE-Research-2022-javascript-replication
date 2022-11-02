export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuewAhR27R = false;
		const _arrayValuekt7Lxc1 = [_arrayValuewAhR27R]
		const _arrayValuelY4KVC = null;
		const _arrayValuehZpMWUt = undefined;
		const _arrayValueBtbzBbY = false;
		const _arrayValuezr55ODH = null;
		const _arrayValuemsO4ueC = [_arrayValueBtbzBbY, _arrayValuezr55ODH]
		const _arrayValueoXZr5Sc = [_arrayValuemsO4ueC]
		const _arrayValueyTWyguK = [_arrayValueoXZr5Sc]
		const _arrayValuebVthF6j = false;
		const _arrayValuecLtilTv = undefined;
		const _arrayValueefSCWir = [_arrayValueyTWyguK, _arrayValuebVthF6j, _arrayValuecLtilTv]
		const _flagsSMaOxGQ = [_arrayValuekt7Lxc1, _arrayValuelY4KVC, _arrayValuehZpMWUt, _arrayValueefSCWir]
		const _returnValuecLKbm7F = await splitOptionFlags(_flagsSMaOxGQ)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsNHZd8Fe = "ijSuQjFLDJjcwVtDBkRRSCqQWxPjGYUhB4Ha25Y1HOM4MrX7rz3rSlzW0hnv7Hh3FaHFSKKBfwnD2oSVdRKiWKUPQids199ixm";
		const _returnValueNc63xCX = await splitOptionFlags(_flagsNHZd8Fe)
	});
})