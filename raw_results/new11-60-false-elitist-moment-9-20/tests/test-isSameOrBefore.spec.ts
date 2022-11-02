export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueLeoE5w = "mMB";
		const _arrayValuequl4Fnd = "21sYRhBlmnb1byKXeJlmfWD6aYAibpLlm1rG2i2pL04JgDVVOXRJn7TtLUD";
		const _arrayValueyyJ0Mq4 = -7.200521813253106;
		const _returnValuevzrgONn = [_arrayValueLeoE5w, _arrayValuequl4Fnd, _arrayValueyyJ0Mq4]
		const _inputWS83OM9 = () => { return _returnValuevzrgONn };
		const _unitsgz5zvc = {
		
	}
		const _returnValueuGjnJIh = await isSameOrBefore(_inputWS83OM9, _unitsgz5zvc)
	});
})