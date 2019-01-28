import { Remover } from './remover';
import { Replacer } from './replacer';

declare var global: any;

global.onOpen = () => {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Space Remover')
    .addItem('すべて実行', 'runAll')
    .addItem('半角スペース除去', 'removeWhitespace')
    .addItem('改行除去', 'removeNewline')
    .addItem('濁点修正', 'replaceSoundMark')
    .addToUi();
};

global.runAll = () => {
  Remover.regexRemover(/[ \n]/g);
  global.replaceSoundMark();
};

global.removeWhitespace = () => {
  Remover.regexRemover(/ /g);
};

global.removeNewline = () => {
  Remover.regexRemover(/\n/g);
};

global.replaceSoundMark = () => {
  Replacer.replaceSoundMark();
};
