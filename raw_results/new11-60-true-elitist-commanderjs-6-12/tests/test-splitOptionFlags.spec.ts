export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValueNFnFRH = -0.8481241675170654;
		const _arrayValueuWnjcrX = true;
		const _splitsQGbCQN = [_arrayValueNFnFRH, _arrayValueuWnjcrX]
		const _flagsRGBL9d = {
			"split": _splitsQGbCQN
	}
		const _returnValuex0IGePh = await splitOptionFlags(_flagsRGBL9d)
	});

	it('test for splitOptionFlags', async () => {
		const _flagstXbaSOL = "mi5t2dDBVEYVz";
		const _returnValueXp06Bfy = await splitOptionFlags(_flagstXbaSOL)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuegEe2iJ2 = undefined;
		const _arrayValueTxqsf50 = {
		
	}
		const _arrayValueAQE4bcO = {
		
	}
		const _arrayValueWCeKiyF = null;
		const _arrayValueHfKzOv8 = [_arrayValueTxqsf50, _arrayValueAQE4bcO, _arrayValueWCeKiyF]
		const _arrayValue8XAf5Y = "kHd8com9ghBVSXnMj";
		const _returnValueQyQ5YES = [_arrayValuegEe2iJ2, _arrayValueHfKzOv8, _arrayValue8XAf5Y]
		const _splitj0htLLO = () => { return _returnValueQyQ5YES };
		const _flagsj5LHLsI = {
			"split": _splitj0htLLO
	}
		const _returnValueVo9W7Vn = await splitOptionFlags(_flagsj5LHLsI)
	});
})