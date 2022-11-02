export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameElqbsDY = {
		
	}
		const _optionsfX0hiH = true;
		const _ViewfqasLr4 = new View(_nameElqbsDY, _optionsfX0hiH)
		const _dirX6DfEOJ = true;
		const _fileYRguCX3 = "mamjI5RPPFtz2ezeWzp";
		const _returnValueWM9JO95 = await _ViewfqasLr4.resolve(_dirX6DfEOJ, _fileYRguCX3)
		const _nameVwQMoLJ = null;
		const _returnValueDw0RLj = await _ViewfqasLr4.lookup(_nameVwQMoLJ)
	});

	it('test for View', async () => {
		const _nameo3SQZwu = "TaMXggU60wPRVF81Bp2CGgCmfLiZtPqKPDTxx67hsjmL0GveVLT9I98ROTcTa4V23Peo7UIqfow9OMthBbw42OY";
		const _arrayValueJPfLzvC = null;
		const _arrayValueMW4GVz9 = false;
		const _returnValueCONLWJS = [_arrayValueJPfLzvC, _arrayValueMW4GVz9]
		const _optionsiPPruyn = () => { return _returnValueCONLWJS };
		const _ViewzrFTp9u = new View(_nameo3SQZwu, _optionsiPPruyn)
		const _nameLRbuhmG = -9.40679919657999;
		const _returnValuer0OLJrO = await _ViewzrFTp9u.lookup(_nameLRbuhmG)
		const _nameY7lZAnZ = null;
		const _returnValueJw8nV8H = await _ViewzrFTp9u.lookup(_nameY7lZAnZ)
		const _nameTOglg4e = -5.008856746466284;
		const _returnValueiMzD6s = await _ViewzrFTp9u.lookup(_nameTOglg4e)
		const _nameXg1ofh = null;
		const _returnValuencXkRg9 = await _ViewzrFTp9u.lookup(_nameXg1ofh)
		const _optionsJ0QjlL9 = null;
		const _callbackhZJngYP = true;
		const _returnValuectOT23a = await _ViewzrFTp9u.render(_optionsJ0QjlL9, _callbackhZJngYP)
	});
})