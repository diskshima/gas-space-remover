export class Remover {
  static removeWhitespace = (): void => {
    Remover.removeRegex(/ /g);
  };

  static removeNewline = (): void => {
    Remover.removeRegex(/\n/g);
  };

  static removeWhitespaceAndNewline = (): void => {
    Remover.removeRegex(/[ \n]/g);
  };

  private static removeRegex = regex => {
    const activeSheet = SpreadsheetApp.getActiveSheet();
    const selection = activeSheet.getSelection();

    const ranges = selection.getActiveRangeList().getRanges();

    ranges.forEach(range => {
      const values = range.getValues();
      values.forEach(row => {
        for (let i = 0; i < row.length; i++) {
          row[i] = row[i].toString().replace(regex, '');
        }
      });
      range.setValues(values);
    });
  };
}
