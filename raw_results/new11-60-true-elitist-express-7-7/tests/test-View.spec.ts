export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameEggFbIC = "v4eAPQW1vpkUDY2ULTsQpTsRQlfje7YaStts1rMzrBM2rEuW3PETVe7N";
		const _optionssxviPv4 = undefined;
		const _ViewLTP6Dvg = new View(_nameEggFbIC, _optionssxviPv4)
		const _dirzC06QAA = null;
		const _filebKtQctZ = 3.8439662105922103;
		const _returnValueym6CBx = await _ViewLTP6Dvg.resolve(_dirzC06QAA, _filebKtQctZ)
		const _optionsFgwfzS3 = undefined;
		const _arrayValuerYQl09a = "tLqeC7F6PabIw60ECmZnlqR6hFPI7Iio3RncQw";
		const _arrayValuejjqbzkp = 5.990790474428927;
		const _arrayValuetBoSZOw = 4.607604383998856;
		const _arrayValuekyfrmdn = [_arrayValuejjqbzkp, _arrayValuetBoSZOw]
		const _callbackFfMOBMI = [_arrayValuerYQl09a, _arrayValuekyfrmdn]
		const _returnValuez1Z4PdI = await _ViewLTP6Dvg.render(_optionsFgwfzS3, _callbackFfMOBMI)
		const _namenEZbXkg = null;
		const _returnValueW4LFEWM = await _ViewLTP6Dvg.lookup(_namenEZbXkg)
		const _optionsCONtk4B = false;
		const _callbackv6CYNhI = "IehPy63TY74dTS5xqyzoBbAJKqQ3Wg6Fjkat1852vPia4m";
		const _returnValueltUQ6kv = await _ViewLTP6Dvg.render(_optionsCONtk4B, _callbackv6CYNhI)
	});
})