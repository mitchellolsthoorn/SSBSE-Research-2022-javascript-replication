export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameRQN4qSS = 1.279975206116351;
		const _returnValueD3VGuGJ = []
		const _optionsKiufHN = () => { return _returnValueD3VGuGJ };
		const _Viewnf1zMBY = new View(_nameRQN4qSS, _optionsKiufHN)
		const _dirSapWVrm = "H4yjYmCMALVFSuyM2NxVpDmObzR8P3ueTyN7kB";
		const _fileE7OF85E = true;
		const _returnValueq8vqJyg = await _Viewnf1zMBY.resolve(_dirSapWVrm, _fileE7OF85E)
		const _nameRzJ7et0 = undefined;
		const _returnValueUEuLxCI = await _Viewnf1zMBY.lookup(_nameRzJ7et0)
	});

	it('test for View', async () => {
		const _nameaZpUyIu = "yqEAWRPUck3xyGn8Mh3Upfndd535VtlJqcMUzlrgMaISaCleWVlcCfEpL01zmqD5x7C33jfUzRaP";
		const _optionswtwrlfb = true;
		const _Viewflzv9oN = new View(_nameaZpUyIu, _optionswtwrlfb)
		const _optionsahF9K3B = true;
		const _callbacko7rSYcC = undefined;
		const _returnValueZQ5pFh2 = await _Viewflzv9oN.render(_optionsahF9K3B, _callbacko7rSYcC)
		const _dirgI9GJuE = true;
		const _filebGcxwQ = 8.480866500307876;
		const _returnValuebDMmJ0j = await _Viewflzv9oN.resolve(_dirgI9GJuE, _filebGcxwQ)
		const _optionsLgs2dKM = -6.404430395725223;
		const _callbackNqbyeKI = undefined;
		const _returnValuexa65Yhh = await _Viewflzv9oN.render(_optionsLgs2dKM, _callbackNqbyeKI)
		const _arrayValueVWpUJWk = -3.1600076248942432;
		const _arrayValueJP21as3 = null;
		const _dirV9Z8Rsx = [_arrayValueVWpUJWk, _arrayValueJP21as3]
		const _fileNEeFzpr = undefined;
		const _returnValueiYHlsUU = await _Viewflzv9oN.resolve(_dirV9Z8Rsx, _fileNEeFzpr)
	});
})