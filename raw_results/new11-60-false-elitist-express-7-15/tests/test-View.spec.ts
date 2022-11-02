export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameo3jK2pS = 6.679073944253993;
		const _optionsXyodSo = 7.672492437775208;
		const _ViewSCAdp8w = new View(_nameo3jK2pS, _optionsXyodSo)
		const _arrayValueTEUasV2 = "eb8Au50qPR9ntZHcZBv3lXGV8Dj6gk3p2Wt0wCWcTB3Ux5E0K2ab3iTSuxAmK2LYgq1WPWu2E";
		const _arrayValueJgQyTmm = undefined;
		const _arrayValuegXHYjyQ = "H7yts3pWbSyrUXSeDTNET77Y1n4lriQjC92UKXBYLT5PJmRQUAqCV9TKN154Xpe8Y7";
		const _optionsrWJzNk6 = [_arrayValueTEUasV2, _arrayValueJgQyTmm, _arrayValuegXHYjyQ]
		const _callbackgXynlL4 = "RgWAAOWDM8D";
		const _returnValuemmdkYwH = await _ViewSCAdp8w.render(_optionsrWJzNk6, _callbackgXynlL4)
	});

	it('test for View', async () => {
		const _nameCW4DkUw = "DTtnnqUXgREwGaXu97t9";
		const _optionsdkHNMVX = false;
		const _ViewhWG5fbE = new View(_nameCW4DkUw, _optionsdkHNMVX)
		const _optionshG3mAsM = true;
		const _callbackywUZHxJ = true;
		const _returnValuevdVyTxz = await _ViewhWG5fbE.render(_optionshG3mAsM, _callbackywUZHxJ)
		const _dirBarZ0MX = undefined;
		const _returnValueTQqjkzJ = true;
		const _filezj4btV4 = () => { return _returnValueTQqjkzJ };
		const _returnValueb4Xdutu = await _ViewhWG5fbE.resolve(_dirBarZ0MX, _filezj4btV4)
	});
})