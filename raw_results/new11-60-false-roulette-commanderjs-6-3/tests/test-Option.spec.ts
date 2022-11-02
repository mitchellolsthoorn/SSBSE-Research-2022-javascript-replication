export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueK76bDA = undefined;
		const _includesT4RxEA = () => { return _returnValueK76bDA };
		const _flagskprcmwU = {
			"includes": _includesT4RxEA
	}
		const _descriptionKJ3gSX = "NT0e";
		const _OptionVaA3hig = new Option(_flagskprcmwU, _descriptionKJ3gSX)
		const _returnValue8rIWyW = await _OptionVaA3hig.attributeName()
		const _returnValuedOqWcm = await _OptionVaA3hig.attributeName()
	});

	it('test for Option', async () => {
		const _flags1mGYnu = "DmXjv4x6DaWXiDiVFxjSoIkutgfSwC6EUtid5CBXyWs3cGCotBmUx8sIowDKv9H";
		const _descriptionT5PgTAT = false;
		const _OptionHvda4HX = new Option(_flags1mGYnu, _descriptionT5PgTAT)
		const _argVdi0LaS = {
		
	}
		const _returnValueuqq89se = await _OptionHvda4HX.is(_argVdi0LaS)
		const _namerdpjqky = undefined;
		const _returnValueNsCv34D = await _OptionHvda4HX.env(_namerdpjqky)
		const _hideDDPBG8m = false;
		const _returnValuejCPZ1JA = await _OptionHvda4HX.hideHelp(_hideDDPBG8m)
	});

	it('test for Option', async () => {
		const _flagsHc4lZ8s = "KLzUnMdYZWH5kJrSWIXJAGx95pUsrJ6dlQPAORZttuVrDcPT4uEpuJ5KOrTVyIwFPeL4mRuYLlIUX1mwFb";
		const _descriptionfgq58S5 = "yl07pgNr9u8VRzg6jg4zydiycxZTn0RsnC95fuw2B3F6YFnGkr5samhtjKogz";
		const _OptionDjF6x7O = new Option(_flagsHc4lZ8s, _descriptionfgq58S5)
		const _mandatorydXNb25g = true;
		const _returnValuernTNx3 = await _OptionDjF6x7O.makeOptionMandatory(_mandatorydXNb25g)
		const _mandatoryftWCi2n = true;
		const _returnValueujwN21i = await _OptionDjF6x7O.makeOptionMandatory(_mandatoryftWCi2n)
		const _valueg7BNf7G = "dkPDaUTkaBEmXSSXrv6kAG56zijGpyQgjc2In142lQfeFi1sch2mFumhewWnT";
		const _previousyOxDx0M = "6Uu9y8G9Lk2OO7XS9MZvXktJkEeLLaDNdSW78N5PCle6mnk1uGBIz5tEAGaQnnA49G4hnuYC9Wc9sGD21VZXlzX7gKX7VvlSN";
		const _returnValuej12qSo = await _OptionDjF6x7O._concatValue(_valueg7BNf7G, _previousyOxDx0M)
	});

	it('test for Option', async () => {
		const _flagsomEV4Oq = "8RAWYCMfBZjkEAxiEw82TzUmVTLFGEyZcNSh6eh1Qnd22GB1zMYSfWCmrzyOXYkoPd1qg3QseNP4zfMpXdC8mXCB4Tt7FURkEU";
		const _descriptionxBHHsFm = {
		
	}
		const _OptionzVD2xQR = new Option(_flagsomEV4Oq, _descriptionxBHHsFm)
		const _returnValueQiyeLkc = await _OptionzVD2xQR.attributeName()
		const _returnValueXP43GwY = await _OptionzVD2xQR.name()
		const _returnValuewBjooO = await _OptionzVD2xQR.attributeName()
	});

	it('test for Option', async () => {
		const _flagsuLfhRF4 = "T8GhdQvQC";
		const _returnValueXDh78nK = "nFC9SgSGat8lJoYBEIqp";
		const _descriptionk20nymO = () => { return _returnValueXDh78nK };
		const _OptionOOMBDpO = new Option(_flagsuLfhRF4, _descriptionk20nymO)
		const _fnJjT1LxZ = undefined;
		const _returnValueoF2yEF = await _OptionOOMBDpO.argParser(_fnJjT1LxZ)
		const _returnValueUiNf8nw = await _OptionOOMBDpO.name()
		const _hidemsB1ERA = true;
		const _returnValueKlsO30w = await _OptionOOMBDpO.hideHelp(_hidemsB1ERA)
		const _returnValuetTvkSix = await _OptionOOMBDpO.name()
	});

	it('test for Option', async () => {
		const _flagsmYon6za = "Tn6D5FfEm7jyd";
		const _returnValuevU9k8bU = "av8VszxjvxxAeqVnesWUML";
		const _descriptionUyheHXK = () => { return _returnValuevU9k8bU };
		const _OptionKHsh7Vm = new Option(_flagsmYon6za, _descriptionUyheHXK)
		const _returnValuepLFARke = null;
		const _includese6wlQN = () => { return _returnValuepLFARke };
		const _returnValuessd3IIp = undefined;
		const _joinCvklj5J = () => { return _returnValuessd3IIp };
		const _valuesXiEqDIc = {
			"includes": _includese6wlQN,
		"join": _joinCvklj5J
	}
		const _returnValuegcIfBKN = await _OptionKHsh7Vm.choices(_valuesXiEqDIc)
		const _fnTPhnEbL = undefined;
		const _returnValueskHknxO = await _OptionKHsh7Vm.argParser(_fnTPhnEbL)
		const _nameVlR8dqV = {
		
	}
		const _returnValueNlTqIxc = await _OptionKHsh7Vm.env(_nameVlR8dqV)
		const _namewyIzybg = undefined;
		const _returnValueeyl6CbE = await _OptionKHsh7Vm.env(_namewyIzybg)
	});

	it('test for Option', async () => {
		const _flagslUhiOm = "fU3yIWKH8Z5wWCPKSjVqLZMV1IvFaUY3GE7gW28tzpWt2Ufqz0pDp8SUELwiibbzSwBVmwMoiBSHcAFm5jhkvhktrLFKC1l45";
		const _descriptionto92Kmd = false;
		const _OptionRVTy4yW = new Option(_flagslUhiOm, _descriptionto92Kmd)
		const _hideE5OXstn = false;
		const _returnValueo3s6fv0 = await _OptionRVTy4yW.hideHelp(_hideE5OXstn)
		const _valuehzJTIHj = true;
		const _arrayValueKs6djh2 = {
		
	}
		const _arrayValueWXWvquh = -5.662268656060583;
		const _arrayValuelzcDW0w = {
		
	}
		const _previousw2htExr = [_arrayValueKs6djh2, _arrayValueWXWvquh, _arrayValuelzcDW0w]
		const _returnValuewovJxFH = await _OptionRVTy4yW._concatValue(_valuehzJTIHj, _previousw2htExr)
		const _namecqnqgkY = undefined;
		const _returnValueO0kKlr = await _OptionRVTy4yW.env(_namecqnqgkY)
	});

	it('test for Option', async () => {
		const _flagscwqk4S = "lOA1z97UTrRDgWGtDe42kGx7gHMclTbbUbsjfDhmeBThz";
		const _arrayValuewGsbsDO = null;
		const _arrayValueeY2jmtv = undefined;
		const _descriptionpbKsgNk = [_arrayValuewGsbsDO, _arrayValueeY2jmtv]
		const _OptionDENH4BZ = new Option(_flagscwqk4S, _descriptionpbKsgNk)
		const _returnValueqbnkGfG = await _OptionDENH4BZ.attributeName()
		const _nameZOtmmcZ = "aCQRuYizmCy5V";
		const _returnValueOCtwIcJ = await _OptionDENH4BZ.env(_nameZOtmmcZ)
		const _mandatoryyVLOKs2 = true;
		const _returnValuegrv1Swx = await _OptionDENH4BZ.makeOptionMandatory(_mandatoryyVLOKs2)
		const _valuel5YHWzP = undefined;
		const _descriptiondZc0D7p = []
		const _returnValuezwDZsUI = await _OptionDENH4BZ.default(_valuel5YHWzP, _descriptiondZc0D7p)
	});
})