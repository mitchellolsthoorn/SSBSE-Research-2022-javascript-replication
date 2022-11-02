export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _namedYnDG0n = 9.719694979182897;
		const _optionsae5K2Ip = undefined;
		const _ViewjG1niF = new View(_namedYnDG0n, _optionsae5K2Ip)
		const _name5jSZL1 = undefined;
		const _returnValueHvLzqzG = await _ViewjG1niF.lookup(_name5jSZL1)
		const _namegH8sOza = 0.40957241001374456;
		const _returnValueFYba9I9 = await _ViewjG1niF.lookup(_namegH8sOza)
		const _dirm2oUrf = undefined;
		const _fileL48Dqvw = undefined;
		const _returnValuel5hdOYC = await _ViewjG1niF.resolve(_dirm2oUrf, _fileL48Dqvw)
		const _optionsQuvOh8c = null;
		const _callbackXVfZY0p = undefined;
		const _returnValueNF6uEl = await _ViewjG1niF.render(_optionsQuvOh8c, _callbackXVfZY0p)
	});

	it('test for View', async () => {
		const _nameVs8RGtG = "HPdBPBiCiANoQvCJvLXZCUY6oS9siba0HhEXyvqebpZnX4EBdBabSRPILQXYHfW";
		const _optionsibNDtgo = false;
		const _ViewjbOdPQk = new View(_nameVs8RGtG, _optionsibNDtgo)
		const _optionsC2TXdJ = true;
		const _callbackhbU0Ij6 = "aIK117pUsb7Ys8lDZMLxXcAXxHjPq2paxIbGyjGJiJAl8l9IrQzeQvspyBDFepA7u9Nt1Dy";
		const _returnValueoqeD8zd = await _ViewjbOdPQk.render(_optionsC2TXdJ, _callbackhbU0Ij6)
		const _nametcN8eN0 = "HJipVAmsxBIzLPvfQs8f2cTBAae82bgmJwLjMsWqoG2FOIqpCUanGo1s9t6F9fMTcf";
		const _returnValueB12mpHx = await _ViewjbOdPQk.lookup(_nametcN8eN0)
	});
})