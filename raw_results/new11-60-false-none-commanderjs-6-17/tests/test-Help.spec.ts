export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelprAfzJxR = new Help()
		const _optionihZAoL7 = null;
		const _returnValueFL1BR7 = await _HelprAfzJxR.optionTerm(_optionihZAoL7)
		const _argumentqBFce9A = false;
		const _returnValuepYOz5zq = await _HelprAfzJxR.argumentDescription(_argumentqBFce9A)
		const _optionqLy91dd = false;
		const _returnValueDc1JqI = await _HelprAfzJxR.optionTerm(_optionqLy91dd)
	});

	it('test for Help', async () => {
		const _HelpbZXp9Q3 = new Help()
		const _optionloZxRfc = 8.763312413382863;
		const _returnValuey0Y3vk7 = await _HelpbZXp9Q3.optionDescription(_optionloZxRfc)
		const _cmdEhcv9cq = null;
		const _returnValueDEKrHl1 = await _HelpbZXp9Q3.commandUsage(_cmdEhcv9cq)
		const _cmdcIREG4L = {
		
	}
		const _returnValuePPySI0d = await _HelpbZXp9Q3.visibleArguments(_cmdcIREG4L)
	});

	it('test for Help', async () => {
		const _HelpLI2V7rP = new Help()
		const _cmdifCCNAU = -1.13173784413382;
		const _helperiPDJIqD = 7.371363815885168;
		const _returnValueihkXsVu = await _HelpLI2V7rP.longestOptionTermLength(_cmdifCCNAU, _helperiPDJIqD)
		const _optioncv4dpl = true;
		const _returnValued3yQSYB = await _HelpLI2V7rP.optionDescription(_optioncv4dpl)
		const _optionRqnn3F = 9.414651436037836;
		const _returnValueFAEet0 = await _HelpLI2V7rP.optionTerm(_optionRqnn3F)
		const _optiontbCOCC8 = null;
		const _returnValueT3PDJ45 = await _HelpLI2V7rP.optionTerm(_optiontbCOCC8)
	});

	it('test for Help', async () => {
		const _HelpijvDhmH = new Help()
		const _arrayValueskaOKKT = 8.533665757451974;
		const _cmdE0iBCxv = [_arrayValueskaOKKT]
		const _helperHlGluP1 = "fWsRjX";
		const _returnValueX6mMAxq = await _HelpijvDhmH.longestArgumentTermLength(_cmdE0iBCxv, _helperHlGluP1)
		const _strbyydboc = "1uSlKsDyjpjeVYiXk9gItXCB5sJatz8JQ3hvx24jSOqIEJJ8mGEg2PQ2wt2dAwNMZqS3phcz";
		const _widthSSMz2VL = undefined;
		const _indentamwL5FX = -1.339455449582454;
		const _minColumnWidthL6aKvzS = null;
		const _returnValuehPK6T9s = await _HelpijvDhmH.wrap(_strbyydboc, _widthSSMz2VL, _indentamwL5FX, _minColumnWidthL6aKvzS)
		const _cmdD6Y1GIb = "CPbNX1WHgbR8yfFNoKa0WwTDMllFmd48FlvigI6Hk3JSM52CTt5MVGGbmh8ugih1";
		const _returnValueWuBpjGh = await _HelpijvDhmH.visibleArguments(_cmdD6Y1GIb)
	});

	it('test for Help', async () => {
		const _HelpnfKuaFb = new Help()
		const _cmdYT8T5nt = true;
		const _helperejoP5x = null;
		const _returnValue7HCESj = await _HelpnfKuaFb.formatHelp(_cmdYT8T5nt, _helperejoP5x)
		const _strHRKojV1 = null;
		const _widthioYhQyS = undefined;
		const _indentcQE4crH = {
		
	}
		const _minColumnWidthNyRfzuz = {
		
	}
		const _returnValueY9Owtjh = await _HelpnfKuaFb.wrap(_strHRKojV1, _widthioYhQyS, _indentcQE4crH, _minColumnWidthNyRfzuz)
	});

	it('test for Help', async () => {
		const _Help9EZWGx = new Help()
		const _cmd3i9BKh = -5.6295196379623205;
		const _returnValueNFK0fWz = await _Help9EZWGx.subcommandTerm(_cmd3i9BKh)
		const _cmdJJWtJcC = "UxOqrsMM6cSpm3fHRKaZzBduN";
		const _returnValuexpwOiCp = await _Help9EZWGx.visibleArguments(_cmdJJWtJcC)
	});

	it('test for Help', async () => {
		const _HelpskJAyaO = new Help()
		const _optionFHSley0 = 8.25937138159479;
		const _returnValuee1uxr0x = await _HelpskJAyaO.optionDescription(_optionFHSley0)
		const _cmdoLRVKYl = undefined;
		const _returnValuexpaTSs = await _HelpskJAyaO.visibleOptions(_cmdoLRVKYl)
		const _cmdODKnrg6 = true;
		const _returnValueKBKOL4l = await _HelpskJAyaO.subcommandDescription(_cmdODKnrg6)
		const _cmdFodfYCn = []
		const _helperWV2RqYu = -4.469041070946528;
		const _returnValueuX9GYA = await _HelpskJAyaO.longestSubcommandTermLength(_cmdFodfYCn, _helperWV2RqYu)
		const _arrayValueVkAaAhB = false;
		const _arrayValueF3FI0qB = -9.25459854973952;
		const _arrayValuekuAz75D = true;
		const _arrayValueV3oPkoI = [_arrayValueF3FI0qB, _arrayValuekuAz75D]
		const _cmdwKIhDJF = [_arrayValueVkAaAhB, _arrayValueV3oPkoI]
		const _returnValueeSyjLy = await _HelpskJAyaO.visibleArguments(_cmdwKIhDJF)
	});

	it('test for Help', async () => {
		const _HelpmNPkv4D = new Help()
		const _optionnJhuAaK = "j87eFquOGElO5mwkhuXWixOHaqC88qXSRwoWtDTnqKc1pSxzs4sxiwYaO4j4PPxvNLnJ12DfF4ASrEHGsDRtWRyYNF9qXnxN";
		const _returnValueSmHT7uP = await _HelpmNPkv4D.optionTerm(_optionnJhuAaK)
		const _argumentM3GLQ7p = "y4nMPzWFrOzbs25h6lDQNOJFlrNgyLb23DTsX8fn3pzE3gA";
		const _returnValueAnEWq7E = await _HelpmNPkv4D.argumentTerm(_argumentM3GLQ7p)
		const _cmdgrH8qc5 = "fzQ5KXsJtCqLdYdRnGftXImkWS9mkonw7BXWB";
		const _helperX1tM39 = 9.965879626519389;
		const _returnValuevPYBxM0 = await _HelpmNPkv4D.longestArgumentTermLength(_cmdgrH8qc5, _helperX1tM39)
		const _cmdNAC5Lft = null;
		const _returnValueOR4I3Vy = await _HelpmNPkv4D.commandUsage(_cmdNAC5Lft)
	});

	it('test for Help', async () => {
		const _HelpDPzUjpT = new Help()
		const _cmdZFuRl2Q = false;
		const _returnValuezryKsSJ = await _HelpDPzUjpT.visibleCommands(_cmdZFuRl2Q)
		const _cmdS9YPS08 = {
		
	}
		const _returnValueXHF86lQ = await _HelpDPzUjpT.visibleArguments(_cmdS9YPS08)
		const _cmdwbcPM65 = null;
		const _returnValueHF6sDRT = await _HelpDPzUjpT.subcommandDescription(_cmdwbcPM65)
		const _cmdRhAiGY = undefined;
		const _returnValueGuapxCU = await _HelpDPzUjpT.commandUsage(_cmdRhAiGY)
		const _argumentKVi7pvb = null;
		const _returnValueDyCCEtM = await _HelpDPzUjpT.argumentDescription(_argumentKVi7pvb)
	});

	it('test for Help', async () => {
		const _HelpzLlTViE = new Help()
		const _returnValuechm4J2Q = 9.693621809684114;
		const _cmdkRBLmU4 = () => { return _returnValuechm4J2Q };
		const _returnValueunmf4Xv = await _HelpzLlTViE.commandDescription(_cmdkRBLmU4)
		const _cmdTpHNBBe = undefined;
		const _returnValueEGuZICI = await _HelpzLlTViE.subcommandTerm(_cmdTpHNBBe)
	});

	it('test for Help', async () => {
		const _HelpiucgWNF = new Help()
		const _cmdkOqQvMd = {
		
	}
		const _returnValueJkDTkJs = await _HelpiucgWNF.commandUsage(_cmdkOqQvMd)
	});

	it('test for Help', async () => {
		const _HelpLDYAJjW = new Help()
		const _arrayValuejCTM7hy = "U7XDLMAppyM2CNNh3BSAPJUbR4P";
		const _arrayValuecYnUy5b = -8.810811663176027;
		const _argumentVcQprTa = [_arrayValuejCTM7hy, _arrayValuecYnUy5b]
		const _returnValueOQ92xox = await _HelpLDYAJjW.argumentDescription(_argumentVcQprTa)
	});

	it('test for Help', async () => {
		const _HelpWZAFgl4 = new Help()
		const _cmdznCJ1Gz = null;
		const _helpergXyhP4B = false;
		const _returnValueqNtSSjb = await _HelpWZAFgl4.longestSubcommandTermLength(_cmdznCJ1Gz, _helpergXyhP4B)
		const _arrayValuexmNS6S = null;
		const _arrayValueFYc26D = false;
		const _cmdg0aYODK = [_arrayValuexmNS6S, _arrayValueFYc26D]
		const _helpergxBJ4DH = "HbQzatE5BYuxI203S5iTKUPm49xljPZ7ib1I5Gie17k";
		const _returnValueZPnK9b = await _HelpWZAFgl4.formatHelp(_cmdg0aYODK, _helpergxBJ4DH)
		const _arrayValuerIhh36W = undefined;
		const _arrayValuebtPgfXK = null;
		const _arrayValueFoSowXQ = null;
		const _arrayValueX5hrY06 = -9.724818342021617;
		const _cmdR2p65Jk = [_arrayValuerIhh36W, _arrayValuebtPgfXK, _arrayValueFoSowXQ, _arrayValueX5hrY06]
		const _helperNiTbvMV = "Djn99afHzyMfg2EtxBqvYwLDwmCtWCve2VtC5SlfK1cQz23lona3Lbk";
		const _returnValuevP6H6c = await _HelpWZAFgl4.longestArgumentTermLength(_cmdR2p65Jk, _helperNiTbvMV)
		const _arrayValuewGvA9CN = undefined;
		const _returnValueDrxiyB8 = [_arrayValuewGvA9CN]
		const _cmdA5b3b3I = () => { return _returnValueDrxiyB8 };
		const _returnValueDMGIwG5 = await _HelpWZAFgl4.subcommandDescription(_cmdA5b3b3I)
		const _cmdn0ySsiX = undefined;
		const _helperJO7zRO5 = undefined;
		const _returnValueaIGZOU = await _HelpWZAFgl4.formatHelp(_cmdn0ySsiX, _helperJO7zRO5)
	});

	it('test for Help', async () => {
		const _HelpSC7qDZR = new Help()
		const _cmdUGcgXP3 = -3.808251764266749;
		const _returnValueDlQJVm = await _HelpSC7qDZR.subcommandDescription(_cmdUGcgXP3)
		const _arrayValuekdIVdIl = {
		
	}
		const _arrayValuedJVcQk5 = undefined;
		const _cmdJw5OlX5 = [_arrayValuekdIVdIl, _arrayValuedJVcQk5]
		const _returnValueyn0ikLL = await _HelpSC7qDZR.subcommandTerm(_cmdJw5OlX5)
		const _arrayValueDD9Zsq = true;
		const _returnValuersUJhjj = undefined;
		const _arrayValues6BUC6V = () => { return _returnValuersUJhjj };
		const _arrayValueWz0dQXf = undefined;
		const _cmdb5Lcnqs = [_arrayValueDD9Zsq, _arrayValues6BUC6V, _arrayValueWz0dQXf]
		const _returnValueDwXLYIv = await _HelpSC7qDZR.visibleOptions(_cmdb5Lcnqs)
	});

	it('test for Help', async () => {
		const _HelpI0wszeL = new Help()
		const _cmdl2gAq8 = "4E6QxQVaQxVEQsukVC7q8Ab2zd7eri6ybjaPjUsyj5RvvW1H984AhMjhslsu87urddKjgF6UHrJAJ3ZJQ6CljhBWr";
		const _returnValueJ5AesN = await _HelpI0wszeL.visibleArguments(_cmdl2gAq8)
		const _cmdClZC8uz = undefined;
		const _returnValueVpJtejS = await _HelpI0wszeL.commandUsage(_cmdClZC8uz)
		const _cmdMEdAxnt = null;
		const _returnValueD36jOOd = await _HelpI0wszeL.commandDescription(_cmdMEdAxnt)
	});

	it('test for Help', async () => {
		const _Helpqnr1ofA = new Help()
		const _strxpCxrHh = undefined;
		const _widthSL0oUbv = 0.48895446658722364;
		const _indentjJGxBuU = -2.81422463931142;
		const _minColumnWidthKPbahMf = {
		
	}
		const _returnValue9gkliK = await _Helpqnr1ofA.wrap(_strxpCxrHh, _widthSL0oUbv, _indentjJGxBuU, _minColumnWidthKPbahMf)
		const _argumentH3d0lmW = false;
		const _returnValuedVYHzFb = await _Helpqnr1ofA.argumentTerm(_argumentH3d0lmW)
	});

	it('test for Help', async () => {
		const _HelpG1kbiGg = new Help()
		const _cmdfYenyrT = "B0vGDBf1sy5LI2Prnz7Id2";
		const _helpere4ShpUA = true;
		const _returnValuej5QdBXp = await _HelpG1kbiGg.padWidth(_cmdfYenyrT, _helpere4ShpUA)
		const _argumentM6K53U8 = null;
		const _returnValueMgBSxh = await _HelpG1kbiGg.argumentTerm(_argumentM6K53U8)
	});

	it('test for Help', async () => {
		const _HelpwouNDxj = new Help()
		const _strScP4wL = "0GGqhcHd1oUlbBhLN8z7WPYMI6wam3AYsyURQfxBXf8Q4Q9DlDl";
		const _returnValueAxgO3n = "oVhJWmES2cXxRPZYvtWF6c3a3osk3x7d9zpvfwuhJQRknoGuqtd1GkR5O";
		const _widthjWGNBoJ = () => { return _returnValueAxgO3n };
		const _indentxcuQSfB = []
		const _minColumnWidthqx1MGPO = "5rRNLzmYkl2RkgoAfpcaGaQmDrpBBwW2VVw";
		const _returnValueCRRZiv8 = await _HelpwouNDxj.wrap(_strScP4wL, _widthjWGNBoJ, _indentxcuQSfB, _minColumnWidthqx1MGPO)
		const _cmd18dpgs = null;
		const _returnValue6RWe6K = await _HelpwouNDxj.visibleOptions(_cmd18dpgs)
		const _cmdXwPuZFr = undefined;
		const _returnValuev9yMch4 = await _HelpwouNDxj.visibleArguments(_cmdXwPuZFr)
		const _argumentXfE1eeZ = -0.6176285411930227;
		const _returnValuehd14Iu = await _HelpwouNDxj.argumentDescription(_argumentXfE1eeZ)
		const _cmdRInNBdN = []
		const _helperkzLGgEo = -0.32710530530892257;
		const _returnValuea2yL0tj = await _HelpwouNDxj.longestArgumentTermLength(_cmdRInNBdN, _helperkzLGgEo)
	});
})