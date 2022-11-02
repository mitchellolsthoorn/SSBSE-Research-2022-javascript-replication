export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqk5SoZDp = req
		const _namepKI7i6V = "oBOIuZgFZuHgDopo1aF90GCp7rjM8PflIjOEdNQCZBx";
		const _defaultValueZZm2G31 = "IkmRIb1SXpil1xb4nfJsEM83bCRM7cb";
		const _returnValuelnEGp8F = await _reqk5SoZDp.param(_namepKI7i6V, _defaultValueZZm2G31)
		const _sizesFaojB = 0.43438773504054495;
		const _optionsItft1OT = undefined;
		const _returnValueHI4EQTP = await _reqk5SoZDp.range(_sizesFaojB, _optionsItft1OT)
		const _returnValueL8hX23E = 0.9310197088558319;
		const _toLowerCaseW4AcIR7 = () => { return _returnValueL8hX23E };
		const _nameXxbHi1x = {
			"toLowerCase": _toLowerCaseW4AcIR7
	}
		const _returnValuelj1C9in = await _reqk5SoZDp.header(_nameXxbHi1x)
		const _arrayValueQjJ3szz = null;
		const _arrayValueTTADsb = "FCAlhflYD4mGOQUFPHqXjUE5lX8Yx3Mvm3cdJVY8WOJcwt4KBaWeFc6tG";
		const _arrayValueI4jCXws = null;
		const _arrayValuexnfXult = 0.899832047368152;
		const _arrayValueOgHYARi = [_arrayValueTTADsb, _arrayValueI4jCXws, _arrayValuexnfXult]
		const _arrayValueHzhOWU = false;
		const _returnValueycGCaLb = [_arrayValueQjJ3szz, _arrayValueOgHYARi, _arrayValueHzhOWU]
		const _toLowerCaseRfoBSU = () => { return _returnValueycGCaLb };
		const _nameb6bSMfx = {
			"toLowerCase": _toLowerCaseRfoBSU
	}
		const _returnValueskcmWvu = await _reqk5SoZDp.header(_nameb6bSMfx)
		const _returnValuep34MqOD = await _reqk5SoZDp.acceptsEncodings()
	});

	it('test for req', async () => {
		const _reqgDJUko7 = req
		const _typesxvgI7OP = {
		
	}
		const _returnValueYdN6ahA = await _reqgDJUko7.is(_typesxvgI7OP)
		const _returnValueV70gw6 = await _reqgDJUko7.acceptsCharsets()
		const _sizewZ2NrT6 = true;
		const _optionsJWgaVeu = true;
		const _returnValueJdh6OtQ = await _reqgDJUko7.range(_sizewZ2NrT6, _optionsJWgaVeu)
		const _arrayValueiwiZ691 = {
		
	}
		const _arrayValueqwX6e0F = "6hwg8iA2DFCvHviKAvsBwJ72OOgcdXHm35c95mFV8XYvbLrd10Pgz9yKruwKSxsfqh6XWYgxrWNOXlAQTLgShXSgR6";
		const _arrayValueyu1i6k2 = undefined;
		const _nameoCi0OnA = [_arrayValueiwiZ691, _arrayValueqwX6e0F, _arrayValueyu1i6k2]
		const _defaultValuew8SQt5k = {
		
	}
		const _returnValueCyAVHNB = await _reqgDJUko7.param(_nameoCi0OnA, _defaultValuew8SQt5k)
	});

	it('test for req', async () => {
		const _reqQfgdu6O = req
		const _returnValuelsfX0jg = await _reqQfgdu6O.acceptsCharsets()
		const _returnValueehBvQuV = await _reqQfgdu6O.accepts()
		const _returnValueVYxVgKb = await _reqQfgdu6O.acceptsLanguages()
		const _arrayValuelX9eaTZ = undefined;
		const _arrayValuehHbi78C = false;
		const _typesPiGmCTH = [_arrayValuelX9eaTZ, _arrayValuehHbi78C]
		const _returnValuewqcjhJM = await _reqQfgdu6O.is(_typesPiGmCTH)
		const _returnValueupamTD8 = await _reqQfgdu6O.acceptsCharsets()
	});
})