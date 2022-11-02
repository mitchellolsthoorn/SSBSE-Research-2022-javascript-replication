export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameGLwTUsc = null;
		const _optionsIIwTzW1 = undefined;
		const _ViewpLXDuJS = new View(_nameGLwTUsc, _optionsIIwTzW1)
		const _arrayValueDBiGMl6 = true;
		const _arrayValueWwMuKR1 = null;
		const _arrayValuen5RG5Nf = []
		const _arrayValuejR9Uw5X = [_arrayValueWwMuKR1, _arrayValuen5RG5Nf]
		const _arrayValuehubFyDr = "G461JUB7jUbIaf37BdAqnKcQQ4SpeSEgeXCYKtlE1U18puF1BtjEH1iLLnPAOgJWhjBYOwwcA3rgUbOQZYh23NkhNw";
		const _arrayValueYmAI1Of = {
		
	}
		const _nameDutEDT = [_arrayValueDBiGMl6, _arrayValuejR9Uw5X, _arrayValuehubFyDr, _arrayValueYmAI1Of]
		const _returnValueSESH4e = await _ViewpLXDuJS.lookup(_nameDutEDT)
		const _dirMNUJ7my = true;
		const _fileWHF3HJv = undefined;
		const _returnValuewp9fX7g = await _ViewpLXDuJS.resolve(_dirMNUJ7my, _fileWHF3HJv)
		const _dirIQuzHlS = null;
		const _filezzIWson = null;
		const _returnValuelhHEYc = await _ViewpLXDuJS.resolve(_dirIQuzHlS, _filezzIWson)
		const _dira3lX2D = undefined;
		const _fileLvOB9Jm = 8.262919329551224;
		const _returnValuevDNCi8r = await _ViewpLXDuJS.resolve(_dira3lX2D, _fileLvOB9Jm)
	});

	it('test for View', async () => {
		const _nameZyKKijI = "85b3R33DsMdjhL1gbqFkcpbhG22Bug89eyoozR4Gg7hTw1XjYP74XswlaWG9AMHIMjTuK";
		const _optionsr7y7nVy = undefined;
		const _ViewUkeOr2q = new View(_nameZyKKijI, _optionsr7y7nVy)
		const _arrayValueP3PcJT5 = true;
		const _optionsmrAKgDJ = [_arrayValueP3PcJT5]
		const _callbackJrtgYSl = true;
		const _returnValueCowESJQ = await _ViewUkeOr2q.render(_optionsmrAKgDJ, _callbackJrtgYSl)
		const _optionsRH4GKkk = false;
		const _callbackiKPmW3r = {
		
	}
		const _returnValueRMludJe = await _ViewUkeOr2q.render(_optionsRH4GKkk, _callbackiKPmW3r)
		const _dirLnPKZDu = "Ska9VrA1sHts94fhsrvqhO1me2FNukXY2JCOFpNlP";
		const _fileGw9qV1 = undefined;
		const _returnValueTVE57P = await _ViewUkeOr2q.resolve(_dirLnPKZDu, _fileGw9qV1)
		const _namesbKoXcU = undefined;
		const _returnValueWCDeaXh = await _ViewUkeOr2q.lookup(_namesbKoXcU)
	});
})