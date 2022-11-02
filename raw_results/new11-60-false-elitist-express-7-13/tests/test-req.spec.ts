export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");

describe('req', () => {
	it('test for req', async () => {
		const _reqTLd7IFZ = req
		const _returnValueZ9SGIa9 = await _reqTLd7IFZ.acceptsLanguages()
		const _returnValueceoTTEb = await _reqTLd7IFZ.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqOiWsefT = req
		const _namehQpA8QH = "c6o14JIXuumo8RNLNL9tWwtjQ42MNKJQ4oNsiSN1EGlcUJb9MOf7MYkJPi8KalLquoLmhUY9XrqWmbzamPmdVC";
		const _defaultValuebmdDLj = null;
		const _returnValuefZHwP4 = await _reqOiWsefT.param(_namehQpA8QH, _defaultValuebmdDLj)
		const _returnValueGhUD8TZ = await _reqOiWsefT.accepts()
		const _returnValueZWrWbep = await _reqOiWsefT.acceptsEncodings()
		const _returnValuesVTNuY1 = await _reqOiWsefT.acceptsLanguages()
		const _returnValuevQK1eLE = await _reqOiWsefT.acceptsEncodings()
	});

	it('test for req', async () => {
		const _reqBXldB9N = req
		const _returnValueHKZhON5 = await _reqBXldB9N.acceptsLanguages()
		const _name782Nba = "a";
		const _returnValuei5Ig6KD = false;
		const _defaultValuel6kxUf = () => { return _returnValuei5Ig6KD };
		const _returnValuexPbNz1I = await _reqBXldB9N.param(_name782Nba, _defaultValuel6kxUf)
		const _typesvCrTmql = {
		
	}
		const _returnValueeX9x4Y = await _reqBXldB9N.is(_typesvCrTmql)
		const _returnValuew5plOP = await _reqBXldB9N.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqDWGFz22 = req
		const _sizeMX0C66F = null;
		const _optionskEu8gEM = undefined;
		const _returnValueMOsoLev = await _reqDWGFz22.range(_sizeMX0C66F, _optionskEu8gEM)
		const _returnValuepNHESBO = await _reqDWGFz22.acceptsLanguages()
	});

	it('test for req', async () => {
		const _reqSWH99iP = req
		const _arrayValueaVos3xo = false;
		const _arrayValuecIHcfFP = 5.346519524189661;
		const _arrayValuexEiqIhy = true;
		const _typesWUqY96W = [_arrayValueaVos3xo, _arrayValuecIHcfFP, _arrayValuexEiqIhy]
		const _returnValueeK0rhf = await _reqSWH99iP.is(_typesWUqY96W)
		const _returnValueUJBfAoi = await _reqSWH99iP.acceptsEncodings()
	});
})