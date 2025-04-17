const fs = require('fs');
const path = require('path');

// Function to update the instructions file
function updateInstructions(updates) {
  const instructionsPath = path.join(__dirname, '..', 'INSTRUCTIONS.md');
  let content = fs.readFileSync(instructionsPath, 'utf8');

  // Update content based on the updates object
  Object.entries(updates).forEach(([section, value]) => {
    const regex = new RegExp(`(${section}:)([^\\n]*)`, 'g');
    content = content.replace(regex, `$1 ${value}`);
  });

  fs.writeFileSync(instructionsPath, content);
  console.log('Instructions updated successfully!');
}

module.exports = {
  updateInstructions
}; 