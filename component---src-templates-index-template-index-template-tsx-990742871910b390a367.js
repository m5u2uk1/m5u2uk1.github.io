"use strict";(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[574],{7919:function(e,t,a){a.d(t,{f:function(){return o}});var n=a(7294),r=a(1082),l="Feed-module--link--6123b";var o=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>{var t,a;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("ja-JP",{year:"numeric",month:"numeric",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("ja-JP",{year:"numeric",month:"numeric",day:"numeric"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(r.Link,{to:e.node.fields.categorySlug,className:l},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--f252f"},n.createElement(r.Link,{className:l,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement(r.Link,{className:"Feed-module--more--51a4e",to:(null===(a=e.node.frontmatter)||void 0===a?void 0:a.slug)||e.node.fields.slug}))})))}},9388:function(e,t,a){a.d(t,{t:function(){return i}});var n=a(7294),r=a(5900),l=a.n(r),o=a(1082),m=a(100),d="Pagination-module--disable--7e105";var i=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:r,hasPrevPage:i}=e;const s=l()("Pagination-module--previousLink--5590d",{[d]:!i}),c=l()("Pagination-module--nextLink--532ff",{[d]:!r});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(o.Link,{rel:"prev",to:i?t:"/",className:s},m.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(o.Link,{rel:"next",to:r?a:"/",className:c},m.X.NEXT_PAGE)))}},5886:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var n=a(7294),r=a(7919),l=a(6327),o=a(9395),m=a(7989),d=a(9388),i=a(3588),s=a(2349);const c=e=>{let{pageContext:t}=e;const{title:a,subtitle:r}=(0,s.$W)(),{pagination:{currentPage:l}}=t,m=l>0?"Posts - Page "+l+" - "+a:a;return n.createElement(o.h,{title:m,description:r})};t.default=e=>{let{data:t,pageContext:a}=e;const{pagination:o}=a,{hasNextPage:s,hasPrevPage:c,prevPagePath:u,nextPagePath:g}=o,{edges:P}=t.allMarkdownRemark;return n.createElement(l.A,null,n.createElement(i.Y,{isIndex:!0}),n.createElement(m.T,null,n.createElement(r.f,{edges:P}),n.createElement(d.t,{prevPagePath:u,nextPagePath:g,hasPrevPage:c,hasNextPage:s})))}}}]);
//# sourceMappingURL=component---src-templates-index-template-index-template-tsx-990742871910b390a367.js.map