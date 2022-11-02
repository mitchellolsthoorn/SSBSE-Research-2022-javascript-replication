export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuerKfm46T = -6.0350905123560405;
		const _arrayValueo0smVJM = true;
		const _arrayValueHXWqC4P = [_arrayValueo0smVJM]
		const _arrayValuexBkef0 = null;
		const _flagshb82NEG = [_arrayValuerKfm46T, _arrayValueHXWqC4P, _arrayValuexBkef0]
		const _returnValueeVYXWY3 = await splitOptionFlags(_flagshb82NEG)
	});

	it('test for splitOptionFlags', async () => {
		const _flagstvpanNq = "Ynjdwh4LW3AwajXFQhPbDXZFgUBD1yDX0PGyrc9PFfmtEWInDumvElU";
		const _returnValueO86Woby = await splitOptionFlags(_flagstvpanNq)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuelCctG30 = false;
		const _returnValueHa1Gofp = 6.404098156264546;
		const _arrayValueQ7JDbGJ = () => { return _returnValueHa1Gofp };
		const _returnValueKEqTVa = undefined;
		const _arrayValuey9wl7lv = () => { return _returnValueKEqTVa };
		const _arrayValuez2Fnz3 = true;
		const _arrayValueMdLveMo = [_arrayValuey9wl7lv, _arrayValuez2Fnz3]
		const _arrayValueSI3vJgP = [_arrayValueMdLveMo]
		const _returnValueuXt8psl = [_arrayValuelCctG30, _arrayValueQ7JDbGJ, _arrayValueSI3vJgP]
		const _splitZUs35k0 = () => { return _returnValueuXt8psl };
		const _flagsEBZ1oeh = {
			"split": _splitZUs35k0
	}
		const _returnValueKpdeqir = await splitOptionFlags(_flagsEBZ1oeh)
	});
})