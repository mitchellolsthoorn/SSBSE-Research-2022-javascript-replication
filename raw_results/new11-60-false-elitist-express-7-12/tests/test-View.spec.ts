export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameIWmSP5 = 6.183832088028261;
		const _optionsmnH3fKC = null;
		const _ViewUx6Tk9v = new View(_nameIWmSP5, _optionsmnH3fKC)
		const _arrayValuedS1Ehrq = "BRrDsGqJXh72nPUyIeUahIsAr";
		const _arrayValueiK3e8em = false;
		const _returnValueTngZXPA = false;
		const _arrayValuejvjrm3X = () => { return _returnValueTngZXPA };
		const _arrayValueTDo2vRP = undefined;
		const _returnValuevFZUmxy = [_arrayValuedS1Ehrq, _arrayValueiK3e8em, _arrayValuejvjrm3X, _arrayValueTDo2vRP]
		const _namev4h6xSG = () => { return _returnValuevFZUmxy };
		const _returnValueoiEXp9Y = await _ViewUx6Tk9v.lookup(_namev4h6xSG)
		const _optionsVQR2b7z = "Cm1T2KYOljUtHjwO4VHHcJ37zaBfyjEC6BIu19Qdgy6uedt1ZOo1VMBpFD9JIKgWiYpsU9JKIubiIhJm";
		const _callbackuAiWLxW = undefined;
		const _returnValueFYh2vdN = await _ViewUx6Tk9v.render(_optionsVQR2b7z, _callbackuAiWLxW)
	});

	it('test for View', async () => {
		const _namesY32sWx = "ju6uGVDCPclbESv";
		const _optionstvZdIZ = null;
		const _ViewV3nFWL8 = new View(_namesY32sWx, _optionstvZdIZ)
		const _nameSy41fxG = "DzS6GW0YMyjr9JFbcuInJ34fWvh7WKPcDsUzEmay9ggpgltK3rSbtMCpKR48McZyqDRmKJEzlpdoYPIz3p";
		const _returnValueCkBmTzX = await _ViewV3nFWL8.lookup(_nameSy41fxG)
	});
})