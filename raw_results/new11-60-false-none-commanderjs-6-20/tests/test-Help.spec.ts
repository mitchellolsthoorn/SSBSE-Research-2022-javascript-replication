export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpqRY3KFn = new Help()
		const _arrayValueDg61jG = {
		
	}
		const _arrayValueHx20U2Q = null;
		const _strxwquDAZ = [_arrayValueDg61jG, _arrayValueHx20U2Q]
		const _widthaNlVXpw = 1.3007268150390168;
		const _returnValueDMMw7U7 = undefined;
		const _indentsJCFeT6 = () => { return _returnValueDMMw7U7 };
		const _minColumnWidthqt84zpm = undefined;
		const _returnValueok8qR4S = await _HelpqRY3KFn.wrap(_strxwquDAZ, _widthaNlVXpw, _indentsJCFeT6, _minColumnWidthqt84zpm)
		const _cmdFpY4ijE = undefined;
		const _returnValuedPVT1cS = await _HelpqRY3KFn.commandUsage(_cmdFpY4ijE)
		const _cmdUOFpV0 = "56T4HIQOxI9z";
		const _helperLHYXzeQ = -1.9313132254778012;
		const _returnValueVcZXOE = await _HelpqRY3KFn.longestArgumentTermLength(_cmdUOFpV0, _helperLHYXzeQ)
	});

	it('test for Help', async () => {
		const _HelpTVtEhCo = new Help()
		const _argumentWELoVSQ = false;
		const _returnValueh8ryRwS = await _HelpTVtEhCo.argumentDescription(_argumentWELoVSQ)
		const _strpKg6jH7 = true;
		const _widthPYkvhV5 = "ei1UpLuUBcoVOnBXsKigea1VdNngRCuAzLn6YMzmwhe3IN8rppvOWoeM8CjdKvd4RjW9S7QyGCOcnYhJPv9Pur9qgaPrudX";
		const _arrayValueG0pCtZS = "dBFepraGFP6QtJ01mpGiMIqsRbhkVJTjlf3HStGXqOVThIaB";
		const _arrayValuesQwJEjn = null;
		const _arrayValueQoeYNFB = true;
		const _indentu4lNRg4 = [_arrayValueG0pCtZS, _arrayValuesQwJEjn, _arrayValueQoeYNFB]
		const _minColumnWidthaKvb98f = "DEyBPvqYHRPobvuHxR0MNf6aKkHEyEDPfKMjM9SIE8qPMCe6VSGSq461MbnQIw3OQeQA89Nr";
		const _returnValueIfxqgtk = await _HelpTVtEhCo.wrap(_strpKg6jH7, _widthPYkvhV5, _indentu4lNRg4, _minColumnWidthaKvb98f)
	});

	it('test for Help', async () => {
		const _HelpBKmtm7u = new Help()
		const _cmdImAx3gt = {
		
	}
		const _returnValueuBK47r9 = await _HelpBKmtm7u.visibleOptions(_cmdImAx3gt)
		const _arrayValuei1CcGmJ = 7.317956709639706;
		const _returnValueRFnVRih = false;
		const _returnValueKKgubS0 = () => { return _returnValueRFnVRih };
		const _arrayValuelFfAPqx = () => { return _returnValueKKgubS0 };
		const _cmdOTVwCPY = [_arrayValuei1CcGmJ, _arrayValuelFfAPqx]
		const _helpertV6e6cO = undefined;
		const _returnValueRyAjdXr = await _HelpBKmtm7u.formatHelp(_cmdOTVwCPY, _helpertV6e6cO)
		const _cmdiVXV6Bg = false;
		const _helperghmVfVu = false;
		const _returnValueTSOR3dn = await _HelpBKmtm7u.longestArgumentTermLength(_cmdiVXV6Bg, _helperghmVfVu)
		const _arrayValueIMlypih = -1.9092472217058098;
		const _arrayValueLtgTDBq = -4.907798246046809;
		const _arrayValueGf93MXm = undefined;
		const _option5mVEEh = [_arrayValueIMlypih, _arrayValueLtgTDBq, _arrayValueGf93MXm]
		const _returnValueNwKAnf5 = await _HelpBKmtm7u.optionDescription(_option5mVEEh)
	});

	it('test for Help', async () => {
		const _HelpjRiN4LR = new Help()
		const _returnValuexRYpciI = {
		
	}
		const _cmdZME7FfQ = () => { return _returnValuexRYpciI };
		const _returnValueto7cOfR = await _HelpjRiN4LR.commandDescription(_cmdZME7FfQ)
		const _cmdx1xM6jX = null;
		const _returnValuezpILMnL = await _HelpjRiN4LR.commandDescription(_cmdx1xM6jX)
		const _cmdr5FVGaf = undefined;
		const _helperIWhf4QJ = "EBjj";
		const _returnValuei2pIIoh = await _HelpjRiN4LR.longestOptionTermLength(_cmdr5FVGaf, _helperIWhf4QJ)
		const _cmdEx27tDH = false;
		const _returnValueVJyhLKJ = await _HelpjRiN4LR.subcommandTerm(_cmdEx27tDH)
	});

	it('test for Help', async () => {
		const _HelpLieoTjd = new Help()
		const _optionfovu3mY = true;
		const _returnValuez4ABFf2 = await _HelpLieoTjd.optionTerm(_optionfovu3mY)
		const _arrayValueukJpn59 = {
		
	}
		const _arrayValueNPpRzUa = false;
		const _cmdaD0qL6S = [_arrayValueukJpn59, _arrayValueNPpRzUa]
		const _helpericlMrFd = null;
		const _returnValuejrN3gh = await _HelpLieoTjd.longestSubcommandTermLength(_cmdaD0qL6S, _helpericlMrFd)
		const _argumentuVdusZS = null;
		const _returnValueixFc80f = await _HelpLieoTjd.argumentTerm(_argumentuVdusZS)
		const _cmdLOtuh48 = "LUB1LtmzL3gviXdGQnWXGqhf5nmsd42Yoo1ytxuWNRzvgAuhLvgb3WRCIJ573NKOx5xPM1nVGCoa3IgvGQQx";
		const _returnValueKjuFmI8 = await _HelpLieoTjd.subcommandDescription(_cmdLOtuh48)
	});

	it('test for Help', async () => {
		const _Help1pq4DK = new Help()
		const _argumentGbqjQ2A = "o9YibPYXHB7mO0uGZNnXyVwxqjabqhPTX5HyTLhvkJpE5ok9eknk2feiQH3pXJzKb7iFFSOid787sliPxDMHPOf8OMGluQb";
		const _returnValueucX4cG0 = await _Help1pq4DK.argumentDescription(_argumentGbqjQ2A)
		const _cmdYjQGokm = true;
		const _returnValueBa2gGbx = await _Help1pq4DK.commandUsage(_cmdYjQGokm)
	});

	it('test for Help', async () => {
		const _HelpzJAI49h = new Help()
		const _cmddyj7Gnp = -5.94102356449856;
		const _returnValueT0iGQz = await _HelpzJAI49h.subcommandTerm(_cmddyj7Gnp)
		const _cmdnf6hYN9 = true;
		const _returnValuePwMbmP5 = await _HelpzJAI49h.visibleCommands(_cmdnf6hYN9)
	});

	it('test for Help', async () => {
		const _HelpAh5s29 = new Help()
		const _cmdXdQdE3V = false;
		const _returnValuev1Uft2 = await _HelpAh5s29.visibleArguments(_cmdXdQdE3V)
		const _cmdPq09BZi = {
		
	}
		const _returnValuehGLk04V = await _HelpAh5s29.commandDescription(_cmdPq09BZi)
		const _optionI4foTY = null;
		const _returnValuemZFXBNz = await _HelpAh5s29.optionDescription(_optionI4foTY)
		const _optionAfPaOA4 = 6.935570081393752;
		const _returnValuetEJoOAn = await _HelpAh5s29.optionTerm(_optionAfPaOA4)
	});

	it('test for Help', async () => {
		const _HelpFDAFArA = new Help()
		const _arrayValuezxsa1id = -2.2643126281366897;
		const _arrayValuenJ9qF9b = null;
		const _arrayValueDtlSLOj = "fGFWv9d2RzVCzwMUvjXxuu0mYVPrVfzoBDndTbGCcJDK43QGVApyxNoGYLN0ez8G07Sm3QpSbGNV3UzQXKnpWF6HEAhNID";
		const _optionNsLbTGf = [_arrayValuezxsa1id, _arrayValuenJ9qF9b, _arrayValueDtlSLOj]
		const _returnValueBah2s3l = await _HelpFDAFArA.optionTerm(_optionNsLbTGf)
		const _cmdLxGx44 = "j8SBmY4ISUr9qbS0bG3S61YE7F9sz8EcSGZB21HkJOdMwRFrjkWGTr5YjyahYHaPEb7CGLys";
		const _helperrckCoZf = -7.876527361317997;
		const _returnValueplkb1Qb = await _HelpFDAFArA.longestArgumentTermLength(_cmdLxGx44, _helperrckCoZf)
	});

	it('test for Help', async () => {
		const _Helpcm845KS = new Help()
		const _cmd2bUvES = "UYxzniuC4pvzQaKzL";
		const _arrayValuezNcDyK8 = "P1r6POMD3IGkjghGXUW3xOf20A4";
		const _returnValuevEZJEhO = 0.7694228203863336;
		const _arrayValueEpvmiNf = () => { return _returnValuevEZJEhO };
		const _helpertxEs5j6 = [_arrayValuezNcDyK8, _arrayValueEpvmiNf]
		const _returnValueuNPSNg7 = await _Helpcm845KS.longestOptionTermLength(_cmd2bUvES, _helpertxEs5j6)
		const _returnValueD1oXjgI = {
		
	}
		const _arrayValuegkQQKUe = () => { return _returnValueD1oXjgI };
		const _cmdjvR8aRB = [_arrayValuegkQQKUe]
		const _helperpQvJbd6 = undefined;
		const _returnValuezK8FJh8 = await _Helpcm845KS.longestArgumentTermLength(_cmdjvR8aRB, _helperpQvJbd6)
	});

	it('test for Help', async () => {
		const _Helpfoi3r0n = new Help()
		const _optionkZkVzK2 = {
		
	}
		const _returnValueaqVZnth = await _Helpfoi3r0n.optionDescription(_optionkZkVzK2)
	});

	it('test for Help', async () => {
		const _HelpmWDwLSW = new Help()
		const _arrayValuefzBBKuI = undefined;
		const _arrayValueHXRa2g7 = true;
		const _argumentRrqzRh = [_arrayValuefzBBKuI, _arrayValueHXRa2g7]
		const _returnValueAK7NcjB = await _HelpmWDwLSW.argumentTerm(_argumentRrqzRh)
		const _arrayValueqLRp2Ej = "6zJpCFbk8bDobxNjlCiEOWXQepJ4eOjDdIRxvKzj2btFHFBvWwWDWrvDXo";
		const _arrayValueCdB3Joz = [_arrayValueqLRp2Ej]
		const _arrayValuepxDk0yW = {
		
	}
		const _cmdmO7Gm25 = [_arrayValueCdB3Joz, _arrayValuepxDk0yW]
		const _returnValueH0qAFry = await _HelpmWDwLSW.visibleArguments(_cmdmO7Gm25)
		const _returnValuejwRVeRL = {
		
	}
		const _arrayValueoleeuMP = () => { return _returnValuejwRVeRL };
		const _arrayValueoqG2g7z = 1.1868880213235506;
		const _arrayValueJPQovTB = "3QvhnCKLqm2IrI56llN48tn6nZWlVvyRrbQvKMGUhd2ZkK";
		const _arrayValuedqQiI7p = -4.9974053390142315;
		const _arrayValueSyjiqnv = [_arrayValueoqG2g7z, _arrayValueJPQovTB, _arrayValuedqQiI7p]
		const _arrayValueuAngpjm = -5.01251190101484;
		const _arrayValueBT9FRw = 2.183240805562372;
		const _cmdUF9BbHz = [_arrayValueoleeuMP, _arrayValueSyjiqnv, _arrayValueuAngpjm, _arrayValueBT9FRw]
		const _returnValueMaT5NYq = await _HelpmWDwLSW.visibleArguments(_cmdUF9BbHz)
	});

	it('test for Help', async () => {
		const _Help91BWyz = new Help()
		const _optionJRNvTxl = -3.5114159869635833;
		const _returnValueMKh1OVE = await _Help91BWyz.optionTerm(_optionJRNvTxl)
		const _cmdZo2aBJ8 = false;
		const _returnValuepmtsHHz = await _Help91BWyz.visibleCommands(_cmdZo2aBJ8)
		const _cmdcJF9a1Z = {
		
	}
		const _returnValuejlL2iuZ = await _Help91BWyz.subcommandDescription(_cmdcJF9a1Z)
	});

	it('test for Help', async () => {
		const _HelpzP6o51Z = new Help()
		const _cmdl4jPj82 = undefined;
		const _helperW77gnia = "qFtqF90mqHb2UxHbRu943jZzj5s4QE8ryJoOSCRtikzPq6mxbnbmKNxEjtggHYskACGf7oTFG7O4rpGdAX5IajtmXwKcEAh";
		const _returnValueLghLHCV = await _HelpzP6o51Z.padWidth(_cmdl4jPj82, _helperW77gnia)
		const _optionr970GZl = true;
		const _returnValueCDzJl8x = await _HelpzP6o51Z.optionTerm(_optionr970GZl)
		const _cmdyqas4jo = -8.943016935269377;
		const _returnValueWAPRB4X = await _HelpzP6o51Z.visibleOptions(_cmdyqas4jo)
	});

	it('test for Help', async () => {
		const _HelpDq3UFEb = new Help()
		const _cmdTya0Yxf = {
		
	}
		const _returnValuej1ZEgmN = await _HelpDq3UFEb.subcommandDescription(_cmdTya0Yxf)
		const _cmdJ6lJWM = "vXSRDqjmyd4LcmBhwRb0qGJo4NGQyGTLvCIg2v3mdjB9iPkD9mpsAa5SqsyQ";
		const _arrayValueMHw0Vcm = undefined;
		const _arrayValuewWb2dfW = undefined;
		const _helperizBB83a = [_arrayValueMHw0Vcm, _arrayValuewWb2dfW]
		const _returnValueiLD8Krq = await _HelpDq3UFEb.longestOptionTermLength(_cmdJ6lJWM, _helperizBB83a)
	});

	it('test for Help', async () => {
		const _HelpHOw02Ra = new Help()
		const _strGgWGip = "KtM54lG8QAXRumI12nvhun9ntepQTB6XRFQzL59U25KnEbu38jd9Fy5q9Yg6HDtcgJeqM";
		const _widthssiaVNE = undefined;
		const _indentMhLf9d = 7.73712333180049;
		const _minColumnWidth5CvGfQ = undefined;
		const _returnValueHbr6wcs = await _HelpHOw02Ra.wrap(_strGgWGip, _widthssiaVNE, _indentMhLf9d, _minColumnWidth5CvGfQ)
		const _arrayValueYzeEAiy = true;
		const _arrayValueJItxsnC = null;
		const _arrayValueQmua1H5 = [_arrayValueYzeEAiy, _arrayValueJItxsnC]
		const _arrayValueJZVNpCV = []
		const _arrayValueToxmgEe = null;
		const _cmdr1SosF = [_arrayValueQmua1H5, _arrayValueJZVNpCV, _arrayValueToxmgEe]
		const _returnValueCtArxNa = await _HelpHOw02Ra.visibleCommands(_cmdr1SosF)
		const _cmdyU2Kxe = "mLY1QFlOViLIdpsxNKXA3O";
		const _helpernF706Qv = null;
		const _returnValueDFHbfXq = await _HelpHOw02Ra.longestOptionTermLength(_cmdyU2Kxe, _helpernF706Qv)
		const _cmdpEdAYH = "XuDqMQIFbIqGRJQqd2TLw64cv8DyTPu7XSV93dMFdGwyi7";
		const _helperUQB9Q6c = null;
		const _returnValueH1lAEXE = await _HelpHOw02Ra.padWidth(_cmdpEdAYH, _helperUQB9Q6c)
	});

	it('test for Help', async () => {
		const _HelpfdoABv2 = new Help()
		const _cmdaZcJwLV = -8.98179682837233;
		const _helperNI2UgH2 = -2.3332626159278256;
		const _returnValueikut4XH = await _HelpfdoABv2.formatHelp(_cmdaZcJwLV, _helperNI2UgH2)
		const _cmdUuIXM90 = -2.6559906259738746;
		const _returnValueeZfoS6b = await _HelpfdoABv2.visibleCommands(_cmdUuIXM90)
	});

	it('test for Help', async () => {
		const _HelpuNAOh4D = new Help()
		const _stryPPZYDA = "XQvIks1Om9CgHYfFE7uwafdswu3OvAvM89ow";
		const _widthHQSvkqb = null;
		const _indentP4eYUHJ = 0.8459515277817857;
		const _minColumnWidthRPgkY7B = null;
		const _returnValueXdjfzX4 = await _HelpuNAOh4D.wrap(_stryPPZYDA, _widthHQSvkqb, _indentP4eYUHJ, _minColumnWidthRPgkY7B)
		const _cmday39dT4 = null;
		const _helperMgiePX6 = null;
		const _returnValueqZvL9l = await _HelpuNAOh4D.longestArgumentTermLength(_cmday39dT4, _helperMgiePX6)
		const _cmdXVyRrxj = []
		const _returnValueQVNbK2W = await _HelpuNAOh4D.visibleArguments(_cmdXVyRrxj)
	});
})