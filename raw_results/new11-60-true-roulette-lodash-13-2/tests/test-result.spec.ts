export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectCjGtHK1 = "rSYV2QsimFxdMxDCIauYGN91l1osTXHcmo9UUlTpRJV1Ec7CoRLdmVueyijSswBnA5RaB7l97WQ9g";
		const _pathkNtQy7s = {
		
	}
		const _defaultValueDmsPg8A = {
		
	}
		const _returnValueIBAZt4 = await result(_objectCjGtHK1, _pathkNtQy7s, _defaultValueDmsPg8A)
	});

	it('test for result', async () => {
		const _objectASIXwHX = undefined;
		const _pathU3qtZh = "XsVD5ccY1DOwaH9epoqEoXSAqzyEsOvNePMVElPrLsNa64nmFf4vSvfACmo2gKAl8bd4vi86zkKl5HRQvFV";
		const _returnValuebAuSNZe = "kT3Y1vUi86ji1bsfQGjSnzZiTrfMgpgIOK8LfVaEz6Acb2GE3mYS0GHEw37LNbPvpMyopWtoMEyNg2uK1P57tW";
		const _arrayValueDa8BuL5 = () => { return _returnValuebAuSNZe };
		const _defaultValuenjNpr3w = [_arrayValueDa8BuL5]
		const _returnValueepHYKA = await result(_objectASIXwHX, _pathU3qtZh, _defaultValuenjNpr3w)
	});

	it('test for result', async () => {
		const _objectAI8e9DI = true;
		const _path1eb5tE = "jkVMoswc1JrvqhMtBgKoQZQvx1SUJKecS5iloxFqmeeRpmGS9";
		const _arrayValueBY5O2Zx = {
		
	}
		const _arrayValueoqfQftT = "lFU8yoMg78EtpUTEFdAnIJJwTfiDKthuwliYtIn";
		const _arrayValuewJM1smq = [_arrayValueBY5O2Zx, _arrayValueoqfQftT]
		const _returnValueS8ganME = [_arrayValuewJM1smq]
		const _defaultValuetXQNuvI = () => { return _returnValueS8ganME };
		const _returnValuezcfZ3N = await result(_objectAI8e9DI, _path1eb5tE, _defaultValuetXQNuvI)
	});

	it('test for result', async () => {
		const _objectYtUWIA7 = undefined;
		const _pathlytrReX = []
		const _defaultValue1vsg6O = {
		
	}
		const _returnValueOK4yvoP = await result(_objectYtUWIA7, _pathlytrReX, _defaultValue1vsg6O)
	});
})