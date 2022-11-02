export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputJDO5q2h = "jiejQDTPHz1H2TGuchWmsm";
		const _unitsoCC0rwN = "uux18bgcBAqBIthZ6Sz2fgrVBab3i2sQdzHgmTq2wZAH8UxsG7HYAbhAdwYDW4UPYxHnelD4TqBa16dSBpcI1en2DwqX7Yri05U";
		const _returnValuegS8GJOf = await isSame(_inputJDO5q2h, _unitsoCC0rwN)
	});

	it('test for isSame', async () => {
		const _inputSLZLvff = true;
		const _unitsIWXSIQL = undefined;
		const _returnValuewOR4wVX = await isSame(_inputSLZLvff, _unitsIWXSIQL)
	});
})