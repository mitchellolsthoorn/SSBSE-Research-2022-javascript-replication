export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");

describe('req', () => {
	it('test for req', async () => {
		const _reqwY9pDJY = req
		const _typesGfnFxW6 = true;
		const _returnValuewZT3M2X = await _reqwY9pDJY.is(_typesGfnFxW6)
		const _returnValueDxkjUxF = await _reqwY9pDJY.accepts()
		const _arrayValuefkbaSeA = null;
		const _namec6u2BUP = [_arrayValuefkbaSeA]
		const _arrayValuelbYPmfp = "QQAAOio1UJIdq7PrRwwt5aE90Zo5zgj6JOD7pV5b183XyjRkiJGjS0508LWAfAeJpGm6O8lzGJ4YmUbHPIJn7onCdrsIWvJLgU";
		const _arrayValueAo3g5eU = null;
		const _returnValuecTDewy6 = [_arrayValuelbYPmfp, _arrayValueAo3g5eU]
		const _defaultValueZPGPBTp = () => { return _returnValuecTDewy6 };
		const _returnValue5Up1Ek = await _reqwY9pDJY.param(_namec6u2BUP, _defaultValueZPGPBTp)
		const _sizeAJ5lbnL = false;
		const _optionsYHwhc96 = "lKnG1ONtJMZ427bwbqijRw32hVpNpd5VD9N3C0mczLfeZIxfZ3dcSEDXP";
		const _returnValueBBn7icK = await _reqwY9pDJY.range(_sizeAJ5lbnL, _optionsYHwhc96)
	});

	it('test for req', async () => {
		const _reqkV7FPTV = req
		const _returnValueQRZZ5aC = await _reqkV7FPTV.acceptsCharsets()
		const _arrayValuezL37Di0 = -1.2523817538077715;
		const _arrayValuewDzX5iw = null;
		const _arrayValueuw88GVA = [_arrayValuezL37Di0, _arrayValuewDzX5iw]
		const _arrayValueq8vdmX6 = undefined;
		const _typesDnRuElY = [_arrayValueuw88GVA, _arrayValueq8vdmX6]
		const _returnValuesSsL6hi = await _reqkV7FPTV.is(_typesDnRuElY)
		const _nameQPGaVzm = false;
		const _defaultValueZdGimff = undefined;
		const _returnValueKtiARFN = await _reqkV7FPTV.param(_nameQPGaVzm, _defaultValueZdGimff)
	});
})