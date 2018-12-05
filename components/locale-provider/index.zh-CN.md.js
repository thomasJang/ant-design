webpackJsonp([180],{1839:function(n,a){n.exports={content:["section",["p","\u4e3a\u7ec4\u4ef6\u5185\u5efa\u6587\u6848\u63d0\u4f9b\u7edf\u4e00\u7684\u56fd\u9645\u5316\u652f\u6301\u3002"],["h2","\u4f7f\u7528"],["p","LocaleProvider \u4f7f\u7528 React \u7684 ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context"]," \u7279\u6027\uff0c\u53ea\u9700\u5728\u5e94\u7528\u5916\u56f4\u5305\u88f9\u4e00\u6b21\u5373\u53ef\u5168\u5c40\u751f\u6548\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> LocaleProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> zh_CN <span class="token keyword">from</span> <span class="token string">\'antd/lib/locale-provider/zh_CN\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zh_CN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","import { LocaleProvider } from 'antd';\nimport zh_CN from 'antd/lib/locale-provider/zh_CN';\nimport 'moment/locale/zh-cn';\n...\n\nreturn <LocaleProvider locale={zh_CN}><App /></LocaleProvider>;"]],["p","\u6211\u4eec\u63d0\u4f9b\u4e86\u82f1\u8bed\uff0c\u4e2d\u6587\uff0c\u4fc4\u8bed\uff0c\u6cd5\u8bed\uff0c\u5fb7\u8bed\u7b49\u591a\u79cd\u8bed\u8a00\u652f\u6301\uff0c\u6240\u6709\u8bed\u8a00\u5305\u53ef\u4ee5\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale-provider/"},"\u8fd9\u91cc"]," \u627e\u5230\u3002"],["p","\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 UMD \u7248\u7684 dist \u6587\u4ef6\uff0c\u5e94\u8be5\u5f15\u5165 ",["code","antd/dist/antd-with-locales.js"],"\uff0c\u540c\u65f6\u5f15\u5165 moment \u5bf9\u5e94\u7684 locale\uff0c\u7136\u540e\u6309\u4ee5\u4e0b\u65b9\u5f0f\u4f7f\u7528\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">{</span> LocaleProvider<span class="token punctuation">,</span> locales <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>antd<span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locales<span class="token punctuation">.</span>en_US<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","const { LocaleProvider, locales } = window.antd;\n\n...\n\nreturn <LocaleProvider locale={locales.en_US}><App /></LocaleProvider>;"]],["h3","\u589e\u52a0\u8bed\u8a00\u5305"],["p","\u5982\u679c\u4f60\u627e\u4e0d\u5230\u4f60\u9700\u8981\u7684\u8bed\u8a00\u5305\uff0c\u6b22\u8fce\u4f60\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale-provider/en_US.tsx"},"\u82f1\u6587\u8bed\u8a00\u5305"]," \u7684\u57fa\u7840\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8bed\u8a00\u5305\uff0c\u5e76\u7ed9\u6211\u4eec Pull Request\u3002"],["h3","\u5176\u4ed6\u56fd\u9645\u5316\u9700\u6c42"],["p","\u672c\u6a21\u5757\u4ec5\u7528\u4e8e\u7ec4\u4ef6\u7684\u5185\u5efa\u6587\u6848\uff0c\u82e5\u6709\u4e1a\u52a1\u6587\u6848\u7684\u56fd\u9645\u5316\u9700\u6c42\uff0c\u5efa\u8bae\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/yahoo/react-intl"},"react-intl"],"\uff0c\u53ef\u53c2\u8003\u793a\u4f8b\uff1a",["a",{title:null,href:"http://github.com/ant-design/intl-example"},"Intl demo 1"]," \u548c ",["a",{title:null,href:"http://yiminghe.me/learning-react/examples/react-intl.html?locale=en-US"},"Intl demo 2"],"\u3002"]],meta:{category:"Components",subtitle:"\u56fd\u9645\u5316",cols:1,type:"\u5176\u4ed6",title:"LocaleProvider",filename:"components/locale-provider/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528",title:"\u4f7f\u7528"},"\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","locale"],["td","\u8bed\u8a00\u5305\u914d\u7f6e\uff0c\u8bed\u8a00\u5305\u53ef\u5230 ",["a",{title:null,href:"http://unpkg.com/antd/lib/locale-provider/"},"antd/lib/locale-provider"]," \u76ee\u5f55\u4e0b\u5bfb\u627e"],["td","object"],["td","-"]]]]]}}});