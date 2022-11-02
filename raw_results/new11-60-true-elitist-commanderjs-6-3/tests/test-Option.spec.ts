export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagswvhsmw0 = "fgYQRupDqOAYoa25G";
		const _descriptiontBcULxf = "N49VKcfPsUSlHlHuPJQnRwTHdouVbLYjuz6RJ1zVoh72q5XPPcf1O84UUiKiyL86wXuonXhClSSNW";
		const _OptiongS6XLU = new Option(_flagswvhsmw0, _descriptiontBcULxf)
		const _returnValuejBh76VB = "SIGQ13txEjEnw4GvqJkTv47hlnB6hKWq1gdObthFJ";
		const _valuebmOKyDV = () => { return _returnValuejBh76VB };
		const _descriptionvzzDsD = undefined;
		const _returnValuehuHxgdE = await _OptiongS6XLU.default(_valuebmOKyDV, _descriptionvzzDsD)
		const _fnA0XnoSQ = undefined;
		const _returnValueYVL03YQ = await _OptiongS6XLU.argParser(_fnA0XnoSQ)
		const _namewTXw2l = undefined;
		const _returnValuevxRp4VH = await _OptiongS6XLU.env(_namewTXw2l)
		const _mandatoryaupJzRW = false;
		const _returnValueTjJMLHX = await _OptiongS6XLU.makeOptionMandatory(_mandatoryaupJzRW)
	});

	it('test for Option', async () => {
		const _flagswl8oPR = "7rfygOBzPviyIC8mtP7CYWajP5Vy20YmCZrOj0EfJPfsvLucU";
		const _descriptiontWJ0cs = false;
		const _OptionCopycEg = new Option(_flagswl8oPR, _descriptiontWJ0cs)
		const _namev2CYrR7 = undefined;
		const _returnValueNOAQZU = await _OptionCopycEg.env(_namev2CYrR7)
		const _returnValueVkZCI2R = await _OptionCopycEg.name()
		const _valuelRtABPk = -1.1266381750036647;
		const _returnValueBxK4dcX = "WMkD4cwFmj6nLBn4Pp7pJibfmhmoyJ1tH7k3hmPaDSv4gRzrKsHGVyKgbiR4e6WXceYSRMHVS9Hzu1HzlO51bzF";
		const _concatVB979ez = () => { return _returnValueBxK4dcX };
		const _previousfJEjbXG = {
			"concat": _concatVB979ez
	}
		const _returnValuefn2tfYV = await _OptionCopycEg._concatValue(_valuelRtABPk, _previousfJEjbXG)
		const _returnValueOmIiKPI = await _OptionCopycEg.name()
	});

	it('test for Option', async () => {
		const _flagsGmjOqyd = "5tCXSLb9tBxK1nGRpEeIjhNoGbd8HfoLtjnj1NP2AOubJJu3ebkvLprVRajjHl0CXS3VN6X";
		const _descriptionlEOzKYW = 7.199500444893982;
		const _OptionqzpSwEr = new Option(_flagsGmjOqyd, _descriptionlEOzKYW)
		const _returnValueB6b0L8C = null;
		const _includesMzPaY8S = () => { return _returnValueB6b0L8C };
		const _returnValueQrGViKz = false;
		const _joinc4bCkuF = () => { return _returnValueQrGViKz };
		const _valuesDvotH3b = {
			"includes": _includesMzPaY8S,
		"join": _joinc4bCkuF
	}
		const _returnValueMqixBt = await _OptionqzpSwEr.choices(_valuesDvotH3b)
		const _name4XOVFv = undefined;
		const _returnValuehuQagzw = await _OptionqzpSwEr.env(_name4XOVFv)
		const _returnValuendOfOa2 = await _OptionqzpSwEr.attributeName()
	});

	it('test for Option', async () => {
		const _flagsm6wDF0p = "P386phwnwbcc39fUtDX6hl55vpHqgM9dic2OAT9ozpKEtEmij";
		const _descriptionjdgIoTY = -0.6127400616570462;
		const _OptionfPu9uNt = new Option(_flagsm6wDF0p, _descriptionjdgIoTY)
		const _hideM1YzcXC = false;
		const _returnValueUHKmmBe = await _OptionfPu9uNt.hideHelp(_hideM1YzcXC)
	});

	it('test for Option', async () => {
		const _flagsqngyHVM = "fFKnFC7PDio";
		const _descriptionrJjEUQZ = undefined;
		const _OptionBesCAEE = new Option(_flagsqngyHVM, _descriptionrJjEUQZ)
		const _fnupOokIC = undefined;
		const _returnValueteaP7gj = await _OptionBesCAEE.argParser(_fnupOokIC)
		const _arguWlT0J2 = {
		
	}
		const _returnValuebigxSmM = await _OptionBesCAEE.is(_arguWlT0J2)
		const _returnValueOtm4GVc = await _OptionBesCAEE.name()
	});

	it('test for Option', async () => {
		const _flagsRueBMRC = "1L1mKfLE4NAF8FkA8B9jZRfQKfaK5AAABRu68s2mKm6UUCuSRi5cJcTGmgz6zYWlT8OYriaJlv";
		const _descriptionUVJIg6o = null;
		const _OptionYQSh7Pj = new Option(_flagsRueBMRC, _descriptionUVJIg6o)
		const _valueNb67aQ = null;
		const _arrayValueeUw6TAl = 2.2344207396356346;
		const _previouszhT58a = [_arrayValueeUw6TAl]
		const _returnValueXtx8kU6 = await _OptionYQSh7Pj._concatValue(_valueNb67aQ, _previouszhT58a)
	});
})