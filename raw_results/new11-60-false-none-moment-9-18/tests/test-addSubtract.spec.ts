export {}
import {addSubtract} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/add-subtract.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('addSubtract', () => {
	it('test for addSubtract', async () => {
		const _arrayValueUvhJ3td = null;
		const _momnRdxLc8 = [_arrayValueUvhJ3td]
		const _duration8sLvUh = false;
		const _isAddingvfrw8T2 = false;
		const _updateOffsetL3h1v7w = 7.706170464927556;
		const _returnValuesXa2wT3 = await addSubtract(_momnRdxLc8, _duration8sLvUh, _isAddingvfrw8T2, _updateOffsetL3h1v7w)
	});
})