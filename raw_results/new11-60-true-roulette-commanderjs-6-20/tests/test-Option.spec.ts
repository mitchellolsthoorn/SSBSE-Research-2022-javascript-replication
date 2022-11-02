export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsZo1D02E = "9BUBT3SAHpG1JLIwmPY8LxwGDMSToIPVcLySNCpkDfpBgUpYsmDYzFW9YGniluYfLNdDAYTZPLiSgWyuWx8KjbHhsngc6IDkfS";
		const _descriptioneWjxmIP = "3HYOlUoUdP76vyU6gE5";
		const _OptiondmKLaA2 = new Option(_flagsZo1D02E, _descriptioneWjxmIP)
		const _returnValueqh84lNe = await _OptiondmKLaA2.name()
		const _returnValueCThgONC = await _OptiondmKLaA2.attributeName()
		const _fnD1WNmnc = undefined;
		const _returnValuejpGPOW = await _OptiondmKLaA2.argParser(_fnD1WNmnc)
		const _mandatoryBM6BoeN = true;
		const _returnValueI2qtbC = await _OptiondmKLaA2.makeOptionMandatory(_mandatoryBM6BoeN)
	});

	it('test for Option', async () => {
		const _flagsNHRQm2t = "XyuEUonBpci6TdqG0mX0AePkS";
		const _descriptionINM9DK = []
		const _OptionFX2AaZA = new Option(_flagsNHRQm2t, _descriptionINM9DK)
		const _mandatorygHGKeg = true;
		const _returnValueRLm2TFr = await _OptionFX2AaZA.makeOptionMandatory(_mandatorygHGKeg)
		const _nameQH5EX2a = {
		
	}
		const _returnValuebNgxOt = await _OptionFX2AaZA.env(_nameQH5EX2a)
		const _fnMrRriUZ = {
		
	}
		const _returnValueslffitC = await _OptionFX2AaZA.argParser(_fnMrRriUZ)
		const _mandatoryMPSy8N = false;
		const _returnValuerNLpn6c = await _OptionFX2AaZA.makeOptionMandatory(_mandatoryMPSy8N)
	});

	it('test for Option', async () => {
		const _flagsfXTba1e = "hxhWxSjrdsVThaXMou6G6";
		const _returnValueLrrKKYK = "SHI2wpsXTd7TZrj6sxyf2xESmL6AZfs9mgc7iXi94qdooPKxo5Ao42uha";
		const _returnValuepDglS0d = () => { return _returnValueLrrKKYK };
		const _arrayValueYHTujtH = () => { return _returnValuepDglS0d };
		const _arrayValuexEFqoql = -3.8434525260512125;
		const _descriptiongc6V1wN = [_arrayValueYHTujtH, _arrayValuexEFqoql]
		const _OptioneHzprWj = new Option(_flagsfXTba1e, _descriptiongc6V1wN)
		const _arglORur86 = "id2eQaDrk8Xag8cufd3woAFkDWkZRioN2Cf9jr2aof2BwPVms3ULwR";
		const _returnValueo5ZnMto = await _OptioneHzprWj.is(_arglORur86)
		const _namePTgbv8G = true;
		const _returnValuedBqPp93 = await _OptioneHzprWj.env(_namePTgbv8G)
		const _namekSBuTNm = {
		
	}
		const _returnValueMgYQPlS = await _OptioneHzprWj.env(_namekSBuTNm)
		const _fnHaQN0fM = "yeV6cksjkLoQhv";
		const _returnValueHyq8oMw = await _OptioneHzprWj.argParser(_fnHaQN0fM)
	});

	it('test for Option', async () => {
		const _flagsTbgYtju = "AwxGnAbc6uCHIU9evQeYxkHquQTns16oMWRtIJNZcvQsANkR8";
		const _descriptionTNzZtXn = null;
		const _OptionJYVh1uZ = new Option(_flagsTbgYtju, _descriptionTNzZtXn)
		const _returnValueOOHzzaA = {
		
	}
		const _nameIkMIBLk = () => { return _returnValueOOHzzaA };
		const _returnValuesgkhcoW = await _OptionJYVh1uZ.env(_nameIkMIBLk)
		const _arrayValueFbmMwTU = []
		const _arrayValuePfCQE4e = true;
		const _arrayValuemi9wKuo = -9.774404828629239;
		const _valuesrWP1uo4 = [_arrayValueFbmMwTU, _arrayValuePfCQE4e, _arrayValuemi9wKuo]
		const _returnValueg45QyKp = await _OptionJYVh1uZ.choices(_valuesrWP1uo4)
		const _fniqe6qw = undefined;
		const _returnValueaHeeGdE = await _OptionJYVh1uZ.argParser(_fniqe6qw)
		const _returnValueqSv7HS3 = null;
		const _includeszERXNh = () => { return _returnValueqSv7HS3 };
		const _returnValuezyBJUwy = undefined;
		const _joinud8ILXG = () => { return _returnValuezyBJUwy };
		const _valuesgV9yCvs = {
			"includes": _includeszERXNh,
		"join": _joinud8ILXG
	}
		const _returnValueejgDMsO = await _OptionJYVh1uZ.choices(_valuesgV9yCvs)
	});

	it('test for Option', async () => {
		const _flagsSI2Ogr3 = "w27jCPdWl80ztHFuNz4o15owRIqxwupsHrY1";
		const _descriptionQiCtiKg = undefined;
		const _OptionDu8zRCR = new Option(_flagsSI2Ogr3, _descriptionQiCtiKg)
		const _hideNZwXwLJ = true;
		const _returnValuedwNhnva = await _OptionDu8zRCR.hideHelp(_hideNZwXwLJ)
		const _hideNZGKa4Y = false;
		const _returnValuejam6vdx = await _OptionDu8zRCR.hideHelp(_hideNZGKa4Y)
		const _mandatoryied3Qg9 = true;
		const _returnValueyeQZZBM = await _OptionDu8zRCR.makeOptionMandatory(_mandatoryied3Qg9)
		const _hideKw4rpWw = false;
		const _returnValueCluOJ7m = await _OptionDu8zRCR.hideHelp(_hideKw4rpWw)
		const _namec9qJL3r = []
		const _returnValueJXPR92R = await _OptionDu8zRCR.env(_namec9qJL3r)
	});

	it('test for Option', async () => {
		const _flagsKICDpDA = "wNxs3YsO66P7K1QU2jmcCQKwyIazcvB22uUvCfdBQ1Iaf7pEl5Rmpnhj6XwRI2olK4";
		const _descriptionwP0Hxt = true;
		const _OptionL8VIlDR = new Option(_flagsKICDpDA, _descriptionwP0Hxt)
		const _valueSuEjml3 = 7.192465376159046;
		const _previouske9UDkg = {
		
	}
		const _returnValueDtrrxuv = await _OptionL8VIlDR._concatValue(_valueSuEjml3, _previouske9UDkg)
		const _mandatoryfTOgIeM = true;
		const _returnValueffEkkdt = await _OptionL8VIlDR.makeOptionMandatory(_mandatoryfTOgIeM)
	});

	it('test for Option', async () => {
		const _flagslhErpEG = "IKbQVjYWqxH7JeNywWYjMS3x3LgyTqbcU9";
		const _descriptionmdXqTDV = false;
		const _OptionTNxrzPc = new Option(_flagslhErpEG, _descriptionmdXqTDV)
		const _returnValueW7NMOTJ = await _OptionTNxrzPc.attributeName()
		const _valueLpOYez1 = undefined;
		const _descriptionlCtYiQb = false;
		const _returnValueShRmgNR = await _OptionTNxrzPc.default(_valueLpOYez1, _descriptionlCtYiQb)
		const _namehmiQLNg = "fdxgM6Ovq8whZSqHAtsdXrg5WEY7TwjVnO66jpQQH97Cllo4ijSejc7kXGnlK5edFRimwOVtacMqmbhspGdKRF147S86QyOlJb2";
		const _returnValueO8vZVsO = await _OptionTNxrzPc.env(_namehmiQLNg)
	});

	it('test for Option', async () => {
		const _flagscNWoHTd = "xeTf1tdIZOjVXOyYU57dphDsJBawQJlVBeMChNx9E31BIF4Pfx0IJJhzp5";
		const _descriptionBQAHyL = undefined;
		const _OptionQY2LoSN = new Option(_flagscNWoHTd, _descriptionBQAHyL)
		const _returnValueChwQHKa = await _OptionQY2LoSN.attributeName()
		const _fnLyIoS5D = {
		
	}
		const _returnValueCDRA6q7 = await _OptionQY2LoSN.argParser(_fnLyIoS5D)
		const _mandatoryHUOkoy5 = false;
		const _returnValuedc0SIgt = await _OptionQY2LoSN.makeOptionMandatory(_mandatoryHUOkoy5)
		const _returnValueZ4IAhDk = await _OptionQY2LoSN.attributeName()
		const _valuewtwQ6j = undefined;
		const _arrayValueZQSTyfO = false;
		const _arrayValuenKFLyhJ = true;
		const _previousGWsHcPQ = [_arrayValueZQSTyfO, _arrayValuenKFLyhJ]
		const _returnValue8QKyzs = await _OptionQY2LoSN._concatValue(_valuewtwQ6j, _previousGWsHcPQ)
	});
})