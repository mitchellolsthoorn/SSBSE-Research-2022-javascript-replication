export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _namegoEZpB = 7.3052919484082;
		const _optionsKP5KRlL = false;
		const _ViewIH07SJa = new View(_namegoEZpB, _optionsKP5KRlL)
		const _arrayValueHIqUVWQ = null;
		const _arrayValuenzCXKuX = undefined;
		const _arrayValueSDOXgPN = [_arrayValuenzCXKuX]
		const _arrayValueXe4DneF = true;
		const _arrayValueqegWJB = -0.4958347331869071;
		const _nameJqGRCQW = [_arrayValueHIqUVWQ, _arrayValueSDOXgPN, _arrayValueXe4DneF, _arrayValueqegWJB]
		const _returnValueCHCHQ2U = await _ViewIH07SJa.lookup(_nameJqGRCQW)
		const _dirkdkeWnw = undefined;
		const _fileAaWB8Gj = -2.245429821854846;
		const _returnValuedASrdBL = await _ViewIH07SJa.resolve(_dirkdkeWnw, _fileAaWB8Gj)
		const _returnValueO2FaWO3 = null;
		const _returnValuefrJPy3E = () => { return _returnValueO2FaWO3 };
		const _arrayValueV72WEki = () => { return _returnValuefrJPy3E };
		const _optionsD0r1ThJ = [_arrayValueV72WEki]
		const _callbackf6ZbTtE = false;
		const _returnValueb4mItEq = await _ViewIH07SJa.render(_optionsD0r1ThJ, _callbackf6ZbTtE)
	});

	it('test for View', async () => {
		const _namedgGcp1 = "HYxIYJ6JwQtJO8k9hY5U6x3WoioYIVh8b9r0II23PAKREd";
		const _optionsJdQwyMe = null;
		const _ViewIcZRuC = new View(_namedgGcp1, _optionsJdQwyMe)
		const _dirZAKs3pc = -6.727024267119273;
		const _filepDUxmH2 = 8.445037021353908;
		const _returnValuec4nRnEA = await _ViewIcZRuC.resolve(_dirZAKs3pc, _filepDUxmH2)
		const _dirdls6cUo = false;
		const _filewB6wqr = null;
		const _returnValueJ5OyRt0 = await _ViewIcZRuC.resolve(_dirdls6cUo, _filewB6wqr)
		const _nameVbtQjrh = undefined;
		const _returnValuedxiyzR3 = await _ViewIcZRuC.lookup(_nameVbtQjrh)
	});
})