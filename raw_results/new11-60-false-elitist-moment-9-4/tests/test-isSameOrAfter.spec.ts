export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputGD0cLgg = "xx5t25FlStPNxo9iWBp4tAmNqFqJ1kbmfQJZdHu8rWbRqY76GSw665qBInNr17XFiTIApV";
		const _arrayValueu9vAOiY = 1.0393927239424805;
		const _arrayValuenrIT8qT = true;
		const _arrayValuebz2hclP = "Gv3lxeAs6Mj3k2f2VAyzFReDj01erRlIwWjRWJGzY8rKXMMEcnOul9F4EpSbHhygdBaG7p8S";
		const _arrayValueUOSsk4w = {
		
	}
		const _arrayValueCONvNxN = [_arrayValuebz2hclP, _arrayValueUOSsk4w]
		const _arrayValuecL8bvcB = [_arrayValuenrIT8qT, _arrayValueCONvNxN]
		const _arrayValuemfXWGTo = null;
		const _unitsR8qOnz7 = [_arrayValueu9vAOiY, _arrayValuecL8bvcB, _arrayValuemfXWGTo]
		const _returnValuevtGhtqb = await isSameOrAfter(_inputGD0cLgg, _unitsR8qOnz7)
	});
})