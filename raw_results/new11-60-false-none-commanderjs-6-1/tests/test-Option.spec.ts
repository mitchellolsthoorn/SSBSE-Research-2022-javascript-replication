export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsifKPhH = false;
		const _descriptionje38EXu = false;
		const _OptionpVOYVul = new Option(_flagsifKPhH, _descriptionje38EXu)
		const _fnk076Ifb = 4.829479746129783;
		const _returnValueeKLkgKj = await _OptionpVOYVul.argParser(_fnk076Ifb)
	});

	it('test for Option', async () => {
		const _arrayValueD6aU1nF = null;
		const _arrayValuePuyBXUd = false;
		const _arrayValuejdzROiP = undefined;
		const _arrayValuexi7aWY0 = -4.757686651859709;
		const _flagsQq5UVw = [_arrayValueD6aU1nF, _arrayValuePuyBXUd, _arrayValuejdzROiP, _arrayValuexi7aWY0]
		const _descriptionbZ9whP = false;
		const _OptionaousJJb = new Option(_flagsQq5UVw, _descriptionbZ9whP)
		const _mandatoryWgNmT5B = null;
		const _returnValueu0G96PO = await _OptionaousJJb.makeOptionMandatory(_mandatoryWgNmT5B)
		const _arrayValueTLMHXaV = false;
		const _arrayValuefKubbXt = "LHUocGBKYzm9";
		const _fnYg1aewx = [_arrayValueTLMHXaV, _arrayValuefKubbXt]
		const _returnValuelPDw464 = await _OptionaousJJb.argParser(_fnYg1aewx)
		const _hidej6WFTGd = "biBzsluK8LsLg2HuyNkWSubxVm9EQwG2Tz6DmW79WcmTWn44vH8PkLdCX4HAkK8s5v0N6Wy";
		const _returnValueERXcM8h = await _OptionaousJJb.hideHelp(_hidej6WFTGd)
	});

	it('test for Option', async () => {
		const _flagsODOFFcU = "ePKPExl2iebSDAPol2e83Yx2yvkklGJVeHWN6uSqUjaGnBxSaf4quLGbqesX64oGSTYThVm6XxBhQpcPfY0O16521SqrVTKV";
		const _descriptionIUaCHD = {
		
	}
		const _OptionuESdoD = new Option(_flagsODOFFcU, _descriptionIUaCHD)
		const _mandatoryHXW6UTs = 5.075539049773836;
		const _returnValueow2nKPS = await _OptionuESdoD.makeOptionMandatory(_mandatoryHXW6UTs)
		const _fnnrPWYOL = {
		
	}
		const _returnValuetTEsBqI = await _OptionuESdoD.argParser(_fnnrPWYOL)
	});

	it('test for Option', async () => {
		const _flagsc6YAH9v = "1lM8sMb0IqcElWvyuBqBlwTByfhy6XMJ0af4EWj2IfidODOcbEYue7";
		const _returnValueU9By9KP = 3.6365986842534053;
		const _descriptionjhaA7sq = () => { return _returnValueU9By9KP };
		const _OptionFZcchXJ = new Option(_flagsc6YAH9v, _descriptionjhaA7sq)
		const _returnValueRgN3Vf1 = await _OptionFZcchXJ.name()
		const _returnValuemoDSnGk = await _OptionFZcchXJ.attributeName()
	});

	it('test for Option', async () => {
		const _flagsyGN2Thp = "bgGETMJ39skk02Ehqxra9CIUsqxJ6Qv30bg";
		const _descriptionTk8WmTZ = null;
		const _OptionId1hekk = new Option(_flagsyGN2Thp, _descriptionTk8WmTZ)
		const _valueIzxKqq = undefined;
		const _returnValueqFbQCft = null;
		const _previousJVFve6r = () => { return _returnValueqFbQCft };
		const _returnValueN60HwC = await _OptionId1hekk._concatValue(_valueIzxKqq, _previousJVFve6r)
	});

	it('test for Option', async () => {
		const _flagsZ3rO1Xf = "y6LrGQpHRO5FbRIaOKNNcerctGtHdkyj108cARYO7qka8Crz4ypr1CLlyzn71Krl35wCUD6w7iIPMq3EMX";
		const _descriptionPLQjCVH = "HaQeNwhe3wqUfSjflAiB8rHiLs7vXw2EsRrKI";
		const _OptionSadw7l = new Option(_flagsZ3rO1Xf, _descriptionPLQjCVH)
		const _valueHacrWDl = -7.391665871220324;
		const _previousy2ahHTy = "A";
		const _returnValueyqu0xXI = await _OptionSadw7l._concatValue(_valueHacrWDl, _previousy2ahHTy)
		const _nameYUywC3O = undefined;
		const _returnValueqkY8Xc = await _OptionSadw7l.env(_nameYUywC3O)
	});

	it('test for Option', async () => {
		const _flagscoPKVYn = "9n5x2bw70lCmIQ637POlu1EwJmiTWfciY4GtzjLJv4supOsKyplBJmZ4zyhLJC9I4BvFk1ksHCQ4h6rG";
		const _descriptionz935ygK = -4.814481382304155;
		const _OptionRxTMrSm = new Option(_flagscoPKVYn, _descriptionz935ygK)
		const _argw01n41D = true;
		const _returnValueTQrbX4I = await _OptionRxTMrSm.is(_argw01n41D)
		const _hideyM9tzvt = null;
		const _returnValueVgadkno = await _OptionRxTMrSm.hideHelp(_hideyM9tzvt)
		const _arrayValueQEeRQr1 = null;
		const _arrayValueAFapdec = true;
		const _arrayValueMjGPirf = null;
		const _argGjeCKoF = [_arrayValueQEeRQr1, _arrayValueAFapdec, _arrayValueMjGPirf]
		const _returnValuex7BtmKB = await _OptionRxTMrSm.is(_argGjeCKoF)
		const _returnValueYomUSSv = await _OptionRxTMrSm.attributeName()
		const _mandatoryNCGgV4h = undefined;
		const _returnValueBZBxIIx = await _OptionRxTMrSm.makeOptionMandatory(_mandatoryNCGgV4h)
	});

	it('test for Option', async () => {
		const _flagstMCpk2P = "h";
		const _descriptionfBwCmCH = "nVfbgC1IJKQUDSjc3yfqcgetKhZ1Ddc75tYGypTW1twRT8";
		const _Optionlk4s49v = new Option(_flagstMCpk2P, _descriptionfBwCmCH)
		const _argsqCoRLj = 7.6210837230290736;
		const _returnValueJD0Zbik = await _Optionlk4s49v.is(_argsqCoRLj)
		const _arrayValuee0nYS5C = -2.596085607949254;
		const _arrayValuehxdjN9w = undefined;
		const _returnValueZQEvaOm = [_arrayValuehxdjN9w]
		const _arrayValueSqQHCqh = () => { return _returnValueZQEvaOm };
		const _arrayValueqadPZ5J = 8.300005563394524;
		const _arrayValueSlOQNKy = -5.258751931703461;
		const _mandatoryufPbzOH = [_arrayValuee0nYS5C, _arrayValueSqQHCqh, _arrayValueqadPZ5J, _arrayValueSlOQNKy]
		const _returnValueS45qt0i = await _Optionlk4s49v.makeOptionMandatory(_mandatoryufPbzOH)
		const _arrayValue7SvcQ5 = "Tqs8JU1IhtUkRg4iawwmlfFiVEp4djl1PGMKrmi0j1BfSFJRjNDsLGjzsRxlvOU";
		const _returnValueDoNpaVe = {
		
	}
		const _arrayValueJOJ7Fku = () => { return _returnValueDoNpaVe };
		const _arrayValuehJcWPWg = 2.9228089130350767;
		const _valueynGsY0 = [_arrayValue7SvcQ5, _arrayValueJOJ7Fku, _arrayValuehJcWPWg]
		const _returnValuefOdVkb = 7.909367580481902;
		const _descriptionrxMJjL5 = () => { return _returnValuefOdVkb };
		const _returnValuekhYTemz = await _Optionlk4s49v.default(_valueynGsY0, _descriptionrxMJjL5)
		const _valuePTt3BWP = "w0dBRE0X7TLkOMaSE5eAGNsXsBVin4hHSv6eeSawpW7Uo6HIjIMDpBt19zdxanrtbK87R";
		const _descriptionUSxZhKW = -3.104828535820989;
		const _returnValueDToM9do = await _Optionlk4s49v.default(_valuePTt3BWP, _descriptionUSxZhKW)
	});

	it('test for Option', async () => {
		const _flagsyJTuOjs = "5fiYXK6nc5dUnztLO6mddnHz0L1NCGUyhlRQcd";
		const _descriptionKxGMFvI = 8.074854452491525;
		const _Optionx7uMUxU = new Option(_flagsyJTuOjs, _descriptionKxGMFvI)
		const _valuesuTPsawQ = false;
		const _returnValueb1KBduL = await _Optionx7uMUxU.choices(_valuesuTPsawQ)
		const _hideU0aCg0E = false;
		const _returnValuesUJjWwi = await _Optionx7uMUxU.hideHelp(_hideU0aCg0E)
		const _returnValuexmcZVHk = await _Optionx7uMUxU.name()
	});

	it('test for Option', async () => {
		const _flagsxrh1feT = "YPFqV8Re8RXnjiq6BwWTbm4S9BaaeERqZTnLU33jDsCjhQcYNjid4v";
		const _descriptionGFZn5hM = 7.742808008257974;
		const _OptionhozOuQz = new Option(_flagsxrh1feT, _descriptionGFZn5hM)
		const _valueKORzgJu = -6.170519046792183;
		const _returnValuekV5Eus = undefined;
		const _arrayValueExNphh3 = () => { return _returnValuekV5Eus };
		const _arrayValue8jhNuv = 2.4787742166385804;
		const _arrayValueoifNJIY = null;
		const _arrayValueQpKC0NY = "eKbIbGNRej";
		const _arrayValueHQh1LE4 = true;
		const _arrayValue2tFA8U = [_arrayValueExNphh3, _arrayValue8jhNuv, _arrayValueoifNJIY, _arrayValueQpKC0NY, _arrayValueHQh1LE4]
		const _arrayValueMn68g6p = undefined;
		const _arrayValuenYdNC3Y = 9.685711602859183;
		const _previousugDVfWL = [_arrayValue2tFA8U, _arrayValueMn68g6p, _arrayValuenYdNC3Y]
		const _returnValueeWNfZf = await _OptionhozOuQz._concatValue(_valueKORzgJu, _previousugDVfWL)
		const _nameA7hnv7T = -5.163717017589206;
		const _returnValuemYaXidf = await _OptionhozOuQz.env(_nameA7hnv7T)
	});
})