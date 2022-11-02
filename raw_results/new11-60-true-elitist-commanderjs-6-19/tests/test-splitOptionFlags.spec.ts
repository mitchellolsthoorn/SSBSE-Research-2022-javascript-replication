export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueB6Qm5km = true;
		const _splityOhF5di = () => { return _returnValueB6Qm5km };
		const _flagsbzB1ipA = {
			"split": _splityOhF5di
	}
		const _returnValuehV86PH5 = await splitOptionFlags(_flagsbzB1ipA)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueKRO1wUP = null;
		const _arrayValueKxJmWBr = () => { return _returnValueKRO1wUP };
		const _returnValuezmRYE6b = [_arrayValueKxJmWBr]
		const _splitneh9bpF = () => { return _returnValuezmRYE6b };
		const _flagsnR96oB4 = {
			"split": _splitneh9bpF
	}
		const _returnValueUjUQ2UZ = await splitOptionFlags(_flagsnR96oB4)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueGcST1ft = "qPmLAw3F7nbSg82yRvCJMzqLBd3npHDpPojJ04AyaXzM6EYhEqt2rRzHjljOe6JY8d2n9u9to7VpEe3XdUMw";
		const _splitiVkFJcE = () => { return _returnValueGcST1ft };
		const _flagsYXOP1jS = {
			"split": _splitiVkFJcE
	}
		const _returnValuez7ad4W8 = await splitOptionFlags(_flagsYXOP1jS)
	});
})