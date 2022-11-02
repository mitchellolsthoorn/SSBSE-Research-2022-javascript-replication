export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqs2OU7W5 = req
		const _nameMQ6EnY = "abrcOh9VNiCHbPXhbGAMYFp";
		const _defaultValueeNq7y68 = undefined;
		const _returnValuerL9ir0R = await _reqs2OU7W5.param(_nameMQ6EnY, _defaultValueeNq7y68)
		const _nameDfn8RQL = "3A3Xl1CmrgkhqR2Z";
		const _defaultValueFy1tTo8 = "xOoECveil2IAvvDuA3Ma9S92ZuzcS7FsFNaXH3fAzjv7eEBcfzMLD4Z";
		const _returnValuedTwQzuP = await _reqs2OU7W5.param(_nameDfn8RQL, _defaultValueFy1tTo8)
		const _returnValuemuaQPgg = await _reqs2OU7W5.acceptsEncodings()
		const _returnValueSt1eNuD = await _reqs2OU7W5.accepts()
	});

	it('test for req', async () => {
		const _reqL720rDD = req
		const _returnValues2pvt6M = undefined;
		const _returnValuecO0J6tx = () => { return _returnValues2pvt6M };
		const _toLowerCaserAZBy5F = () => { return _returnValuecO0J6tx };
		const _nameCzUmcDS = {
			"toLowerCase": _toLowerCaserAZBy5F
	}
		const _returnValued1d68o3 = await _reqL720rDD.header(_nameCzUmcDS)
		const _returnValueLHZDK9h = undefined;
		const _toLowerCaseid4ZYnO = () => { return _returnValueLHZDK9h };
		const _nameIwrbDrv = {
			"toLowerCase": _toLowerCaseid4ZYnO
	}
		const _returnValueaU6hxgi = await _reqL720rDD.header(_nameIwrbDrv)
		const _sizeQt01XQP = {
		
	}
		const _optionsVqsOLjo = -6.702020229719181;
		const _returnValuexwhzOAl = await _reqL720rDD.range(_sizeQt01XQP, _optionsVqsOLjo)
		const _returnValueNknT2R6 = await _reqL720rDD.acceptsEncodings()
		const _returnValueyTuVRAH = await _reqL720rDD.acceptsLanguages()
	});

	it('test for req', async () => {
		const _reqXdQGZXc = req
		const _sizeutEK25n = undefined;
		const _optionsWq7QIOw = false;
		const _returnValueSCqivFL = await _reqXdQGZXc.range(_sizeutEK25n, _optionsWq7QIOw)
		const _returnValuezBngxf = await _reqXdQGZXc.accepts()
		const _returnValueG1UxjZ1 = await _reqXdQGZXc.accepts()
	});

	it('test for req', async () => {
		const _reqh6XxM9H = req
		const _typesvKWSusn = {
		
	}
		const _returnValueM2eTvFS = await _reqh6XxM9H.is(_typesvKWSusn)
		const _typesblln6SK = {
		
	}
		const _returnValueXxAJD4v = await _reqh6XxM9H.is(_typesblln6SK)
	});

	it('test for req', async () => {
		const _reqlfyAtZ = req
		const _returnValueG5znH2y = await _reqlfyAtZ.accepts()
		const _arrayValueT3GQR4 = true;
		const _arrayValueu2EM8aW = -0.2301086836411983;
		const _arrayValuewVDY8s = 0.4312147239752271;
		const _typesL4dYvz2 = [_arrayValueT3GQR4, _arrayValueu2EM8aW, _arrayValuewVDY8s]
		const _returnValueYvnJ2e = await _reqlfyAtZ.is(_typesL4dYvz2)
		const _nameThrJgX5 = "eDV4EsDxd4eHhV4xgxvygPSdL2Vb2BvI2vkB5kTb2ngsMoBFuWtQuXWSsdcnt4NWFjbevN9ln";
		const _returnValue60RG7T = await _reqlfyAtZ.header(_nameThrJgX5)
		const _returnValueSBHkDAA = await _reqlfyAtZ.acceptsEncodings()
	});
})