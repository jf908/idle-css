document.querySelectorAll('pre').forEach(function(pre) {
  if(pre.classList.contains('ignore')) return;

  var html = pre.innerHTML;

  html = html_beautify(html.trim(), {
    indent_size: 2
  });

  pre.innerHTML = '';
  pre.textContent = html;
  hljs.highlightBlock(pre);
});