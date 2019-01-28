import { Remover } from './remover';

declare var global: any;

global.onOpen = (): void => {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Space Remover')
    .addItem('半角スペース除去', 'removeWhitespace')
    .addItem('改行除去', 'removeNewline')
    .addItem('半角スペースと改行除去', 'removeWhitespaceAndNewline')
    .addToUi();
};

global.removeWhitespace = (): void => {
  Remover.genRegexReplacer(/ /g)();
};

global.removeNewline = (): void => {
  Remover.genRegexReplacer(/\n/g)();
};

global.removeWhitespaceAndNewline = (): void => {
  Remover.genRegexReplacer(/[ \n]/g)();
};
