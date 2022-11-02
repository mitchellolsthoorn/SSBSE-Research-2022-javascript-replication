export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _namee5IVJY = -9.162968066021284;
		const _optionsu0kl8F0 = undefined;
		const _Viewr6SUUiS = new View(_namee5IVJY, _optionsu0kl8F0)
		const _optionss3kWEq = false;
		const _callback7iP6m5 = undefined;
		const _returnValueWopA1vi = await _Viewr6SUUiS.render(_optionss3kWEq, _callback7iP6m5)
		const _optionsPZajMC = null;
		const _callbackV9uPLAe = {
		
	}
		const _returnValueoDW0dt = await _Viewr6SUUiS.render(_optionsPZajMC, _callbackV9uPLAe)
		const _optionsFHvruCh = false;
		const _callbackWggR2Ie = {
		
	}
		const _returnValuefn2wLqe = await _Viewr6SUUiS.render(_optionsFHvruCh, _callbackWggR2Ie)
	});

	it('test for View', async () => {
		const _namex4y5iKx = "KzenVNpY2wcKdS2P2RKjPmJ4ho";
		const _optionsWE2jpuC = false;
		const _ViewzPyQm5E = new View(_namex4y5iKx, _optionsWE2jpuC)
		const _optionsFJbzpK0 = null;
		const _returnValuexh4NslW = false;
		const _callbackMxmtlDY = () => { return _returnValuexh4NslW };
		const _returnValueceHHNOP = await _ViewzPyQm5E.render(_optionsFJbzpK0, _callbackMxmtlDY)
		const _namebZ0fUxi = undefined;
		const _returnValueWoBB97u = await _ViewzPyQm5E.lookup(_namebZ0fUxi)
		const _optionsEXFLsjr = undefined;
		const _callbackgJ8KXyo = null;
		const _returnValueVoGulZy = await _ViewzPyQm5E.render(_optionsEXFLsjr, _callbackgJ8KXyo)
	});
})