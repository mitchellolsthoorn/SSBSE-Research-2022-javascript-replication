export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameQ86rFJB = 5.739502548813187;
		const _optionswJEorij = undefined;
		const _ViewejLEfUv = new View(_nameQ86rFJB, _optionswJEorij)
		const _namenzF4Etc = "UTg9iY4xFhrK";
		const _returnValueINEYs0 = await _ViewejLEfUv.lookup(_namenzF4Etc)
		const _nameSfe32FU = "oVqS3TPSk25qh6wK";
		const _returnValueZ3lCwFK = await _ViewejLEfUv.lookup(_nameSfe32FU)
		const _dirMOMUMzT = undefined;
		const _fileozPcSbV = false;
		const _returnValuezBpEd3o = await _ViewejLEfUv.resolve(_dirMOMUMzT, _fileozPcSbV)
	});

	it('test for View', async () => {
		const _nameJpdkmyt = "JhPvALIu6SEfVm0MkmVB4adwXvOwa3R3ybAgl5vObV7vfqdNUWTqRvRwjKt";
		const _optionszdhtXCb = false;
		const _ViewcIhvklM = new View(_nameJpdkmyt, _optionszdhtXCb)
		const _nameizQOXIR = false;
		const _returnValuefsv1hIA = await _ViewcIhvklM.lookup(_nameizQOXIR)
	});
})