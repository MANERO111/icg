const fs = require('fs');

const raw = fs.readFileSync('eslint_report.json', 'utf16le');
const report = JSON.parse(raw.replace(/^\uFEFF/, ''));

let filesFixed = 0;
let errorsFixed = 0;

for (const file of report) {
  let content = fs.readFileSync(file.filePath, 'utf8');
  let lines = content.split('\n');
  let changed = false;

  // We want to fix react/no-unescaped-entities errors
  // To avoid messing up offsets, we replace from the end of the line backwards, 
  // or we can just replace ' and ’ with &apos; in the specific lines that have the error.
  
  const entitiesErrors = file.messages.filter(m => m.ruleId === 'react/no-unescaped-entities');
  
  if (entitiesErrors.length > 0) {
    // Collect all lines that need fixing
    const linesToFix = new Set(entitiesErrors.map(e => e.line));
    
    for (const lineNum of linesToFix) {
      const idx = lineNum - 1;
      let line = lines[idx];
      // We will do a generic replacement of ' and ’ with &apos; ONLY inside JSX text.
      // A naive approach: replace ' and ’ that are surrounded by letters, e.g., d'intérieur, l'intérieur.
      // Let's replace: ([a-zA-Z])['’]([a-zA-Z]) -> $1&apos;$2
      // Also maybe spaces: ([a-zA-Z])['’]\s -> $1&apos; 
      // This is safer than replacing all ' because it avoids breaking attributes like className='flex'.
      
      const oldLine = line;
      line = line.replace(/([a-zA-Z])['’]([a-zA-Z])/g, '$1&apos;$2');
      line = line.replace(/([a-zA-Z])['’]\s/g, '$1&apos; ');
      line = line.replace(/\s['’]([a-zA-Z])/g, ' &apos;$1');
      
      if (line !== oldLine) {
        lines[idx] = line;
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

console.log(`Fixed ${errorsFixed} errors across ${filesFixed} files.`);
