export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueXqj13M = 5.846883578323487;
		const _splithuiBHG5 = () => { return _returnValueXqj13M };
		const _flagsBIOQdIh = {
			"split": _splithuiBHG5
	}
		const _returnValueSx4WDQj = await splitOptionFlags(_flagsBIOQdIh)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuerTGJhBo = true;
		const _arrayValueDdnVPg = false;
		const _arrayValuem6R2Z5 = false;
		const _returnValueTT2HQbW = [_arrayValuerTGJhBo, _arrayValueDdnVPg, _arrayValuem6R2Z5]
		const _split5CgWLD = () => { return _returnValueTT2HQbW };
		const _flagshPFzoQa = {
			"split": _split5CgWLD
	}
		const _returnValueuWea6W = await splitOptionFlags(_flagshPFzoQa)
	});
})