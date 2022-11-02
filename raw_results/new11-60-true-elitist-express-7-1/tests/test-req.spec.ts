export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqbXOB2d4 = req
		const _nameCBao516 = "ixwx8g8zD4onnpSQfY3UTYM8VvRV3KMips5doKaUiS9SwFhym5o3KwKRLe633a3ERmF4JkXr6N6aJ";
		const _defaultValuetEv6kAI = undefined;
		const _returnValueUhAnb8 = await _reqbXOB2d4.param(_nameCBao516, _defaultValuetEv6kAI)
		const _arrayValuekWtWbwa = 6.390660863254578;
		const _arrayValueCBnVaLY = null;
		const _arrayValuenbSU49r = [_arrayValueCBnVaLY]
		const _sized8cXyEZ = [_arrayValuekWtWbwa, _arrayValuenbSU49r]
		const _optionsoBSK4q = "ADjxmLC7MKD7YuH1lrOiYDqumlKTFkjJmt6zQnRHqsiGKnnfj5iljH3kr9ohV9pfO5GB4TN";
		const _returnValueWscFvah = await _reqbXOB2d4.range(_sized8cXyEZ, _optionsoBSK4q)
	});

	it('test for req', async () => {
		const _reqU5LklSw = req
		const _typesmgtdiN8 = {
		
	}
		const _returnValueTKD1xRe = await _reqU5LklSw.is(_typesmgtdiN8)
		const _sizepXQZFzP = null;
		const _optionsvocehav = "fHjK2k5FjB7bgubkNB3IylUONBLeyjn7TuCt5lVKoOpkbT4X";
		const _returnValueljthSck = await _reqU5LklSw.range(_sizepXQZFzP, _optionsvocehav)
		const _returnValuegKad4y = await _reqU5LklSw.acceptsCharsets()
		const _returnValueMEL8Xy0 = null;
		const _toLowerCasePGt8WHr = () => { return _returnValueMEL8Xy0 };
		const _namedM7MjG = {
			"toLowerCase": _toLowerCasePGt8WHr
	}
		const _returnValuehDnbSBr = await _reqU5LklSw.header(_namedM7MjG)
	});

	it('test for req', async () => {
		const _reqnQLmYmx = req
		const _sizeyBEzDA = undefined;
		const _optionsdznZr9i = null;
		const _returnValueVdTaE6U = await _reqnQLmYmx.range(_sizeyBEzDA, _optionsdznZr9i)
		const _arrayValuerqlVn3H = "xLD3LiVDDsRCGRcAOw8JJ96QhsLrzbt0WQEnsmG1p";
		const _typesswm6VDe = [_arrayValuerqlVn3H]
		const _returnValueBrZViBA = await _reqnQLmYmx.is(_typesswm6VDe)
		const _returnValueQb78f2R = await _reqnQLmYmx.acceptsLanguages()
	});
})