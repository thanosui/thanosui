'use strict';

var tailwindVariants = require('tailwind-variants');
var jsxRuntime = require('react/jsx-runtime');

var l=tailwindVariants.tv({base:"font-medium bg-blue-500 text-white rounded-full active:opacity-80",variants:{color:{primary:"bg-blue-500 text-white",secondary:"bg-purple-500 text-white"},size:{sm:"text-sm",md:"text-base",lg:"px-4 py-3 text-lg"}},compoundVariants:[{size:["sm","md"],class:"px-3 py-1"}],defaultVariants:{size:"md",color:"primary"}}),c=()=>jsxRuntime.jsx("button",{style:{borderWidth:2},className:l({size:"md",color:"secondary"}),children:"Click me"});var f=()=>jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx("h1",{className:"text-3xl font-bold underline",children:"Hello world!"}),jsxRuntime.jsx("button",{type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",children:"Default"})]});var y=({title:o,cta:i,href:u})=>jsxRuntime.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:u,className:"ui-group ui-mt-4 ui-rounded-lg ui-border ui-border-transparent ui-overflow-hidden ui-bg-origin-border ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-text-[#6b7280]",children:jsxRuntime.jsxs("div",{className:"ui-p-4 ui-bg-zinc-900 ui-h-full",children:[jsxRuntime.jsx("p",{className:"ui-inline-block ui-text-xl ui-text-white",children:o}),jsxRuntime.jsxs("div",{className:"ui-text-xs ui-mt-4 group-hover:ui-underline",children:[i," \u2192"]})]})});

exports.Avatar = f;
exports.Button = c;
exports.Card = y;
