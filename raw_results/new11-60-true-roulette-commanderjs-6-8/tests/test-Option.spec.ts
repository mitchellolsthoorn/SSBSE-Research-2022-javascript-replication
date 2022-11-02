export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _arrayValuezClhXJ = "cXtVlqTbA9hhK9TWo9fn3XaXLEzVxYWXgHeGHYHcuHKcCSuhuDIUZt4";
		const _flagsUSGNmzj = [_arrayValuezClhXJ]
		const _descriptioniI5J4x5 = false;
		const _OptionmQfEhn = new Option(_flagsUSGNmzj, _descriptioniI5J4x5)
		const _returnValueyy1i3kX = await _OptionmQfEhn.name()
		const _valuedDiNc7B = null;
		const _arrayValueoc4MLTe = 1.0598318278410765;
		const _previousuDKvfBT = [_arrayValueoc4MLTe]
		const _returnValueWMLFkei = await _OptionmQfEhn._concatValue(_valuedDiNc7B, _previousuDKvfBT)
		const _mandatoryhpqtIMM = false;
		const _returnValueYztX89x = await _OptionmQfEhn.makeOptionMandatory(_mandatoryhpqtIMM)
		const _valuely9n21I = undefined;
		const _descriptionSA98ZRF = "VoErQ1H";
		const _returnValueIsfAGrQ = await _OptionmQfEhn.default(_valuely9n21I, _descriptionSA98ZRF)
	});

	it('test for Option', async () => {
		const _flags0bjdJX = "ac1Nw7LXjB98cEREy2pVaVTQMtbiMj2cjtF9QlnMlJ";
		const _descriptionE7JxykO = null;
		const _OptionstRlM1f = new Option(_flags0bjdJX, _descriptionE7JxykO)
		const _nameHuLDO67 = {
		
	}
		const _returnValuesRgPUn = await _OptionstRlM1f.env(_nameHuLDO67)
		const _returnValuel8iZ2td = await _OptionstRlM1f.attributeName()
	});

	it('test for Option', async () => {
		const _flagsTfiZ4IS = "OyCsl3J2vszvi0OW39HA0xi7MEzySN8qjrkNHvg1WxjSCgtziqqnPjiS";
		const _descriptioniJuqMl0 = undefined;
		const _Optionw5bNTF = new Option(_flagsTfiZ4IS, _descriptioniJuqMl0)
		const _returnValuesufKLYS = await _Optionw5bNTF.name()
		const _valuesOMHrS8J = "OGdGuHyCUrpgKmGufKcNYCUvwF6TjffzYW09WiN85aVGQQEFxr3NEFILfgMkmOWK07Ohy5FI53qVg67P7vVGchi16nqCuYvNk";
		const _returnValueEAK1udq = await _Optionw5bNTF.choices(_valuesOMHrS8J)
		const _namebmkEhed = undefined;
		const _returnValueNZBrIM7 = await _Optionw5bNTF.env(_namebmkEhed)
		const _returnValueFejUxZb = await _Optionw5bNTF.name()
	});

	it('test for Option', async () => {
		const _flagsJQZxnhk = "fe4CgVPTRwlTsvJ8Nq9L633kVv9fQOLToHGBiwzRyx2yDFe9G8SRXWlybr5whyYyFob";
		const _descriptionrcGBIK = null;
		const _OptionE6fLFNS = new Option(_flagsJQZxnhk, _descriptionrcGBIK)
		const _mandatoryieDmgUI = true;
		const _returnValuegaZyaj5 = await _OptionE6fLFNS.makeOptionMandatory(_mandatoryieDmgUI)
		const _valuesygJSWZg = undefined;
		const _returnValueo6fpG2q = await _OptionE6fLFNS.choices(_valuesygJSWZg)
		const _fnb8ukPVZ = {
		
	}
		const _returnValueBug5LOW = await _OptionE6fLFNS.argParser(_fnb8ukPVZ)
	});

	it('test for Option', async () => {
		const _flagsv5AtE7w = "Nk6c7ANLDcSSYk1pdLxEaHBg1jsWD559shVLkI5f2s3gadp166bDmtq4n";
		const _descriptionXV5IOm = {
		
	}
		const _OptiondIVbtUm = new Option(_flagsv5AtE7w, _descriptionXV5IOm)
		const _returnValuexlfonCP = await _OptiondIVbtUm.name()
		const _fncc3b6t1 = {
		
	}
		const _returnValueFnJZw4d = await _OptiondIVbtUm.argParser(_fncc3b6t1)
		const _valueIIb3CzC = undefined;
		const _descriptionWTCEqtB = "L2VvvSg1vFXzH4OeCnsx5G";
		const _returnValuePnP1Mtv = await _OptiondIVbtUm.default(_valueIIb3CzC, _descriptionWTCEqtB)
		const _mandatorybZT003C = false;
		const _returnValueyOL9u9h = await _OptiondIVbtUm.makeOptionMandatory(_mandatorybZT003C)
	});

	it('test for Option', async () => {
		const _flagsW5kHCx6 = "JjDo";
		const _descriptionkns2pWz = "CDfXwdgEAyfFsMLrMquqxfcprqmZis";
		const _OptiontA6MkvH = new Option(_flagsW5kHCx6, _descriptionkns2pWz)
		const _valueGQiJZsP = false;
		const _returnValuez0TKZXj = -2.177480216295537;
		const _previouspsCwWI = () => { return _returnValuez0TKZXj };
		const _returnValuerHfc4Lm = await _OptiontA6MkvH._concatValue(_valueGQiJZsP, _previouspsCwWI)
		const _argASGfHZg = "Bma";
		const _returnValuetevZ7aO = await _OptiontA6MkvH.is(_argASGfHZg)
		const _arrayValuegOBmPae = null;
		const _returnValueTLXRtFa = "2wAH1wSA7N9LUbjTLaXNl5TcViItCARiVnnxhWnlIAidgwpQV5iFEh9FAS";
		const _arrayValueUzB4jRq = () => { return _returnValueTLXRtFa };
		const _valuezINsEN4 = [_arrayValuegOBmPae, _arrayValueUzB4jRq]
		const _previousoabpFM5 = "qtWv7HpgrzHcEvvBz6UAUfJjCHJHOgQ6LLPVtfQuJkboiggxE9k6YnfBlBOyyL6qaJ8LENMamiaBEp";
		const _returnValueRXTa8x9 = await _OptiontA6MkvH._concatValue(_valuezINsEN4, _previousoabpFM5)
	});

	it('test for Option', async () => {
		const _flagsYNfsW3 = "jL";
		const _descriptionBGp0YGi = undefined;
		const _OptiontZQBehS = new Option(_flagsYNfsW3, _descriptionBGp0YGi)
		const _nameZ14ONSh = {
		
	}
		const _returnValueftq1PAy = await _OptiontZQBehS.env(_nameZ14ONSh)
		const _returnValueg1MPHo = await _OptiontZQBehS.name()
		const _returnValueDgb9HIw = await _OptiontZQBehS.name()
		const _hidegdG15wt = true;
		const _returnValueNQi6P1A = await _OptiontZQBehS.hideHelp(_hidegdG15wt)
		const _valueFKwseYP = undefined;
		const _returnValuePllyhnD = undefined;
		const _previousNrEI0JA = () => { return _returnValuePllyhnD };
		const _returnValueCnkXrSf = await _OptiontZQBehS._concatValue(_valueFKwseYP, _previousNrEI0JA)
	});

	it('test for Option', async () => {
		const _flagsGV4YeoS = "rz3EFwJaAvuvPm3uN1IXj3qTlM4mtvrv1uFpbXTUfScjh2fH2gHAPUvi58FOLA2VRyUR7mGPiFkSCjl91ci6N";
		const _arrayValueAh9q6F = true;
		const _arrayValuejw95qkR = -8.718849699743892;
		const _arrayValuedeh0lGw = "RlcfAdffyZKBSrCMRSXWVg2qKQvgiq6shF9XrrEngdhmxrPqrbeUVlsag4Pp4aW3rdxtNdeo";
		const _descriptionqZNxyUf = [_arrayValueAh9q6F, _arrayValuejw95qkR, _arrayValuedeh0lGw]
		const _OptionlpW6FOV = new Option(_flagsGV4YeoS, _descriptionqZNxyUf)
		const _valueUuDCE3 = undefined;
		const _returnValuervZ7q48 = 2.787041724905553;
		const _previousou0AM4F = () => { return _returnValuervZ7q48 };
		const _returnValueCrIwpkK = await _OptionlpW6FOV._concatValue(_valueUuDCE3, _previousou0AM4F)
		const _hidexC2lQA0 = false;
		const _returnValuep7Ipe4K = await _OptionlpW6FOV.hideHelp(_hidexC2lQA0)
		const _valuesLgczPD = undefined;
		const _descriptionhkCaCN = {
		
	}
		const _returnValueBLeXS5H = await _OptionlpW6FOV.default(_valuesLgczPD, _descriptionhkCaCN)
		const _valueo1KmdQr = true;
		const _arrayValuekVjdW5r = "yVYBbWuCP5unbOojmSAZAYB9QDWTXS5JoEHP4G69YFGB7Ngw2pCXouq2";
		const _arrayValue2kdG0s = "feqgJxlsuT88MN1rvl5hhmVyTmw9w9zR";
		const _arrayValuetLaXpNp = undefined;
		const _previousL5wTID = [_arrayValuekVjdW5r, _arrayValue2kdG0s, _arrayValuetLaXpNp]
		const _returnValuew3kbKug = await _OptionlpW6FOV._concatValue(_valueo1KmdQr, _previousL5wTID)
		const _argKk8FXFr = {
		
	}
		const _returnValuef9FdRBB = await _OptionlpW6FOV.is(_argKk8FXFr)
	});
})