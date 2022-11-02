export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _namePXvIvMP = true;
		const _optionsP2dDek = null;
		const _ViewzH9KBHM = new View(_namePXvIvMP, _optionsP2dDek)
		const _dirzpK3bee = null;
		const _filesTmk1Sq = true;
		const _returnValuekVude0g = await _ViewzH9KBHM.resolve(_dirzpK3bee, _filesTmk1Sq)
		const _dirEGbBAGb = 2.9002399241342047;
		const _fileTTMsrvr = false;
		const _returnValueTX4TEkf = await _ViewzH9KBHM.resolve(_dirEGbBAGb, _fileTTMsrvr)
		const _namewPmLA4d = 1.8431486195153255;
		const _returnValueOtOXRS3 = await _ViewzH9KBHM.lookup(_namewPmLA4d)
	});

	it('test for View', async () => {
		const _namebP1zKUD = "c4BC6AoJlP9l1vrWxjBL9rBcX4o25OfK0JDdp4KF7HCuhF1fHs8kqU2KgII";
		const _optionsN2BPukZ = null;
		const _ViewAXyuFv = new View(_namebP1zKUD, _optionsN2BPukZ)
		const _arrayValueHfRKKuq = null;
		const _arrayValueIA7Opmh = [_arrayValueHfRKKuq]
		const _nameUsjTPx4 = [_arrayValueIA7Opmh]
		const _returnValueW20qs2d = await _ViewAXyuFv.lookup(_nameUsjTPx4)
		const _nameleVeXoJ = "PzdL3c4uvwSPebicQkBvspBOPdbGceATJRpHMXp5MZ5QGjttQhwfZbnNDymJcF1i0mC2l4";
		const _returnValuedw4iUqz = await _ViewAXyuFv.lookup(_nameleVeXoJ)
	});
})