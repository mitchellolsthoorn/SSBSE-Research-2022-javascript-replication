export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _startsWithLjOelrs = true;
		const _returnValueegkPm66 = undefined;
		const _slice7khObr = () => { return _returnValueegkPm66 };
		const _lengthOXHEjkD = 1.3465341005910147;
		const _wordzYA7JIb = {
			"startsWith": _startsWithLjOelrs,
		"slice": _slice7khObr,
		"length": _lengthOXHEjkD
	}
		const _returnValueeRq6qJ = {
		
	}
		const _candidatesWqTjf8Q = () => { return _returnValueeRq6qJ };
		const _returnValueEkcnowr = await suggestSimilar(_wordzYA7JIb, _candidatesWqTjf8Q)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuek4owkmL = {
		
	}
		const _startsWithUH6NRm5 = () => { return _returnValuek4owkmL };
		const _returnValueWp46ANs = "7T3slckvJOrT";
		const _sliceI4xJQw = () => { return _returnValueWp46ANs };
		const _lengthLY9bZ4S = -9.067667560699377;
		const _wordHF0CG3J = {
			"startsWith": _startsWithUH6NRm5,
		"slice": _sliceI4xJQw,
		"length": _lengthLY9bZ4S
	}
		const _candidatesl5UOVuD = "IbhS4XwUbw8eDAUq4tKU6Fh6tSx5PnK";
		const _returnValueXiIcN7f = await suggestSimilar(_wordHF0CG3J, _candidatesl5UOVuD)
	});

	it('test for suggestSimilar', async () => {
		const _wordvKxy38A = "KfwF5cUtgsns9hpLtSPWE7jhYPxheqzASU6K62MHiCwri3ihkjhVUXfDol43S14uYPPnpVQYA";
		const _arrayValuerqnEzP = 0.2956896418488686;
		const _candidateslhey9So = [_arrayValuerqnEzP]
		const _returnValueUkWsHuo = await suggestSimilar(_wordvKxy38A, _candidateslhey9So)
	});

	it('test for suggestSimilar', async () => {
		const _wordcaCozC = "4UukwMVUj70otv9syIn3ebRR4LKZet94NY7UY6dYCOJfsQBuP0jAbdxBtHokacYy28";
		const _arrayValuehNnjIvB = {
		
	}
		const _arrayValueYxSCwk = "Xlnk32WNHISLHfM1f2kQFPPpeswWWYYNCxvUaFe7vuSMuwEeDuRTQwiODTkHjmFdjaKsFc";
		const _arrayValuecGJ7A57 = "e1QEjTpbcnSXpGsUXDrbBwf8WpyFrJE";
		const _arrayValueD4tdzXp = "57AX";
		const _arrayValuedea9gq0 = false;
		const _arrayValueeojyNTL = null;
		const _arrayValueOK6xQBr = false;
		const _arrayValueUkYAGlq = [_arrayValueD4tdzXp, _arrayValuedea9gq0, _arrayValueeojyNTL, _arrayValueOK6xQBr]
		const _candidateshayJ6by = [_arrayValuehNnjIvB, _arrayValueYxSCwk, _arrayValuecGJ7A57, _arrayValueUkYAGlq]
		const _returnValuezeXUt1G = await suggestSimilar(_wordcaCozC, _candidateshayJ6by)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueIyF5dnj = -4.51538007391553;
		const _startsWithVm2A9rm = () => { return _returnValueIyF5dnj };
		const _returnValueG0XCLqc = false;
		const _sliceLdXoJ1D = () => { return _returnValueG0XCLqc };
		const _lengthOGb7bDS = 8.818711545153398;
		const _wordfvUFH5B = {
			"startsWith": _startsWithVm2A9rm,
		"slice": _sliceLdXoJ1D,
		"length": _lengthOGb7bDS
	}
		const _arrayValueQNowurC = "ECyyrZ3EywsBpdlOibCDdT4jDGgUzipEdlxrHLv7iQxItoPcSkxxPuEiKQJn885BR58fe";
		const _candidatesXpGMdXO = [_arrayValueQNowurC]
		const _returnValueAdsuU9 = await suggestSimilar(_wordfvUFH5B, _candidatesXpGMdXO)
	});

	it('test for suggestSimilar', async () => {
		const _wordKpzTZ2 = "lmJh45zBSiqXrltT2OATxrW336IUysvb3fhZmD5i4MWEiX";
		const _arrayValueD0bqMp = -7.118034544924484;
		const _arrayValueA4CdL2u = "SMUiBfPspcuzjGTbONqLoUhKfS7aphZqNlNupjDBu6AdS34f";
		const _arrayValueB51QeD3 = undefined;
		const _candidatesC7Jx3S = [_arrayValueD0bqMp, _arrayValueA4CdL2u, _arrayValueB51QeD3]
		const _returnValueDdveQ3 = await suggestSimilar(_wordKpzTZ2, _candidatesC7Jx3S)
	});
})