export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpeu7IFLm = new Help()
		const _arrayValueFtCmRg3 = null;
		const _arrayValuedXIhPGl = false;
		const _arrayValueLya8tSs = {
		
	}
		const _arrayValueUonbIh = false;
		const _arrayValueXGsiLRa = [_arrayValuedXIhPGl, _arrayValueLya8tSs, _arrayValueUonbIh]
		const _arrayValueyalmmjr = "HpYyLxsRYstijfutBBhWuajQSz";
		const _arrayValuecH7do4 = "Hr7Fve5pu";
		const _arrayValuedZ38vsT = [_arrayValueXGsiLRa, _arrayValueyalmmjr, _arrayValuecH7do4]
		const _arrayValuehxL8Uks = undefined;
		const _returnValueCQjrplp = [_arrayValueFtCmRg3, _arrayValuedZ38vsT, _arrayValuehxL8Uks]
		const _cmdZvNSOmI = () => { return _returnValueCQjrplp };
		const _returnValueXXeNTxP = await _Helpeu7IFLm.visibleCommands(_cmdZvNSOmI)
		const _cmdSr6COoS = -3.8329362145730297;
		const _returnValueMc5Nsy = await _Helpeu7IFLm.visibleOptions(_cmdSr6COoS)
	});

	it('test for Help', async () => {
		const _Help38HFpe = new Help()
		const _cmdLCYK0fp = null;
		const _helperWJsj8zV = -8.8335339889064;
		const _returnValuexmYeZPO = await _Help38HFpe.padWidth(_cmdLCYK0fp, _helperWJsj8zV)
		const _returnValueQdArCvl = "sSGBmYfDW93OYaPPboOKgO383PTChg3CveBW5Qsu3Yo6rgd7kWUUiPQgv6VCsjtszZFr9kwYP1";
		const _arrayValueJuUwY1W = () => { return _returnValueQdArCvl };
		const _arrayValueFOU5TFM = null;
		const _cmdmVacNSm = [_arrayValueJuUwY1W, _arrayValueFOU5TFM]
		const _returnValuedamjhaE = await _Help38HFpe.visibleArguments(_cmdmVacNSm)
		const _returnValueHAXsYlg = -2.8242352554592474;
		const _cmdlVXfD9N = () => { return _returnValueHAXsYlg };
		const _returnValuefeuVXDk = await _Help38HFpe.subcommandDescription(_cmdlVXfD9N)
	});

	it('test for Help', async () => {
		const _HelpCtqUnLN = new Help()
		const _optionwfiFsL5 = undefined;
		const _returnValuekhLv571 = await _HelpCtqUnLN.optionDescription(_optionwfiFsL5)
		const _cmdv8JBFD3 = "tL3fdvkOWN3xreLvP1N3V1mVcuLtocEoevHu3";
		const _helpery5q8JF = undefined;
		const _returnValue4Cf96k = await _HelpCtqUnLN.padWidth(_cmdv8JBFD3, _helpery5q8JF)
	});

	it('test for Help', async () => {
		const _HelptdhSPWa = new Help()
		const _argumentEmrV5rf = {
		
	}
		const _returnValuersJ9fww = await _HelptdhSPWa.argumentTerm(_argumentEmrV5rf)
	});

	it('test for Help', async () => {
		const _HelpTPFxHJ1 = new Help()
		const _cmdBdqXqF = {
		
	}
		const _helperr36tmMQ = null;
		const _returnValuemU2FIEy = await _HelpTPFxHJ1.longestArgumentTermLength(_cmdBdqXqF, _helperr36tmMQ)
		const _cmdVPEdtJ = "tlSdEv2T359CStO2BhnBx1AcUZVC5Z6o7tQ5gArGeGPp8I2lEH91BfhcSONsS8CV88VQlM";
		const _returnValueiFz6B8h = await _HelpTPFxHJ1.commandUsage(_cmdVPEdtJ)
	});

	it('test for Help', async () => {
		const _HelpZJPldjW = new Help()
		const _cmdtaiS9U = undefined;
		const _helperh7z091F = {
		
	}
		const _returnValuePLQ1LjH = await _HelpZJPldjW.longestOptionTermLength(_cmdtaiS9U, _helperh7z091F)
		const _returnValueeZDU97T = null;
		const _arrayValueRv29hX = () => { return _returnValueeZDU97T };
		const _cmd38lEcT = [_arrayValueRv29hX]
		const _returnValuevvoqBN = await _HelpZJPldjW.commandDescription(_cmd38lEcT)
		const _cmdxVGmtQ5 = false;
		const _helperDHQEpW8 = "CgHW";
		const _returnValueUBy9en = await _HelpZJPldjW.padWidth(_cmdxVGmtQ5, _helperDHQEpW8)
	});

	it('test for Help', async () => {
		const _HelpGpChTG = new Help()
		const _cmdROjqTQh = false;
		const _returnValueyLlWJ18 = await _HelpGpChTG.subcommandTerm(_cmdROjqTQh)
		const _cmdfZjzV9f = undefined;
		const _returnValueWC8PE9u = await _HelpGpChTG.visibleOptions(_cmdfZjzV9f)
		const _argumentaqyMwSx = {
		
	}
		const _returnValueYCqqTF7 = await _HelpGpChTG.argumentDescription(_argumentaqyMwSx)
		const _optionIPN2Xbb = null;
		const _returnValueSAEXVxQ = await _HelpGpChTG.optionTerm(_optionIPN2Xbb)
	});

	it('test for Help', async () => {
		const _HelpSekJZcG = new Help()
		const _cmdEghRzBv = undefined;
		const _returnValueh6EECYU = await _HelpSekJZcG.visibleOptions(_cmdEghRzBv)
		const _returnValueohpPDXC = null;
		const _cmdrEsGfqg = () => { return _returnValueohpPDXC };
		const _returnValuecQmcHcO = await _HelpSekJZcG.commandDescription(_cmdrEsGfqg)
		const _cmduBGjdUI = null;
		const _returnValueM1kAjC6 = await _HelpSekJZcG.commandUsage(_cmduBGjdUI)
	});

	it('test for Help', async () => {
		const _HelpsulD5Wc = new Help()
		const _cmdNLE8Pk4 = false;
		const _returnValuelVYpt3k = await _HelpsulD5Wc.subcommandDescription(_cmdNLE8Pk4)
		const _strcURx2l1 = null;
		const _returnValueMsrYBng = "uoLJoAff4SI1pTCuSdzqg8Hqtp";
		const _widthvVU8QUq = () => { return _returnValueMsrYBng };
		const _indentwSX3VBJ = undefined;
		const _minColumnWidthKdVJtrY = "e5dDqrGsRQ6ooSzRErl5jDYgtRwqjOVGFydgJCVNXpiDM";
		const _returnValueimMUMbu = await _HelpsulD5Wc.wrap(_strcURx2l1, _widthvVU8QUq, _indentwSX3VBJ, _minColumnWidthKdVJtrY)
		const _cmdO9wcwub = {
		
	}
		const _returnValueZ9RMEnD = await _HelpsulD5Wc.visibleCommands(_cmdO9wcwub)
	});

	it('test for Help', async () => {
		const _Helpl9CNzs = new Help()
		const _cmd20FYQw = "3OWg7zgqlnNHdJJuCQUwY3gsbwBjijODECA9bBWbv917Hw6bY";
		const _returnValuenhRBDV9 = await _Helpl9CNzs.visibleArguments(_cmd20FYQw)
		const _cmdpeMUtiz = null;
		const _returnValueas2b8dM = await _Helpl9CNzs.subcommandDescription(_cmdpeMUtiz)
		const _argumentZvqinvg = null;
		const _returnValue1TUxKL = await _Helpl9CNzs.argumentTerm(_argumentZvqinvg)
		const _cmdVfl3vqr = {
		
	}
		const _returnValuecmjnLX = await _Helpl9CNzs.commandDescription(_cmdVfl3vqr)
	});

	it('test for Help', async () => {
		const _HelprH1e2Ly = new Help()
		const _cmdvsQkmkB = undefined;
		const _arrayValuetE1et1j = {
		
	}
		const _arrayValueg2PYeQ = 8.473269685920638;
		const _arrayValueCkR0MPw = undefined;
		const _helperQysb38f = [_arrayValuetE1et1j, _arrayValueg2PYeQ, _arrayValueCkR0MPw]
		const _returnValueufas6BR = await _HelprH1e2Ly.longestSubcommandTermLength(_cmdvsQkmkB, _helperQysb38f)
		const _cmdpHHqHyH = -3.1387562134671754;
		const _returnValuedVUBdo7 = await _HelprH1e2Ly.commandUsage(_cmdpHHqHyH)
		const _returnValuebYcy6XI = false;
		const _optionGZzYIQG = () => { return _returnValuebYcy6XI };
		const _returnValuebXYvMB = await _HelprH1e2Ly.optionDescription(_optionGZzYIQG)
	});

	it('test for Help', async () => {
		const _HelpAtT93QZ = new Help()
		const _cmdPuQaMJy = "U69GrPE7ioIIX7iqTHx8qp2JK52UoSQf4j8lRLfQphfdLisSeDx6EgRyxh3t";
		const _returnValueDJTRoI = await _HelpAtT93QZ.commandUsage(_cmdPuQaMJy)
	});

	it('test for Help', async () => {
		const _Helpzv6BHer = new Help()
		const _optionsD3UJB = true;
		const _returnValueBiR2iR = await _Helpzv6BHer.optionTerm(_optionsD3UJB)
		const _cmdh4iojwZ = "l6coPyhZoO1ezIBfwSd7LniodOov3pDTKCTH";
		const _returnValuee5C76tM = null;
		const _helperfOdei6L = () => { return _returnValuee5C76tM };
		const _returnValueEVcQND5 = await _Helpzv6BHer.longestOptionTermLength(_cmdh4iojwZ, _helperfOdei6L)
		const _argumentW9XYmxd = {
		
	}
		const _returnValuejrgIZw = await _Helpzv6BHer.argumentTerm(_argumentW9XYmxd)
		const _strtm2hLjv = -6.637059704521521;
		const _widthix8Aw1l = "ntzRW29CBwQLlW3oDjrqMx6WJbJ2Qf2pzMnIyX1TyANQsyK";
		const _arrayValueRj4Uktr = -7.698603142883233;
		const _arrayValuenZGJ5LO = undefined;
		const _arrayValuexGzIMDz = -5.324133571459385;
		const _indentmlEpb9c = [_arrayValueRj4Uktr, _arrayValuenZGJ5LO, _arrayValuexGzIMDz]
		const _minColumnWidthgvwzaSo = "oardvqUYw26UUBHxkRXtRV3p7yw3VMCtCoyVJL5b4ZJBtvcwtppni2KNjp8E1uN8jSJNWPQho";
		const _returnValueBXuz5qG = await _Helpzv6BHer.wrap(_strtm2hLjv, _widthix8Aw1l, _indentmlEpb9c, _minColumnWidthgvwzaSo)
	});

	it('test for Help', async () => {
		const _HelpZFgiOPr = new Help()
		const _arrayValueCtqgsTm = undefined;
		const _arrayValuexssVEv2 = -5.737965861544989;
		const _arrayValueMtDyTU = null;
		const _optionJZbG0Ah = [_arrayValueCtqgsTm, _arrayValuexssVEv2, _arrayValueMtDyTU]
		const _returnValueXr2fUFb = await _HelpZFgiOPr.optionDescription(_optionJZbG0Ah)
	});

	it('test for Help', async () => {
		const _HelpO4CYBOi = new Help()
		const _argumentvDs1AJk = true;
		const _returnValueg8N1UA = await _HelpO4CYBOi.argumentDescription(_argumentvDs1AJk)
		const _cmdE9DzVRH = 6.681882887182692;
		const _returnValueE2DQuVo = await _HelpO4CYBOi.commandDescription(_cmdE9DzVRH)
	});

	it('test for Help', async () => {
		const _HelpqeftsI = new Help()
		const _strfgPM2W = true;
		const _widthGjMe6qv = null;
		const _indentwXLZBIG = 2.1817254160572865;
		const _arrayValueHig5Yj3 = -4.938894132029913;
		const _arrayValueas3lLF = true;
		const _arrayValuemTZqzIs = true;
		const _minColumnWidthoXIYE8V = [_arrayValueHig5Yj3, _arrayValueas3lLF, _arrayValuemTZqzIs]
		const _returnValueLUBnfP3 = await _HelpqeftsI.wrap(_strfgPM2W, _widthGjMe6qv, _indentwXLZBIG, _minColumnWidthoXIYE8V)
		const _strwqUM3o9 = "wsDC7UX3JIqCZ2tGJYJPsAs2b5aNolLvplPYWJV04AvkiTJatc7E0tBoem5w1GgZNVgtN1f4Ohhx3q";
		const _widthNpOujl8 = -1.085495556315836;
		const _indentpcgs7Ic = undefined;
		const _minColumnWidthMPqtxQL = "6HdhZmFgDLEB1RScJU3KEyP7XZyJGMpRkAL6QPokf6hPQOQUnHQ85MNGDEhVmNQ";
		const _returnValueNcyP8zY = await _HelpqeftsI.wrap(_strwqUM3o9, _widthNpOujl8, _indentpcgs7Ic, _minColumnWidthMPqtxQL)
	});

	it('test for Help', async () => {
		const _HelpUlcO1py = new Help()
		const _arrayValuedceORRn = -2.388734590732845;
		const _arrayValueIQiOQEp = undefined;
		const _arrayValuer063e3E = "nOkH6xdgWNhaXpP42O7YYVmNWhPHFhQIOeoTmIGUcAvaGjCCyNqRrMsrzuOkbRqLqPVouHPERoSm7dOEE3";
		const _arrayValuewYYtAy8 = [_arrayValuedceORRn, _arrayValueIQiOQEp, _arrayValuer063e3E]
		const _arrayValueOmepTYc = {
		
	}
		const _arrayValuekqsUw08 = [_arrayValueOmepTYc]
		const _arrayValueMzzglQ = null;
		const _arrayValuecJXykE7 = null;
		const _arrayValueIKIbO2a = [_arrayValuewYYtAy8, _arrayValuekqsUw08, _arrayValueMzzglQ, _arrayValuecJXykE7]
		const _arrayValueViTkhl1 = undefined;
		const _arrayValueVQGHJJj = 2.150138555151141;
		const _argumentD8jYkbM = [_arrayValueIKIbO2a, _arrayValueViTkhl1, _arrayValueVQGHJJj]
		const _returnValueSWzeSvX = await _HelpUlcO1py.argumentDescription(_argumentD8jYkbM)
		const _optionsQWPygk = {
		
	}
		const _returnValueHSpGYm8 = await _HelpUlcO1py.optionTerm(_optionsQWPygk)
		const _returnValue2tJsXA = -7.7507961424734475;
		const _cmdfSpNB2D = () => { return _returnValue2tJsXA };
		const _helpermaLzHbK = null;
		const _returnValuecPJhgoQ = await _HelpUlcO1py.formatHelp(_cmdfSpNB2D, _helpermaLzHbK)
	});

	it('test for Help', async () => {
		const _HelpgD0LEyl = new Help()
		const _strPrQGvyj = "WylCYeg3JtoHCYsXBiDOm7BviF77Bl24M7PoqxHcaIwqGhWr42J1QWycMmcdy6lsqohchZNakrT62Nzkup";
		const _widthxVtohI = "FEoff1W7dcSjr1dQ1djsVbuuAOagArOnjlN1y70y7DeOBPKbd1vaFuAqAV6hSWWdTdLHRR5mBwznGLCNXCoI2";
		const _indentu2u2nNi = true;
		const _minColumnWidthYwmnY9P = undefined;
		const _returnValuelStz8Vw = await _HelpgD0LEyl.wrap(_strPrQGvyj, _widthxVtohI, _indentu2u2nNi, _minColumnWidthYwmnY9P)
	});

	it('test for Help', async () => {
		const _HelpzUP5Ke5 = new Help()
		const _argumentHc57aUF = true;
		const _returnValueuDaUcn0 = await _HelpzUP5Ke5.argumentDescription(_argumentHc57aUF)
		const _argumentx5AlnPt = {
		
	}
		const _returnValueCrAPDUu = await _HelpzUP5Ke5.argumentDescription(_argumentx5AlnPt)
		const _argumentyvlbueQ = "pyNDGbHPtfqKMg4s5VSMLUt5oJz9YQUrlSV9VN9c1UP31SAIsf2RSDcnIOyrKCxmcYoZuFZqV1Sgt2IUslRTbuN";
		const _returnValueStJAvxI = await _HelpzUP5Ke5.argumentDescription(_argumentyvlbueQ)
		const _strTcXtgvM = "eQSshJQ48vcbdaowyaI83sKdDq2tM6GgNbQRAmzBHE3dOL0COHdPTscTR8IXeY9";
		const _widthQqUNNu1 = null;
		const _indentI3by8M6 = 0.4605815964934141;
		const _minColumnWidthpmK9Da = undefined;
		const _returnValueVQagCC = await _HelpzUP5Ke5.wrap(_strTcXtgvM, _widthQqUNNu1, _indentI3by8M6, _minColumnWidthpmK9Da)
	});
})