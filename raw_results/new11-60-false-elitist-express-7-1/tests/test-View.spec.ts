export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameSQh9SDt = -3.7086795382787754;
		const _optionsh3LiO3I = undefined;
		const _ViewXIBSrzN = new View(_nameSQh9SDt, _optionsh3LiO3I)
		const _nameYENmDrm = false;
		const _returnValueKUg4Az = await _ViewXIBSrzN.lookup(_nameYENmDrm)
		const _namerfqAUrW = false;
		const _returnValuewYTRld6 = await _ViewXIBSrzN.lookup(_namerfqAUrW)
		const _returnValueMEydRQo = undefined;
		const _dir1zUSsO = () => { return _returnValueMEydRQo };
		const _fileVWpY7pR = null;
		const _returnValueu2EndGg = await _ViewXIBSrzN.resolve(_dir1zUSsO, _fileVWpY7pR)
		const _optionspkORLjX = "NBzt3";
		const _callback63k0dr = 5.455198060976285;
		const _returnValueiCzSHFW = await _ViewXIBSrzN.render(_optionspkORLjX, _callback63k0dr)
		const _dirMnQ8rb5 = true;
		const _arrayValueeh98AmP = "mKJ81wxrXnzgbcOuADVtLS8GbSopKkU2CB2i5qqwhur8t2oMmWJxIz1GazozmBwhV4pEjvUpzF5UlEHhmuqvBv70Yav";
		const _returnValueHFIewaz = [_arrayValueeh98AmP]
		const _fileffwZCOU = () => { return _returnValueHFIewaz };
		const _returnValueTKhZmEJ = await _ViewXIBSrzN.resolve(_dirMnQ8rb5, _fileffwZCOU)
	});

	it('test for View', async () => {
		const _nameR8l6bw5 = "MaoVD6zXJkQ";
		const _optionsm4QDPnc = null;
		const _ViewHMj0Swa = new View(_nameR8l6bw5, _optionsm4QDPnc)
		const _dirFHVmvj1 = 2.5249531645334145;
		const _fileHLOn2Ky = null;
		const _returnValuewLzy88H = await _ViewHMj0Swa.resolve(_dirFHVmvj1, _fileHLOn2Ky)
		const _nameKu604Vs = "bVxTd2mUAoMKuBtNqschVAQJJ5";
		const _returnValuemZONAn = await _ViewHMj0Swa.lookup(_nameKu604Vs)
		const _nameybKnBh9 = "OeXMjae6Jq0VLQc6TGRCiojv26gBQbAvabAgzrllmRT8WIWh7Qmqdc8PagyfuP1aULSDuItRcNrUKyQ";
		const _returnValuespybxq = await _ViewHMj0Swa.lookup(_nameybKnBh9)
		const _optionsbGjAiNc = null;
		const _callbackLZ3ubHl = 1.5048550002833814;
		const _returnValuebA7PCmp = await _ViewHMj0Swa.render(_optionsbGjAiNc, _callbackLZ3ubHl)
	});
})