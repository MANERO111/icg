const fs = require('fs');
const raw = fs.readFileSync('eslint_report2.json', 'utf16le');
const report = JSON.parse(raw.replace(/^\uFEFF/, ''));

let filesFixed = 0;
let errorsFixed = 0;

for (const file of report) {
  let content = fs.readFileSync(file.filePath, 'utf8');
  let lines = content.split('\n');
  let changed = false;

  const entitiesErrors = file.messages.filter(m => m.ruleId === 'react/no-unescaped-entities');
  
  if (entitiesErrors.length === 0) continue;
  
  // Sort errors in reverse order by line and column so that replacing a character
  // doesn't offset the subsequent replacements on the same line.
  entitiesErrors.sort((a, b) => {
    if (a.line !== b.line) return b.line - a.line;
    return b.column - a.column;
  });
  
  for (const error of entitiesErrors) {
    const lineIdx = error.line - 1;
    let colIdx = error.column - 1; // 0-indexed string index
    
    let line = lines[lineIdx];
    if (line === undefined) continue;
    
    // The char reported by eslint might be at colIdx
    const char = line[colIdx];
    let replacement = null;
    
    if (char === "'" || char === "’") replacement = '&apos;';
    else if (char === '"') replacement = '&quot;';
    else if (char === '>') replacement = '&gt;';
    else if (char === '}') replacement = '&#125;';
    
    if (replacement) {
      lines[lineIdx] = line.slice(0, colIdx) + replacement + line.slice(colIdx + 1);
      changed = true;
      errorsFixed++;
    } else {
      // Fallback: If column is slightly off (which sometimes happens with tabs vs spaces)
      // find the first quote or apostrophe around that column.
      console.log(`Warning: char at col ${colIdx} is "${char}", not an entity in ${file.filePath}:${error.line}`);
      // Simple fallback for any ' or ’ or " on the line if there's only one.
      if (line.includes("'")) {
          lines[lineIdx] = line.replace(/'/g, '&apos;');
          changed = true;
          errorsFixed++;
      } else if (line.includes("’")) {
          lines[lineIdx] = line.replace(/’/g, '&apos;');
          changed = true;
          errorsFixed++;
      } else if (line.includes('"') && !line.includes('=')) {
          lines[lineIdx] = line.replace(/"/g, '&quot;');
          changed = true;
          errorsFixed++;
      }
    }
  }
  
  if (changed) {
    fs.writeFileSync(file.filePath, lines.join('\n'), 'utf8');
    filesFixed++;
  }
}

console.log(`Fixed ${errorsFixed} remaining exact character errors across ${filesFixed} files.`);
