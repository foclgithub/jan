"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[631],{64268:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(85893),i=s(11151);const r={title:"Overview",slug:"/docs"},o=void 0,a={id:"docs/README",title:"Overview",description:"The following low-level docs are aimed at core contributors.",source:"@site/docs/docs/01-README.md",sourceDirName:"docs",slug:"/docs",permalink:"/docs",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/docs/01-README.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1705633577,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:1,frontMatter:{title:"Overview",slug:"/docs"},sidebar:"docsSidebar",next:{title:"Integrations",permalink:"/docs/integrations/"}},c={},l=[{value:"Jan Framework",id:"jan-framework",level:2},{value:"Extensions",id:"extensions",level:3},{value:"Cross Platform",id:"cross-platform",level:3},{value:"Local First",id:"local-first",level:3},{value:"AI Native",id:"ai-native",level:3},{value:"Fun Project Ideas",id:"fun-project-ideas",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The following low-level docs are aimed at core contributors."}),"\n",(0,t.jsxs)(n.p,{children:["We cover how to contribute to the core framework (aka the ",(0,t.jsx)(n.code,{children:"Core SDK"}),")."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you are interested to ",(0,t.jsx)(n.strong,{children:"build on top of the framework"}),", like creating assistants or adding app level extensions, please refer to ",(0,t.jsx)(n.a,{href:"/developer",children:"developer docs"})," instead."]})}),"\n",(0,t.jsx)(n.h2,{id:"jan-framework",children:"Jan Framework"}),"\n",(0,t.jsxs)(n.p,{children:["At its core, Jan is a ",(0,t.jsx)(n.strong,{children:"cross-platform, local-first and AI native framework"})," that can be used to build anything."]}),"\n",(0,t.jsx)(n.h3,{id:"extensions",children:"Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["Ultimately, we aim for a ",(0,t.jsx)(n.code,{children:"VSCode"})," or ",(0,t.jsx)(n.code,{children:"Obsidian"})," like SDK that allows ",(0,t.jsx)(n.strong,{children:"devs to build and customize complex and ethical AI applications for any use case"}),", in less than 30 minutes."]}),"\n",(0,t.jsxs)(n.p,{children:["In fact, the current Jan ",(0,t.jsx)(n.a,{href:"https://jan.ai/",children:"Desktop Client"})," is actually just a specific set of extensions & integrations built on top of this framework."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Desktop is Extensions",src:s(55829).Z+"",width:"2706",height:"1770"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"We encourage devs to fork, customize, and open source your improvements for the greater community."})}),"\n",(0,t.jsx)(n.h3,{id:"cross-platform",children:"Cross Platform"}),"\n",(0,t.jsxs)(n.p,{children:["Jan follows ",(0,t.jsx)(n.a,{href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",children:"Clean Architecture"})," to the best of our ability. Though leaky abstractions remain (we're a fast moving, open source codebase), we do our best to build an SDK that allows devs to ",(0,t.jsx)(n.strong,{children:"build once, deploy everywhere."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Clean Architecture",src:s(74419).Z+"",width:"772",height:"567"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Supported Runtimes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Node Native Runtime"}),", good for server side apps"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Electron Chromium"}),", good for Desktop Native apps"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Capacitor"}),", good for Mobile apps (planned, not built yet)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Python Runtime"}),", good for MLOps workflows (planned, not built yet)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Supported OS & Architectures:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mac Intel & Silicon"}),"\n",(0,t.jsx)(n.li,{children:"Windows"}),"\n",(0,t.jsx)(n.li,{children:"Linux (through AppImage)"}),"\n",(0,t.jsx)(n.li,{children:"Nvidia GPUs"}),"\n",(0,t.jsx)(n.li,{children:"AMD ROCm (coming soon)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Read more:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core",children:"Code Entrypoint"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Dependency_inversion_principle",children:"Dependency Inversion"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"local-first",children:"Local First"}),"\n",(0,t.jsx)(n.p,{children:"Jan's data persistence happens on the user's local filesystem."}),"\n",(0,t.jsxs)(n.p,{children:["We implemented abstractions on top of ",(0,t.jsx)(n.code,{children:"fs"})," and other core modules in an opinionated way, s.t. user data is saved in a folder-based framework that lets users easily package, export, and manage their data."]}),"\n",(0,t.jsx)(n.p,{children:"Future endeavors on this front include cross device syncing, multi user experience, and more."}),"\n",(0,t.jsxs)(n.p,{children:["Long term, we want to integrate with folks working on ",(0,t.jsx)(n.a,{href:"https://www.inkandswitch.com/local-first/",children:"CRDTs"}),", e.g. ",(0,t.jsx)(n.a,{href:"https://www.theregister.com/2023/04/11/socket_runtime/",children:"Socket Runtime"})," to deeply enable local-first software."]}),"\n",(0,t.jsx)(n.p,{children:"Read more:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/janhq/jan/blob/main/core/src/fs.ts",children:"Folder-based wrappers entrypoint"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core/src/node",children:"Piping Node modules across infrastructures"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Our local first approach at the moment needs a lot of work. Please don't hesitate to refactor as you make your way through the codebase."})}),"\n",(0,t.jsx)(n.h3,{id:"ai-native",children:"AI Native"}),"\n",(0,t.jsx)(n.p,{children:"We believe all software applications can be natively supercharged with AI primitives and embedded AI servers."}),"\n",(0,t.jsx)(n.p,{children:"Including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["OpenAI Compatible AI ",(0,t.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core/src/types",children:"types"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core/src/extensions",children:"core extensions"})," to support common functionality like making an inference call."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Multiple inference engines through ",(0,t.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/extensions/inference-nitro-extension",children:"extensions, integrations & wrappers"})," ",(0,t.jsxs)(n.em,{children:["On this, we'd like to appreciate the folks at ",(0,t.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp",children:"llamacpp"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/NVIDIA/TensorRT-LLM",children:"TensorRT-LLM"})," for. To which we'll continue to make commits & fixes back upstream."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core/src/api",children:"Code Entrypoint"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fun-project-ideas",children:"Fun Project Ideas"}),"\n",(0,t.jsx)(n.p,{children:"Beyond the current Jan client and UX, the Core SDK can be used to build many other AI-powered and privacy preserving applications."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Game engine"}),": For AI enabled character games, procedural generation games"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Health app"}),": For a personal healthcare app that improves habits"]}),"\n",(0,t.jsx)(n.li,{children:"Got ideas? Make a PR into this docs page!"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you are interested to tackle these issues, or have suggestions for integrations and other OSS tools we can use, please hit us up in ",(0,t.jsx)(n.a,{href:"https://discord.gg/5rQ2zTv3be",children:"Discord"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Our open source license is copy left, which means we encourage forks to stay open source, and allow core contributors to merge things upstream."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},74419:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/CleanArchitecture-26ac5f08c770e19c35a8ef38b905373f.jpg"},55829:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/ExtensionCallouts-f5153831c0519e3eab145eed8be4f67d.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(67294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);