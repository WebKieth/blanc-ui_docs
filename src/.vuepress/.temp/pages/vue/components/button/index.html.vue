<template><div><h1 id="button" tabindex="-1"><a class="header-anchor" href="#button"><span>Button</span></a></h1>
<h3 id="применение" tabindex="-1"><a class="header-anchor" href="#применение"><span>Применение</span></a></h3>
<p>Сначала импортируйте кнопку в свой компонент, при необходимости кастомизации установите ей свои style и variants, расширьте props.</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="MyButton.vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'blanc-ui/vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> type ButtonProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'blanc-ui/vue/types'</span></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span>ButtonProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span></span>
<span class="line">    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props.style<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:variants</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props.variants<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props.disabled<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props.active<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:whenClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props.whenClick<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Кнопка - очень насыщенный на variants компонент. В ней заложены как базовые variants, так и для группы. В этом разделе мы рассмотрим только базовые. Документация групповых variants описана в разделе buttonGroup.</p>
</blockquote>
</div></template>


