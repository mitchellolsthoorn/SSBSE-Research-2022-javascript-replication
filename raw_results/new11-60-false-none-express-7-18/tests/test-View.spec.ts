export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameqk8Mf1I = "7d3mDSWWpXC8LCqiftGRWJl62AhDBznwZWDxRsHCMlubkSZIyeGXOxph3S0nPy2nUcbqeO3U88n6uYJE0nNBaIwwZ9ii";
		const _optionsn0XhZMU = -9.970481412296643;
		const _ViewTlAQrwf = new View(_nameqk8Mf1I, _optionsn0XhZMU)
		const _dirJioHnEZ = null;
		const _arrayValueKkI8Uf5 = undefined;
		const _arrayValueqPRYZpP = null;
		const _arrayValueLDhRj7f = {
		
	}
		const _arrayValuewqBHprX = null;
		const _fileXvLXxwM = [_arrayValueKkI8Uf5, _arrayValueqPRYZpP, _arrayValueLDhRj7f, _arrayValuewqBHprX]
		const _returnValueGKyhfW2 = await _ViewTlAQrwf.resolve(_dirJioHnEZ, _fileXvLXxwM)
		const _dircWBhRF = undefined;
		const _filefLaCSCO = "BrUH5GNZBKjdbtWVjutg2h8ZItjNlKW5RrQLsQphdMHaXoTTtZsQHvsulXkYNoNJrFnCPC";
		const _returnValuebj9vJdx = await _ViewTlAQrwf.resolve(_dircWBhRF, _filefLaCSCO)
		const _arrayValueIexd7U = undefined;
		const _arrayValueDT5Wba = "UN42j8fHD1LPM7PnADxrcNzvthSRTCgnmU9rJWTdmrPtXQiNpa";
		const _dirlYaiEup = [_arrayValueIexd7U, _arrayValueDT5Wba]
		const _fileJoJEV2 = {
		
	}
		const _returnValueNgb7VkJ = await _ViewTlAQrwf.resolve(_dirlYaiEup, _fileJoJEV2)
		const _optionsQKOQgl6 = "FUoVT1bmtAdQxt4OAwQXj3hEu6dctIS529wI4MpQw1udEv";
		const _callbackaZbdZA4 = null;
		const _returnValueNqCY9I2 = await _ViewTlAQrwf.render(_optionsQKOQgl6, _callbackaZbdZA4)
	});
})