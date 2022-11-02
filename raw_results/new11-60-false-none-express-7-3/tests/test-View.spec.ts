export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameJ6vxZ6K = "Ru5hLM5GrAVazHuHRQPGIOyxeH";
		const _arrayValueFxhXf8l = {
		
	}
		const _optionsVjLyrsB = [_arrayValueFxhXf8l]
		const _ViewowCoWZo = new View(_nameJ6vxZ6K, _optionsVjLyrsB)
		const _namecpyhCJz = undefined;
		const _returnValueWkYqcqF = await _ViewowCoWZo.lookup(_namecpyhCJz)
		const _optionseG1cJh = -3.7545498380898454;
		const _callbackS0XION = undefined;
		const _returnValueFHTZJW = await _ViewowCoWZo.render(_optionseG1cJh, _callbackS0XION)
	});
})