export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueSuRhXY2 = "z7Od1ViJT5dz1U5qJUUdlWpqApB5ACsIX4WNP81m0PWefnRW4gOx38ca";
		const _includesPjiy2JY = () => { return _returnValueSuRhXY2 };
		const _flagsnxch20G = {
			"includes": _includesPjiy2JY
	}
		const _arrayValuepgT8j91 = "NdM8NmDzmNeTpzlewvyG3aj4zIulOPPgrheL";
		const _arrayValuevmg3bKl = "ZpgbBwWXSeqdqyxjhMkBCNxWcnkCDNSlrCjxGMT3K4D3iKjQkXmyFackc37u1kckB77s";
		const _arrayValueV32GR5r = "y6KZqTUE8aKsJM1zqy1VEvXCNriADyiwoq6XGcr37gRNQ7PXAvNKvO4JcRSuiyHLvIHXumhC3zhZ7kGiJ";
		const _descriptionUHSdNRl = [_arrayValuepgT8j91, _arrayValuevmg3bKl, _arrayValueV32GR5r]
		const _OptionIMLOY1e = new Option(_flagsnxch20G, _descriptionUHSdNRl)
		const _returnValueudyLCYb = await _OptionIMLOY1e.attributeName()
		const _mandatorylHiQ7qy = false;
		const _returnValueRSpVQi1 = await _OptionIMLOY1e.makeOptionMandatory(_mandatorylHiQ7qy)
	});

	it('test for Option', async () => {
		const _flagsYYEvnlb = "wuKdS5YXZeuCeXCJFBc5Gpjj4VHSfNAEHOgWsznGGoH740EhPtfr4JLauMu97lEkoy0dydVwh";
		const _descriptionJvA0Y76 = undefined;
		const _OptionkFtfEms = new Option(_flagsYYEvnlb, _descriptionJvA0Y76)
		const _hideHP25zjc = false;
		const _returnValuetVVaKzJ = await _OptionkFtfEms.hideHelp(_hideHP25zjc)
		const _valueDN3yy27 = undefined;
		const _descriptionVHhIjvF = undefined;
		const _returnValueUMYW39 = await _OptionkFtfEms.default(_valueDN3yy27, _descriptionVHhIjvF)
		const _fnDWd12cS = undefined;
		const _returnValuebHgHOuf = await _OptionkFtfEms.argParser(_fnDWd12cS)
		const _returnValueNkLnghS = await _OptionkFtfEms.attributeName()
		const _returnValueZJbF6c = await _OptionkFtfEms.attributeName()
	});

	it('test for Option', async () => {
		const _flags0TmS9M = "cfSYtdd42lUuMnHD84zeKjld2QSBxttdavoqhMDDtfEfnDArQB8zxweaB3MEce6duxuL0DY6IOkXaWQME";
		const _descriptionpj2DHoq = "rK6tTr1wzNUFy5d5k5eEkqCqly45EfbFihsw8f57xudotDqiGwxQ1xSUBWn7bqDz";
		const _OptionDwm9YNH = new Option(_flags0TmS9M, _descriptionpj2DHoq)
		const _returnValuegLgW5mD = await _OptionDwm9YNH.attributeName()
		const _nameJytC5D = undefined;
		const _returnValuee9dYdl0 = await _OptionDwm9YNH.env(_nameJytC5D)
		const _hidew7epUOd = false;
		const _returnValueCOhsu8U = await _OptionDwm9YNH.hideHelp(_hidew7epUOd)
	});

	it('test for Option', async () => {
		const _flagsWEWXZi = "pmw53uIgQXzKh9zK5wbseu3ncXGVn7BpuzfGAkoFD6Sin9Z3a7RhNU5Mq75";
		const _descriptioni4aKJ2p = "VA8cqH2zk6SL";
		const _OptionQ7m0dIj = new Option(_flagsWEWXZi, _descriptioni4aKJ2p)
		const _nameJGL1ZYy = undefined;
		const _returnValueeKACg94 = await _OptionQ7m0dIj.env(_nameJGL1ZYy)
		const _mandatoryMDAgCR1 = true;
		const _returnValuemQayGDo = await _OptionQ7m0dIj.makeOptionMandatory(_mandatoryMDAgCR1)
		const _hidexUs0A1y = true;
		const _returnValueVFFrEAf = await _OptionQ7m0dIj.hideHelp(_hidexUs0A1y)
		const _returnValueP7z0y7 = "VOgJJPeP62UjKqtLDB2V766V80kvDu6v5xdmO87";
		const _returnValueJX42m0f = () => { return _returnValueP7z0y7 };
		const _returnValueaRQIYtZ = () => { return _returnValueJX42m0f };
		const _includesHgzEhEJ = () => { return _returnValueaRQIYtZ };
		const _returnValuecQKzw3 = true;
		const _joinja8r6b = () => { return _returnValuecQKzw3 };
		const _valuesUOp35G = {
			"includes": _includesHgzEhEJ,
		"join": _joinja8r6b
	}
		const _returnValueZS3mXyi = await _OptionQ7m0dIj.choices(_valuesUOp35G)
		const _argcjLYuea = {
		
	}
		const _returnValuet5nDTxF = await _OptionQ7m0dIj.is(_argcjLYuea)
	});

	it('test for Option', async () => {
		const _flagsOp7SVAz = "6xbo514QeJh6qAZs8CeX1lVHHFxGiqPssDpE4JhoU1GOiueQbAuXS4gI8YEtMnV2MJ7XHtgQOYRmbB0tM5RRPTi8B4z";
		const _descriptionaSSw9Nr = null;
		const _OptionYE8b2D = new Option(_flagsOp7SVAz, _descriptionaSSw9Nr)
		const _returnValueirWgEwv = -0.8085562153037635;
		const _returnValueiFWboNk = () => { return _returnValueirWgEwv };
		const _includesXbFXv7 = () => { return _returnValueiFWboNk };
		const _returnValueDbRC2tk = null;
		const _joinTAwqa5h = () => { return _returnValueDbRC2tk };
		const _valuesmazaIgK = {
			"includes": _includesXbFXv7,
		"join": _joinTAwqa5h
	}
		const _returnValueFnP3W6r = await _OptionYE8b2D.choices(_valuesmazaIgK)
		const _mandatoryeuiPJoV = false;
		const _returnValueP830T3K = await _OptionYE8b2D.makeOptionMandatory(_mandatoryeuiPJoV)
		const _valuecEA4PlP = "niFxU7aogu3rnKjBWKvmtEjy2cC65aWcwv5PWs4";
		const _previousciiXHH0 = undefined;
		const _returnValuecqZ8z7c = await _OptionYE8b2D._concatValue(_valuecEA4PlP, _previousciiXHH0)
	});
})