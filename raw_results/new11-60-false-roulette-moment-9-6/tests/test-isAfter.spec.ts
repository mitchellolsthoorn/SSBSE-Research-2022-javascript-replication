export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _arrayValueL6mHjcl = undefined;
		const _returnValueIg3Mbwc = null;
		const _arrayValueKRAe6XH = () => { return _returnValueIg3Mbwc };
		const _inputzkEa7TY = [_arrayValueL6mHjcl, _arrayValueKRAe6XH]
		const _unitsB0Ov3YK = "egUlUYKzMjgcgVel13XA1vncBTtssrg5tPhCrPNVJUcNxL";
		const _returnValuem9IeSFz = await isAfter(_inputzkEa7TY, _unitsB0Ov3YK)
	});

	it('test for isAfter', async () => {
		const _inputyVP1mIo = null;
		const _unitsdHgePNe = {
		
	}
		const _returnValueL2qpKx9 = await isAfter(_inputyVP1mIo, _unitsdHgePNe)
	});
})