export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameyAiTLp7 = 3.5657834515000246;
		const _optionsZBNQdhH = null;
		const _ViewWQVl3x8 = new View(_nameyAiTLp7, _optionsZBNQdhH)
		const _dirDBGdlLU = undefined;
		const _filecIEVPC = false;
		const _returnValuen5twDrI = await _ViewWQVl3x8.resolve(_dirDBGdlLU, _filecIEVPC)
		const _dirfFxRFZ7 = -2.2668464650913043;
		const _fileaGD94a = 8.700939852704582;
		const _returnValuexm0GLvf = await _ViewWQVl3x8.resolve(_dirfFxRFZ7, _fileaGD94a)
	});

	it('test for View', async () => {
		const _nameBNyfVVe = "7Xp0kO8qHWzCxTqHyUrKp";
		const _optionsfxEQf8 = undefined;
		const _ViewNd38iQa = new View(_nameBNyfVVe, _optionsfxEQf8)
		const _returnValue7rdDNu = 1.3470068626592262;
		const _dirCWFC4VC = () => { return _returnValue7rdDNu };
		const _fileufvvHYh = "AlJTLzLoVxzr7doUDzBSBXQ3OI5AHLBdQJFEFO0iB";
		const _returnValueokEceDM = await _ViewNd38iQa.resolve(_dirCWFC4VC, _fileufvvHYh)
		const _returnValueUF3oSrb = 6.53091748942294;
		const _optionsg5qWfBP = () => { return _returnValueUF3oSrb };
		const _callbackjwYoonh = null;
		const _returnValueUIMy46 = await _ViewNd38iQa.render(_optionsg5qWfBP, _callbackjwYoonh)
	});
})