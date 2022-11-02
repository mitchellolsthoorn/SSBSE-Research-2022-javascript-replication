export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValuetgn3NNK = undefined;
		const _returnValueJBfK5U = () => { return _returnValuetgn3NNK };
		const _splitxd2T69y = () => { return _returnValueJBfK5U };
		const _flagsiAzQFeV = {
			"split": _splitxd2T69y
	}
		const _returnValueVD9QRj = await splitOptionFlags(_flagsiAzQFeV)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValue5zFhzA = "7xjXSfP7HNm6rLH5OJdriIFz1MJ1eYDuhv3u4aB";
		const _split24TAuq = () => { return _returnValue5zFhzA };
		const _flagsa3HJDwm = {
			"split": _split24TAuq
	}
		const _returnValuepDE61Qq = await splitOptionFlags(_flagsa3HJDwm)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueXlgrPEE = []
		const _splitZhIPXSu = () => { return _returnValueXlgrPEE };
		const _flags8H5SSA = {
			"split": _splitZhIPXSu
	}
		const _returnValueCJn2zLt = await splitOptionFlags(_flags8H5SSA)
	});
})