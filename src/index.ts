import { SheetService } from './sheet.service';

declare var global: any;

global.onOpen = (): void => {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Space Remover')
    .addItem('半角スペース除去', 'removeWhitespace')
    .addToUi();
};

global.removeWhitespace = (): void => {
  const activeSheet = SpreadsheetApp.getActiveSheet();
  const selection = activeSheet.getSelection();

  const ranges = selection.getActiveRangeList().getRanges();

  const spaceRegex = / /g;

  ranges.forEach(range => {
    const values = range.getValues();
    values.forEach(row => {
      for (let i = 0; i < row.length; i++) {
        row[i] = row[i].toString().replace(spaceRegex, '');
      }
    });
    range.setValues(values);
  });
};
