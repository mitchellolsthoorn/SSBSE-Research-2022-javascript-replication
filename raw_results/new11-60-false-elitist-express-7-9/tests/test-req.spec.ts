export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqk2Kb9Mj = req
		const _returnValueW3qopBr = undefined;
		const _toLowerCaseSvOtD5a = () => { return _returnValueW3qopBr };
		const _name6WZZJt = {
			"toLowerCase": _toLowerCaseSvOtD5a
	}
		const _returnValueyZ6DJIS = await _reqk2Kb9Mj.header(_name6WZZJt)
	});

	it('test for req', async () => {
		const _reqkiT0cEb = req
		const _returnValuebPJ99rL = 8.973684803442179;
		const _sizermgSBnm = () => { return _returnValuebPJ99rL };
		const _arrayValueChMhDrl = "HA6diVs4IeVgGn2Gq7nWb8JQoMtO6IlTV475hjRdAcafCk0OU1I2Syxhvvi7xdvHucSR4mPMGv7Aqpc0zvFgu5XrIxpcQ";
		const _returnValuegwAkIKR = -8.35049327985807;
		const _arrayValuevypAp5X = () => { return _returnValuegwAkIKR };
		const _arrayValueF96K5YA = null;
		const _arrayValueyGvDF8q = null;
		const _arrayValueJRP5Jt = [_arrayValueF96K5YA, _arrayValueyGvDF8q]
		const _arrayValueScJKV9o = -3.5004960526031903;
		const _arrayValueBuoX0D2 = [_arrayValueJRP5Jt, _arrayValueScJKV9o]
		const _optionsJ2TJyxm = [_arrayValueChMhDrl, _arrayValuevypAp5X, _arrayValueBuoX0D2]
		const _returnValuev9lfKk3 = await _reqkiT0cEb.range(_sizermgSBnm, _optionsJ2TJyxm)
		const _returnValueGVWKwXP = await _reqkiT0cEb.acceptsCharsets()
		const _nameSbUxlVl = "2MDJ0DKbucNm0SdHqzUBGpcAUxctupRzAT36gacrkxJuIPrVLCndHiN";
		const _defaultValueDnrEzTk = {
		
	}
		const _returnValueiL0vctk = await _reqkiT0cEb.param(_nameSbUxlVl, _defaultValueDnrEzTk)
		const _toLowerCasePc6BMWV = undefined;
		const _nameHbszzNu = {
			"toLowerCase": _toLowerCasePc6BMWV
	}
		const _returnValueMh0g9p0 = await _reqkiT0cEb.header(_nameHbszzNu)
	});

	it('test for req', async () => {
		const _reqtA53b0c = req
		const _sizekUktN1D = false;
		const _optionsETf1NTB = undefined;
		const _returnValueZ2gf5MJ = await _reqtA53b0c.range(_sizekUktN1D, _optionsETf1NTB)
		const _typesg7TNDs0 = {
		
	}
		const _returnValueZ6d5nUF = await _reqtA53b0c.is(_typesg7TNDs0)
		const _nameOygKNkQ = "R7AuQHsy8w8MSigUwT6zqwBdfIk4rRIezurkTOC1voeZirUrvEbHigD6cwq9eaLdalw8PpwxHnmTOHe2RxGoC";
		const _defaultValueeSv5CZT = {
		
	}
		const _returnValueUa3EyM = await _reqtA53b0c.param(_nameOygKNkQ, _defaultValueeSv5CZT)
		const _returnValuemdDMXke = await _reqtA53b0c.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqkNjP8uE = req
		const _returnValueJMWiGNX = await _reqkNjP8uE.acceptsEncodings()
		const _arrayValueJAs63Z = -6.9910654128576475;
		const _arrayValueqskqnjL = "6fTjxH7EtGEOsWILBv7fQVNYoiAYUKZ88V3pXBNeK";
		const _arrayValueZeIKtko = -8.878808770016782;
		const _arrayValuefnI2Lq6 = 3.121009477650585;
		const _arrayValueTUiQ4NW = [_arrayValueJAs63Z, _arrayValueqskqnjL, _arrayValueZeIKtko, _arrayValuefnI2Lq6]
		const _arrayValueg62V5Jv = 3.1079700952438483;
		const _returnValueoWaOVwn = 8.173575738627115;
		const _arrayValueFC5UfMY = () => { return _returnValueoWaOVwn };
		const _returnValueD0alWhS = false;
		const _arrayValuexF5gsL6 = () => { return _returnValueD0alWhS };
		const _arrayValueIYrJxOZ = [_arrayValueg62V5Jv, _arrayValueFC5UfMY, _arrayValuexF5gsL6]
		const _types9kz4AI = [_arrayValueTUiQ4NW, _arrayValueIYrJxOZ]
		const _returnValueeb2ddre = await _reqkNjP8uE.is(_types9kz4AI)
		const _returnValueXtWpbKu = await _reqkNjP8uE.acceptsEncodings()
	});
})