export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueuc8TZzk = -5.5675250978416155;
		const _includesZkzvbO1 = () => { return _returnValueuc8TZzk };
		const _flagsETJOYTn = {
			"includes": _includesZkzvbO1
	}
		const _descriptionlU0Cteo = "BMTXfkC8XQijSFSDZKDNEJK6Wax2axrkKDiBa5XYvfmJAJeuKGAyYRLs5Fj";
		const _Optiongk1WkvE = new Option(_flagsETJOYTn, _descriptionlU0Cteo)
		const _returnValueMF9LdGs = await _Optiongk1WkvE.name()
		const _valuecKOAYCd = 7.431355956125753;
		const _concatt042hJX = "hKqyRUzxNwqf9gphoBdClrRiJenM1kblhtfZPRayKD7NXVpScNYgTNhkqlCrI6nKxqdgYT2obow68NA";
		const _previousELAqI3 = {
			"concat": _concatt042hJX
	}
		const _returnValuemAbXZ18 = await _Optiongk1WkvE._concatValue(_valuecKOAYCd, _previousELAqI3)
		const _valuefCP9bzp = 7.908563999315316;
		const _returnValuemhgRUCr = -5.144641324624149;
		const _previousq1HxHPp = () => { return _returnValuemhgRUCr };
		const _returnValueq8GEC4H = await _Optiongk1WkvE._concatValue(_valuefCP9bzp, _previousq1HxHPp)
	});

	it('test for Option', async () => {
		const _flagszzsQ9M = "QWt104RjF0dgpDIdY82dMYQGYSFjg3NAp2afD5iIrgqIup";
		const _arrayValueIcxAvW8 = null;
		const _returnValueIzEAatz = -4.619531609776111;
		const _arrayValueZVjr0Dh = () => { return _returnValueIzEAatz };
		const _arrayValueIjQ9OkQ = null;
		const _returnValuevacSZhs = [_arrayValueIcxAvW8, _arrayValueZVjr0Dh, _arrayValueIjQ9OkQ]
		const _descriptionFUSMS6 = () => { return _returnValuevacSZhs };
		const _OptionSJpKLmq = new Option(_flagszzsQ9M, _descriptionFUSMS6)
		const _hideWk7KGZ2 = true;
		const _returnValueDp3SqSH = await _OptionSJpKLmq.hideHelp(_hideWk7KGZ2)
		const _hidefBJ96ig = true;
		const _returnValuesVtyRy4 = await _OptionSJpKLmq.hideHelp(_hidefBJ96ig)
	});

	it('test for Option', async () => {
		const _flagsuNoObBy = "1MBbmAr9710K6YBv9y7sAf2Uycpmew47WcQPkMvYdr6Hf2lVuOzpurfdn9sLN5fe5Yta51j6RRQOJWOYrJ8NfWUDcDw1c4";
		const _descriptionTK8Tfx = true;
		const _OptionJdD0gu = new Option(_flagsuNoObBy, _descriptionTK8Tfx)
		const _fnB7opphz = undefined;
		const _returnValuev1kiHeo = await _OptionJdD0gu.argParser(_fnB7opphz)
		const _mandatorynnpSQX6 = true;
		const _returnValueWy2FaBk = await _OptionJdD0gu.makeOptionMandatory(_mandatorynnpSQX6)
		const _returnValueNkcHvpo = await _OptionJdD0gu.name()
	});

	it('test for Option', async () => {
		const _flagsO15lIiI = "wQTKageb7wRIgjfeCvEHMnQsiFKgWKdoBsSfwbHROxbxm1KvHRmDMBJKLOSHFxapqOAWafdMyagQYdJ4lAWrk7o695VYYOV2";
		const _descriptionMFKZEQi = null;
		const _OptionP53KJ4b = new Option(_flagsO15lIiI, _descriptionMFKZEQi)
		const _namehENvVgI = undefined;
		const _returnValuew121vwp = await _OptionP53KJ4b.env(_namehENvVgI)
		const _valueVOKcGmt = null;
		const _returnValueV9fYpFe = 9.41884986143221;
		const _concatoS57Vw9 = () => { return _returnValueV9fYpFe };
		const _previouswX3tFxw = {
			"concat": _concatoS57Vw9
	}
		const _returnValue0iPVFJ = await _OptionP53KJ4b._concatValue(_valueVOKcGmt, _previouswX3tFxw)
	});

	it('test for Option', async () => {
		const _flagsfZ4v1oO = "G31yLkgOmfI4ehLWQf1bcq1jSxgl9DKHKPmgkA7WP4t5Yym4otBr2DlAqpAGikJqkRhrSfouw19ItkEW8uTKz3bydMrwVarpfn";
		const _descriptionHsiN12a = "mu9pIWjmPNAtSgsOeYN2n4cYkPcNydp95YGnrXgyKPXUEHqxUpjkxMhVu9T26C4bm4qO";
		const _OptionvTaAHXt = new Option(_flagsfZ4v1oO, _descriptionHsiN12a)
		const _returnValueiW4uOtu = 4.605221042373284;
		const _includeswOhBinf = () => { return _returnValueiW4uOtu };
		const _returnValueoGAAiBW = true;
		const _joinKHLqIq = () => { return _returnValueoGAAiBW };
		const _valuesr4zGBRg = {
			"includes": _includeswOhBinf,
		"join": _joinKHLqIq
	}
		const _returnValueLBwqOmu = await _OptionvTaAHXt.choices(_valuesr4zGBRg)
		const _valueN2ZWC2K = 2.603780603743795;
		const _returnValueAxW1qm = 2.879258919151738;
		const _concatalyIkt = () => { return _returnValueAxW1qm };
		const _previousebFZkFc = {
			"concat": _concatalyIkt
	}
		const _returnValueS70TeZf = await _OptionvTaAHXt._concatValue(_valueN2ZWC2K, _previousebFZkFc)
	});

	it('test for Option', async () => {
		const _flagsLt4HzsX = "r6uojZgzPAhDPzXxe2yqS0Foe8Ju";
		const _descriptiono9G6b4O = false;
		const _OptionGCEuvq = new Option(_flagsLt4HzsX, _descriptiono9G6b4O)
		const _returnValueDjbCJik = await _OptionGCEuvq.attributeName()
		const _returnValuejpGbd4i = await _OptionGCEuvq.name()
		const _fnSIo8PO = undefined;
		const _returnValuerKdeDR = await _OptionGCEuvq.argParser(_fnSIo8PO)
	});

	it('test for Option', async () => {
		const _flagsFfBloLJ = "Uz8NyIeWojb4zrIKlooyBSj4QQ12XBqTtifOwDhKYtnyTCtGkCYIifCr";
		const _descriptionnTnBgIs = null;
		const _OptionxlPddft = new Option(_flagsFfBloLJ, _descriptionnTnBgIs)
		const _fnlYQLp2V = undefined;
		const _returnValueHQqTyTX = await _OptionxlPddft.argParser(_fnlYQLp2V)
		const _argI9ddL4 = {
		
	}
		const _returnValueMAL3RBl = await _OptionxlPddft.is(_argI9ddL4)
		const _valueINWzxXF = undefined;
		const _descriptionAysi8vt = undefined;
		const _returnValueGeWV86 = await _OptionxlPddft.default(_valueINWzxXF, _descriptionAysi8vt)
	});

	it('test for Option', async () => {
		const _flagsPuHRO20 = "fj";
		const _descriptionD8sA1yZ = {
		
	}
		const _OptionyEgLPhN = new Option(_flagsPuHRO20, _descriptionD8sA1yZ)
		const _nameMxenzDS = undefined;
		const _returnValueZGkKBcy = await _OptionyEgLPhN.env(_nameMxenzDS)
		const _valuel83yZh = 2.010327409497668;
		const _previousIpVsbS = []
		const _returnValueTYWOAK6 = await _OptionyEgLPhN._concatValue(_valuel83yZh, _previousIpVsbS)
		const _returnValued7TEvdE = undefined;
		const _returnValuePOEByDg = () => { return _returnValued7TEvdE };
		const _valuejlAQjAO = () => { return _returnValuePOEByDg };
		const _returnValueB2xfDqv = -9.703768581619697;
		const _concaty5WABg6 = () => { return _returnValueB2xfDqv };
		const _previousXjoqaSw = {
			"concat": _concaty5WABg6
	}
		const _returnValuea15nuJq = await _OptionyEgLPhN._concatValue(_valuejlAQjAO, _previousXjoqaSw)
		const _hideSpD0pW0 = 6.426177024173814;
		const _returnValueU1lJY2Q = await _OptionyEgLPhN.hideHelp(_hideSpD0pW0)
	});
})