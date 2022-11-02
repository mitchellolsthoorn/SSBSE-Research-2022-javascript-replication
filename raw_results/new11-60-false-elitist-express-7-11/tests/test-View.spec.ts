export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameGAFQB1k = -3.0911317568381866;
		const _optionsZbrUs32 = false;
		const _Viewf8YYSi0 = new View(_nameGAFQB1k, _optionsZbrUs32)
		const _optionskseLEUw = undefined;
		const _callbacklyQDZWf = "nMd2Y5";
		const _returnValueeI6SG1K = await _Viewf8YYSi0.render(_optionskseLEUw, _callbacklyQDZWf)
		const _optionsB2sFQU1 = 6.203158672486104;
		const _arrayValueP1G9CXL = false;
		const _arrayValueoFWy6DO = false;
		const _callbackEjpxupY = [_arrayValueP1G9CXL, _arrayValueoFWy6DO]
		const _returnValueEWqKkr6 = await _Viewf8YYSi0.render(_optionsB2sFQU1, _callbackEjpxupY)
	});

	it('test for View', async () => {
		const _nameMuASvQp = "WwfuC0uk9gfut6oagDOQoRwVPciFP66HkT1xmaeQTQgzvJ6fzoSFsR";
		const _arrayValuelnbPbQd = {
		
	}
		const _optionsapTc6qS = [_arrayValuelnbPbQd]
		const _ViewjM1LUBC = new View(_nameMuASvQp, _optionsapTc6qS)
		const _namelEAOwsg = null;
		const _returnValuenabCHU7 = await _ViewjM1LUBC.lookup(_namelEAOwsg)
		const _nameLa3D6Nu = "3eNUIdtlgyQYh5Q8qL";
		const _returnValueaImjDZ1 = await _ViewjM1LUBC.lookup(_nameLa3D6Nu)
		const _dirqutDf3B = true;
		const _returnValuewWuKiM = -6.2439553303074184;
		const _arrayValueZFhPG8 = () => { return _returnValuewWuKiM };
		const _arrayValueGgJ1X5k = false;
		const _filexoAnohp = [_arrayValueZFhPG8, _arrayValueGgJ1X5k]
		const _returnValueWPM3yO2 = await _ViewjM1LUBC.resolve(_dirqutDf3B, _filexoAnohp)
	});
})