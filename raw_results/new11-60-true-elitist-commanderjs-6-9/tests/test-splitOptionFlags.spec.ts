export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueUK70G87 = true;
		const _splitjwVpn4V = () => { return _returnValueUK70G87 };
		const _flagsMJfkBut = {
			"split": _splitjwVpn4V
	}
		const _returnValueT6XKWik = await splitOptionFlags(_flagsMJfkBut)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueDXVBRUr = null;
		const _returnValueMGE9r8R = undefined;
		const _arrayValuemDjrlnF = () => { return _returnValueMGE9r8R };
		const _arrayValuezfRJ9Xt = true;
		const _returnValueDnIYoki = [_arrayValueDXVBRUr, _arrayValuemDjrlnF, _arrayValuezfRJ9Xt]
		const _splitnh5cAMy = () => { return _returnValueDnIYoki };
		const _flagszL7FDMK = {
			"split": _splitnh5cAMy
	}
		const _returnValueNj4vXVK = await splitOptionFlags(_flagszL7FDMK)
	});
})