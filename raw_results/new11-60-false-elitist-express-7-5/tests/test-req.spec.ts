export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqy5xaMS = req
		const _size9npwPc = {
		
	}
		const _options0uZv2w = "iTx4fsWHrunwgcNz3de1SRke91dRZIfi7CGnnhSFH3HX7Tz2iJnWU3RnYg6gL5RUN29W23XQh9S4";
		const _returnValuemr6x6b3 = await _reqy5xaMS.range(_size9npwPc, _options0uZv2w)
		const _returnValueLXS7DtH = await _reqy5xaMS.acceptsLanguages()
		const _namevPhzTOt = undefined;
		const _returnValueSFQTDhh = await _reqy5xaMS.header(_namevPhzTOt)
		const _nameuGXhwzd = "qstfCCEbKThsbMWb9NCcJYtyHHfrQ8FhbhNkiUQriJf3hHGUYIJ4ArAXcge";
		const _defaultValueZvGBTlz = null;
		const _returnValuelnFE10g = await _reqy5xaMS.param(_nameuGXhwzd, _defaultValueZvGBTlz)
	});

	it('test for req', async () => {
		const _reqn9cgACz = req
		const _returnValuelfeO8Q = await _reqn9cgACz.acceptsLanguages()
		const _returnValueccxhyiC = await _reqn9cgACz.accepts()
		const _nameEuJTHSd = "4QPMp3FnXBNnU1Gm5q2dvQ44wbVxfUO31mYSrHDWnT5EevPkLp2RuYDeWndERCNmK9Y2tIe9N5k1B";
		const _defaultValue40tklB = undefined;
		const _returnValueQ5UShlN = await _reqn9cgACz.param(_nameEuJTHSd, _defaultValue40tklB)
	});

	it('test for req', async () => {
		const _reqR4GNNHb = req
		const _nameCy8E9rG = false;
		const _defaultValueorcOuDv = 2.9491268248479408;
		const _returnValueMLbby5C = await _reqR4GNNHb.param(_nameCy8E9rG, _defaultValueorcOuDv)
		const _typest6UeGzY = {
		
	}
		const _returnValueCwyk8CP = await _reqR4GNNHb.is(_typest6UeGzY)
		const _typesvcZ6Xmf = {
		
	}
		const _returnValuelgSrDLP = await _reqR4GNNHb.is(_typesvcZ6Xmf)
		const _returnValuejmXwNei = await _reqR4GNNHb.accepts()
		const _returnValuee81MWC = await _reqR4GNNHb.accepts()
	});

	it('test for req', async () => {
		const _reqdd5IIGJ = req
		const _returnValueFsu67hz = await _reqdd5IIGJ.acceptsEncodings()
		const _arrayValueG4oSqMZ = null;
		const _sizePFLhSk = [_arrayValueG4oSqMZ]
		const _returnValuesxCOlYA = 6.818268200833863;
		const _optionsKFkeuS7 = () => { return _returnValuesxCOlYA };
		const _returnValueyWSGGo9 = await _reqdd5IIGJ.range(_sizePFLhSk, _optionsKFkeuS7)
		const _arrayValuegWjakD = null;
		const _arrayValueCxOL3RV = "1MSaJvsuats4AhlkBmuujVP3mdfmNmkTnwYsjLk03g";
		const _typesk5tKGSi = [_arrayValuegWjakD, _arrayValueCxOL3RV]
		const _returnValueBSz3jlG = await _reqdd5IIGJ.is(_typesk5tKGSi)
		const _returnValuerIPvtJ0 = await _reqdd5IIGJ.accepts()
		const _returnValue8wECX7 = await _reqdd5IIGJ.accepts()
	});
})