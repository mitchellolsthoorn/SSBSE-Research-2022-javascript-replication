export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValuexx5j72e = undefined;
		const _arrayValuetMfV9mY = -8.582146443655773;
		const _arrayValueWZZ5L7i = {
		
	}
		const _arrayValueE6heIh = [_arrayValueWZZ5L7i]
		const _arrayValuenSIoLVu = undefined;
		const _arrayValuewZzJfM7 = null;
		const _inputRUaj19P = [_arrayValuexx5j72e, _arrayValuetMfV9mY, _arrayValueE6heIh, _arrayValuenSIoLVu, _arrayValuewZzJfM7]
		const _unitsOIkas5u = 7.3992946651203155;
		const _returnValueWV1hJ20 = await isSame(_inputRUaj19P, _unitsOIkas5u)
	});

	it('test for isSame', async () => {
		const _inputX7GJ9sK = true;
		const _unitsNzZ6jPG = "1REYCFNmFiHZBxqV6TfC9EpuC5j1XyKVdoAYkKEwxR2TNyf9lkbc5SDwTnF";
		const _returnValueFrXVImt = await isSame(_inputX7GJ9sK, _unitsNzZ6jPG)
	});
})