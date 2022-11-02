export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameGSbKmXa = -1.5351111391099277;
		const _optionsfnJOk6c = {
		
	}
		const _ViewQt4DDM3 = new View(_nameGSbKmXa, _optionsfnJOk6c)
		const _nameHgpgCDO = "NX12sP58KnPSVGiiTCkIwMx0sy6asWWIGR3Vv";
		const _returnValuedL3ARu7 = await _ViewQt4DDM3.lookup(_nameHgpgCDO)
		const _namecHyljX = {
		
	}
		const _returnValueV4TOdwh = await _ViewQt4DDM3.lookup(_namecHyljX)
		const _optionsxTB7TDi = null;
		const _callbackJTWyGeW = {
		
	}
		const _returnValueXyBgZTR = await _ViewQt4DDM3.render(_optionsxTB7TDi, _callbackJTWyGeW)
	});

	it('test for View', async () => {
		const _namelK7CrPh = "YYiCj5Uv2";
		const _optionsiblkZwA = 3.729855724612964;
		const _ViewfxMyHNe = new View(_namelK7CrPh, _optionsiblkZwA)
		const _returnValueJpfHKoR = "m0Pv89MUcX5CWJKhPklDXtv5PgNcXeEPX9FfTBoDbaUDts6VSRD1Fm";
		const _namePRAYKP = () => { return _returnValueJpfHKoR };
		const _returnValuevc5c0TF = await _ViewfxMyHNe.lookup(_namePRAYKP)
		const _optionsTB3G884 = {
		
	}
		const _callbackC8XOYag = undefined;
		const _returnValueXbxfQ6e = await _ViewfxMyHNe.render(_optionsTB3G884, _callbackC8XOYag)
		const _returnValuePyxXqOU = false;
		const _optionsSFMLs8S = () => { return _returnValuePyxXqOU };
		const _callbackSXIy3Ts = undefined;
		const _returnValueLMKAaLZ = await _ViewfxMyHNe.render(_optionsSFMLs8S, _callbackSXIy3Ts)
	});
})