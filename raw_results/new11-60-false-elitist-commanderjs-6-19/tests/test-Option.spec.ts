export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValuemggUtR = 1.1483933463627558;
		const _includes6bHblr = () => { return _returnValuemggUtR };
		const _flagsXjYBtDu = {
			"includes": _includes6bHblr
	}
		const _descriptionoCbasSw = -9.262737644501547;
		const _OptionUNNUcSR = new Option(_flagsXjYBtDu, _descriptionoCbasSw)
		const _valuesAHlEOQ = undefined;
		const _descriptionhvXA0Mo = -5.38246688839025;
		const _returnValue3Mpsop = await _OptionUNNUcSR.default(_valuesAHlEOQ, _descriptionhvXA0Mo)
		const _returnValuePDIqOAY = await _OptionUNNUcSR.name()
		const _arrayValueLd0UAwm = {
		
	}
		const _arrayValuepywtP50 = undefined;
		const _nameNSBxF1l = [_arrayValueLd0UAwm, _arrayValuepywtP50]
		const _returnValueCvZlEKv = await _OptionUNNUcSR.env(_nameNSBxF1l)
	});

	it('test for Option', async () => {
		const _flagsik0S95p = "hgbO1C0vwdvD6t4eXPyYufhguFqdp2jP";
		const _returnValueSzyGOe = undefined;
		const _arrayValuevGcWjmj = () => { return _returnValueSzyGOe };
		const _returnValuekuLeyf8 = [_arrayValuevGcWjmj]
		const _descriptionKKeemEl = () => { return _returnValuekuLeyf8 };
		const _OptionOmRCwKw = new Option(_flagsik0S95p, _descriptionKKeemEl)
		const _returnValueMI0lLYJ = await _OptionOmRCwKw.attributeName()
	});

	it('test for Option', async () => {
		const _flagsVl0s62u = "yg1V64opDLBrqronLQJ6OmRAerl";
		const _descriptionDSmOdnK = undefined;
		const _OptionU5v83kB = new Option(_flagsVl0s62u, _descriptionDSmOdnK)
		const _returnValueDy2xd3 = await _OptionU5v83kB.attributeName()
		const _hideQmouegY = true;
		const _returnValuedQT0IKh = await _OptionU5v83kB.hideHelp(_hideQmouegY)
		const _hideCYBsjy = true;
		const _returnValuevVIK4C9 = await _OptionU5v83kB.hideHelp(_hideCYBsjy)
		const _valuekzUyryz = undefined;
		const _descriptionIAGYW8j = undefined;
		const _returnValueSZ33kB = await _OptionU5v83kB.default(_valuekzUyryz, _descriptionIAGYW8j)
	});

	it('test for Option', async () => {
		const _flagsKbaVrDe = "xRF6ybhHQ88t3RmcOKKceMZP0OoyngahUVqLvwgBFR1TIclbEIkEJT9GGsaIxLtcRNwVU241DHVBM1";
		const _descriptions2VBVvH = "mCz09uKoGVPlpu";
		const _OptionCYAeQyo = new Option(_flagsKbaVrDe, _descriptions2VBVvH)
		const _fnqasc58F = undefined;
		const _returnValueZlKcKpX = await _OptionCYAeQyo.argParser(_fnqasc58F)
		const _mandatoryNOExuOo = false;
		const _returnValueEym6oro = await _OptionCYAeQyo.makeOptionMandatory(_mandatoryNOExuOo)
		const _mandatoryJTtQ2gO = false;
		const _returnValuelwpWglV = await _OptionCYAeQyo.makeOptionMandatory(_mandatoryJTtQ2gO)
		const _hideFiaOqod = true;
		const _returnValueynkNalD = await _OptionCYAeQyo.hideHelp(_hideFiaOqod)
		const _hide78ANsO = true;
		const _returnValueJ8flL1v = await _OptionCYAeQyo.hideHelp(_hide78ANsO)
	});

	it('test for Option', async () => {
		const _flagslRT64Zx = "ahGlHfuQpaP1oWdk2aKiKatEyXZCcq5DAqe78LlxQyUIi7fsY35LldYi9yma0OPD84vaWt2K08LUsMbqYatrbKt7Eu8WpnMyZ1";
		const _descriptionHu52wJP = true;
		const _OptionToefyZQ = new Option(_flagslRT64Zx, _descriptionHu52wJP)
		const _returnValuehi7rKIS = await _OptionToefyZQ.name()
		const _argaEliG0 = {
		
	}
		const _returnValueEblx5Lh = await _OptionToefyZQ.is(_argaEliG0)
	});

	it('test for Option', async () => {
		const _flagshiWsaF = "QELkbIANeFSqBmwCxsdJn70OyjD4z5EVAHmcPPNklPGuxIJqMX34BNMzUsl";
		const _descriptionaqqg3tC = null;
		const _Optioni8JfQND = new Option(_flagshiWsaF, _descriptionaqqg3tC)
		const _hideigzzjyu = false;
		const _returnValueM8wWAD2 = await _Optioni8JfQND.hideHelp(_hideigzzjyu)
		const _valueAPirAIL = undefined;
		const _descriptionfQy9Ggx = undefined;
		const _returnValueNoXqfiy = await _Optioni8JfQND.default(_valueAPirAIL, _descriptionfQy9Ggx)
		const _valueZC1F4Qo = -9.332497871619589;
		const _returnValueUqGdjcF = {
		
	}
		const _concatwV8G7hf = () => { return _returnValueUqGdjcF };
		const _previousq3MhY6V = {
			"concat": _concatwV8G7hf
	}
		const _returnValuev3d1dpU = await _Optioni8JfQND._concatValue(_valueZC1F4Qo, _previousq3MhY6V)
		const _valuexDpXGB = undefined;
		const _descriptionWra7ClZ = undefined;
		const _returnValued2W2Efh = await _Optioni8JfQND.default(_valuexDpXGB, _descriptionWra7ClZ)
	});

	it('test for Option', async () => {
		const _flags4xswQZ = "zCNNBgVNBICWjjI9LsVrfIt9sTAjfuWJQDefFohj6GQ";
		const _descriptionj9gKpHq = true;
		const _OptioninXMdxI = new Option(_flags4xswQZ, _descriptionj9gKpHq)
		const _nameVhY2pIs = undefined;
		const _returnValuezJWcEBB = await _OptioninXMdxI.env(_nameVhY2pIs)
		const _fnfjWnt7E = undefined;
		const _returnValuehQ0wyk4 = await _OptioninXMdxI.argParser(_fnfjWnt7E)
		const _returnValueC7KG5Rw = await _OptioninXMdxI.attributeName()
		const _argskyzTgt = {
		
	}
		const _returnValuewmj1l7 = await _OptioninXMdxI.is(_argskyzTgt)
	});

	it('test for Option', async () => {
		const _flagsEcqHmm = "SxMSGik7ZMSVZ7De4kLkvJr0kDxhcJ2HF45qip2xyXyqA3kkCt1wiatNebAfQU83";
		const _arrayValueTe4D6qt = null;
		const _arrayValuenfhL8PK = undefined;
		const _descriptionsaWSNH = [_arrayValueTe4D6qt, _arrayValuenfhL8PK]
		const _OptionFKXO4G = new Option(_flagsEcqHmm, _descriptionsaWSNH)
		const _returnValueNwTvEL = await _OptionFKXO4G.name()
		const _returnValueWdSrbaJ = undefined;
		const _returnValueNotwiR = () => { return _returnValueWdSrbaJ };
		const _includesV299oRl = () => { return _returnValueNotwiR };
		const _returnValueDh9PO1c = {
		
	}
		const _joincTOUqIK = () => { return _returnValueDh9PO1c };
		const _valuesA7jc2b1 = {
			"includes": _includesV299oRl,
		"join": _joincTOUqIK
	}
		const _returnValuetlubSUb = await _OptionFKXO4G.choices(_valuesA7jc2b1)
		const _returnValuexQpDqqg = await _OptionFKXO4G.name()
		const _returnValuerFA8qMO = await _OptionFKXO4G.attributeName()
	});
})