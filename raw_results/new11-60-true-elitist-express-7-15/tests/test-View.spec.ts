export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _namejIwmEsI = 2.8230944110515246;
		const _optionsreJhdx = null;
		const _ViewHQ9oRwK = new View(_namejIwmEsI, _optionsreJhdx)
		const _returnValuefDr67or = undefined;
		const _optionsaCu1KCK = () => { return _returnValuefDr67or };
		const _arrayValueH1tH4Dc = null;
		const _arrayValueSzkLhrF = undefined;
		const _arrayValueZ4Md19K = -5.883462807875952;
		const _returnValueGH9ziF = [_arrayValueZ4Md19K]
		const _arrayValuefm2jtNZ = () => { return _returnValueGH9ziF };
		const _arrayValueKZB9YTs = 1.0499624727161017;
		const _callbackEiYnrZf = [_arrayValueH1tH4Dc, _arrayValueSzkLhrF, _arrayValuefm2jtNZ, _arrayValueKZB9YTs]
		const _returnValueoCtWbQV = await _ViewHQ9oRwK.render(_optionsaCu1KCK, _callbackEiYnrZf)
		const _dirR9g0Bk = {
		
	}
		const _filepIbfDvm = undefined;
		const _returnValueMUu7RZm = await _ViewHQ9oRwK.resolve(_dirR9g0Bk, _filepIbfDvm)
		const _dirVSelFDr = 4.2058126349573595;
		const _fileZ2efdc = undefined;
		const _returnValuejlQDMnO = await _ViewHQ9oRwK.resolve(_dirVSelFDr, _fileZ2efdc)
		const _dirSho3Eqs = false;
		const _arrayValueb0Dfqr = -5.763034157476473;
		const _arrayValueGrUXMW = null;
		const _arrayValuecpAQ7j6 = -5.294752769447355;
		const _returnValuezPCHieD = [_arrayValuecpAQ7j6]
		const _arrayValueAvnvS8a = () => { return _returnValuezPCHieD };
		const _fileOHkaQw7 = [_arrayValueb0Dfqr, _arrayValueGrUXMW, _arrayValueAvnvS8a]
		const _returnValuegP1o72H = await _ViewHQ9oRwK.resolve(_dirSho3Eqs, _fileOHkaQw7)
		const _returnValueUU3G7fb = []
		const _optionsvGOVjqL = () => { return _returnValueUU3G7fb };
		const _returnValueOEZHwY = true;
		const _callbacksIgi3lN = () => { return _returnValueOEZHwY };
		const _returnValueoAAG0P = await _ViewHQ9oRwK.render(_optionsvGOVjqL, _callbacksIgi3lN)
	});

	it('test for View', async () => {
		const _nameMYUXRUl = "dRdEnWpqUr7wSqOql1aKcohkVaOXY8ZcB5Hhr1AZSWxOUt2jzpDRMKR";
		const _optionsOo9ZtQz = true;
		const _ViewBHBy9uV = new View(_nameMYUXRUl, _optionsOo9ZtQz)
		const _dirMQCBzu5 = null;
		const _fileYOXxmAI = null;
		const _returnValueCL5cQp = await _ViewBHBy9uV.resolve(_dirMQCBzu5, _fileYOXxmAI)
		const _nameSVyQUt8 = "9vjZYexb3FhFkNHfQg8iyhu3g2BpK9x9lzTi3SWMmoddcesDGd";
		const _returnValuenqmRVvy = await _ViewBHBy9uV.lookup(_nameSVyQUt8)
		const _nameqEcMGG = 5.257109691145683;
		const _returnValueURVi35J = await _ViewBHBy9uV.lookup(_nameqEcMGG)
	});
})