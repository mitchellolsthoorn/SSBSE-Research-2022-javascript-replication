export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValuenRvPD0D = "HBeRO";
		const _returnValueP8ae1VO = () => { return _returnValuenRvPD0D };
		const _splitcqLbCHk = () => { return _returnValueP8ae1VO };
		const _flagsFbh6O5M = {
			"split": _splitcqLbCHk
	}
		const _returnValueH44ZU4U = await splitOptionFlags(_flagsFbh6O5M)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuebiPcz7h = "WFqiLPJ5t3FqU1N96YtvF0TLxo2BxFd2hH2h9YpGBJHzovlhvzdqIjfPgNX7nqF2HxqEyAq1GzMbuHQbutVbph7";
		const _splitv7f4Wtk = () => { return _returnValuebiPcz7h };
		const _flagsX5njAR3 = {
			"split": _splitv7f4Wtk
	}
		const _returnValuekOWbXsh = await splitOptionFlags(_flagsX5njAR3)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsVMZB9Qh = "gQ9l7vAepLd0mYTfh4urPGDW8KsAJxYBmU6q415";
		const _returnValueRUFxFtW = await splitOptionFlags(_flagsVMZB9Qh)
	});
})