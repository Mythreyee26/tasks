const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function renderEnvHtml(env) {
  const rows = Object.keys(env).sort().map(k =>
    `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(env[k])}</td></tr>`
  ).join('\n');

  return `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Node Env</title>
 <style>body{font-family:Arial;margin:20px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;padding:8px}</style>
</head>
<body>
  <h1>Environment Variables (Node)</h1>
  <table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>${rows}</tbody></table>
</body>
</html>`;
}

function escapeHtml(s){
  if (s === undefined || s === null) return '';
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
}

app.get('/', (req, res) => {
  res.send(renderEnvHtml(process.env));
});

app.listen(port, () => console.log(`App running on :${port}`));
