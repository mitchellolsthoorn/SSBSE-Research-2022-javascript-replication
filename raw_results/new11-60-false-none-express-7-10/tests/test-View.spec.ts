export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _returnValuetuC86UV = undefined;
		const _nameXQffxxd = () => { return _returnValuetuC86UV };
		const _optionsGaT2YLn = undefined;
		const _ViewNIsEE6D = new View(_nameXQffxxd, _optionsGaT2YLn)
		const _dirShoxrgM = undefined;
		const _arrayValuezu54yPk = null;
		const _arrayValueqWBXaEb = "ghF0CNvO8nEDSU5g7pzN2kFhhpGmeGE2T5eMbbLOUAT2tBIIarG8CrsLNT9TRuVHzWYnHj5qJQJOqy3lnFlsb70zNxNeoPL";
		const _arrayValueGXEMvHP = "qapEHFWNjSlgPBYj17UqD2AP8S7kSaoMNNVty1A1FCRTXAc0bj1MIrw0OOtlpQPQuYU7GDbczwXvg5iZzJIu5H40RXw";
		const _fileY26IOml = [_arrayValuezu54yPk, _arrayValueqWBXaEb, _arrayValueGXEMvHP]
		const _returnValuerJXdjYm = await _ViewNIsEE6D.resolve(_dirShoxrgM, _fileY26IOml)
		const _optionsKDNJpO1 = undefined;
		const _callbackOhdlahQ = null;
		const _returnValueCxGVE9B = await _ViewNIsEE6D.render(_optionsKDNJpO1, _callbackOhdlahQ)
		const _dirLjDLBrY = "WQFIvuk4Vuz6KO5qos";
		const _fileUTPD7GS = "2fSw7WHZA33UuLPzgJFXVuOzsqH7CGUPiRXo4aC2gWkrg2p1hhOxUtOfJFq";
		const _returnValueYpKSTWW = await _ViewNIsEE6D.resolve(_dirLjDLBrY, _fileUTPD7GS)
	});

	it('test for View', async () => {
		const _namexZr4KtE = "yzkhl9tEipQ45yVQkG3mZ37vq8t8GRXDVsK77Ec85Sf6o5LUrv8SE2fufwVaVpyennsH7NiluJTl";
		const _arrayValueLJTS6SE = false;
		const _options2r7ftu = [_arrayValueLJTS6SE]
		const _ViewE5MQoVC = new View(_namexZr4KtE, _options2r7ftu)
		const _optionsWuaJw1o = undefined;
		const _callback9mvS9O = -5.368703616769315;
		const _returnValueHpeHA9k = await _ViewE5MQoVC.render(_optionsWuaJw1o, _callback9mvS9O)
		const _returnValueRz058H = null;
		const _optionss87lnFz = () => { return _returnValueRz058H };
		const _callbackVYB9Iel = true;
		const _returnValuerZFZf9 = await _ViewE5MQoVC.render(_optionss87lnFz, _callbackVYB9Iel)
		const _optionsS4VcwYi = -1.6699172325707146;
		const _callbackGfBvEy5 = true;
		const _returnValueI3FNKS = await _ViewE5MQoVC.render(_optionsS4VcwYi, _callbackGfBvEy5)
	});
})