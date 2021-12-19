  const first = document.querySelector(&quot;.first&quot;);
const iframe = document.querySelector(&quot;iframe&quot;);
const btn = document.querySelector(&quot;button&quot;);

btn.addEventListener(&quot;click&quot;, () =&gt; {
  var html = first.textContent;
  iframe.src = &quot;data:text/html;charset=utf-8,&quot; + encodeURI(html);
});


first.addEventListener(&#39;keyup&#39;,()=&gt;{
  var html = first.textContent;
  iframe.src = &quot;data:text/html;charset=utf-8,&quot; + encodeURI(html);
})

first.addEventListener(&quot;paste&quot;, function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData(&quot;text/plain&quot;);
        document.execCommand(&quot;insertText&quot;, false, text);
    });
