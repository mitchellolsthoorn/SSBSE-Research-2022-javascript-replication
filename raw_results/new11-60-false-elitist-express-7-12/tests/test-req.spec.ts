export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqz0N9MEk = req
		const _arrayValueOeV7MsJ = "Tqx7rlo3mykPKwUP7SQ5bX";
		const _arrayValuesby71PY = undefined;
		const _arrayValueXO242L9 = null;
		const _arrayValueMT8IZAl = [_arrayValueXO242L9]
		const _toLowerCasez4y58Fe = [_arrayValueOeV7MsJ, _arrayValuesby71PY, _arrayValueMT8IZAl]
		const _nameUkoDFUX = {
			"toLowerCase": _toLowerCasez4y58Fe
	}
		const _returnValuebeY7TQp = await _reqz0N9MEk.header(_nameUkoDFUX)
		const _nameQPVeuUk = "HZRCKuTyNsS3mywVGzZnMhWnmqxBPk3pr7IfuaJgthccGPwp8QqpgGYNWcJV5zMN7o9TmhTpLHmILhqXcU3t3nys";
		const _defaultValueAlf3H14 = undefined;
		const _returnValueIx95HDV = await _reqz0N9MEk.param(_nameQPVeuUk, _defaultValueAlf3H14)
		const _returnValueOAjg83X = await _reqz0N9MEk.acceptsEncodings()
		const _returnValueooTvQZN = await _reqz0N9MEk.acceptsCharsets()
		const _returnValueD5ZVBCu = await _reqz0N9MEk.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqnLjbqih = req
		const _returnValuexE687Z = await _reqnLjbqih.acceptsLanguages()
		const _returnValueG44aLLI = await _reqnLjbqih.acceptsCharsets()
		const _sizeRyRi6J = {
		
	}
		const _optionsXMr9mnE = true;
		const _returnValueNM4dHlB = await _reqnLjbqih.range(_sizeRyRi6J, _optionsXMr9mnE)
		const _sizegWf0cut = false;
		const _optionszzdUN6W = {
		
	}
		const _returnValuelfMUzjj = await _reqnLjbqih.range(_sizegWf0cut, _optionszzdUN6W)
	});

	it('test for req', async () => {
		const _reqjSROpl8 = req
		const _nameNemDkeQ = "";
		const _defaultValuewjgVOlu = false;
		const _returnValueS32cYFB = await _reqjSROpl8.param(_nameNemDkeQ, _defaultValuewjgVOlu)
		const _returnValueFdVghrl = await _reqjSROpl8.acceptsEncodings()
		const _returnValuePuo0TtJ = await _reqjSROpl8.acceptsEncodings()
	});

	it('test for req', async () => {
		const _reqvmHUyVw = req
		const _typesOKLKKAN = {
		
	}
		const _returnValueG26jpVd = await _reqvmHUyVw.is(_typesOKLKKAN)
		const _nameWtpave = "DzSm9Su2qsDBntys9yMMJXrJBofVPFbnoqotT3FwL";
		const _defaultValueOfm3TQb = "bxyMd5mG1KclcQs93ZQsR0Xef1aKGlc2bFRbHjiqcJOVOgrgG3ucmt7BGI";
		const _returnValueayKECgE = await _reqvmHUyVw.param(_nameWtpave, _defaultValueOfm3TQb)
		const _sizeJMm5Feh = {
		
	}
		const _optionsxkICZQW = undefined;
		const _returnValueDaSXLra = await _reqvmHUyVw.range(_sizeJMm5Feh, _optionsxkICZQW)
	});

	it('test for req', async () => {
		const _reqQWKFfwU = req
		const _sizeiQkd7wf = 4.943080101878618;
		const _optionsNmRlyMw = null;
		const _returnValuei5IYg9M = await _reqQWKFfwU.range(_sizeiQkd7wf, _optionsNmRlyMw)
		const _returnValueQ3Tkk4 = await _reqQWKFfwU.accepts()
		const _returnValueoqmpwZV = await _reqQWKFfwU.accepts()
		const _returnValueuHoTk6 = await _reqQWKFfwU.acceptsCharsets()
		const _arrayValueyCtiThM = "RZ5HGIdOA9tMYpsb36YU3ot7gbqukJ5f1d7gWX1H2SJV4HK4BoGovEmxTVIUh9ntIPYLPpmJIk1K8D8Y0OlHMApAqQVo";
		const _arrayValueB7jly9w = "EfHvxqtCb8sqAzNDbmyj4AulSIOEUMKeqYeOniAaIuc7PrDx7uy9CIcobELXvH4SQydbpLEyAwCVRtdHwje0ME";
		const _typesidEUIH2 = [_arrayValueyCtiThM, _arrayValueB7jly9w]
		const _returnValueiV8dbpV = await _reqQWKFfwU.is(_typesidEUIH2)
	});
})