import{j}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const t=({allCaps:n=!1,color:V="primary",label:c="No label ",size:x="normal",fontColor:L="",backgroundColor:N="transparent"})=>j("span",{className:`label ${x} text-${V}`,style:{color:L,backgroundColor:N},children:n?c.toUpperCase():c});try{t.displayName="MyLabel",t.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Message will appear in the tag",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"This is the default label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize label",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Set the color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:{value:""},description:"Set font color",name:"fontColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"backgroundColor",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const $={title:"UI/MyLabel",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},size:{control:{type:"radio",options:["normal","h1","h2","h3"]}},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Agregando valor por defecto",size:"h1",allCaps:!1}},a={args:{label:"por ejemplo aca que estas haciendo",size:"normal",allCaps:!0}},r={args:{size:"normal",color:"secondary"}},o={args:{size:"normal",color:"tertiary"}},s={args:{fontColor:"#fc0789",size:"h1"}},l={args:{fontColor:"#eee",size:"h1",backgroundColor:"#000"}};var i,p,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Agregando valor por defecto',
    size: 'h1',
    allCaps: false //true: capitalizar toda la palabra
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'por ejemplo aca que estas haciendo',
    size: 'normal',
    allCaps: true
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,f,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'secondary' //primary | secondary | tertiary
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,h,z;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'tertiary'
  }
}`,...(z=(h=o.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var v,S,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fontColor: '#fc0789',
    size: 'h1'
  }
}`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var q,k,M;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    fontColor: '#eee',
    size: 'h1',
    backgroundColor: '#000'
  }
}`,...(M=(k=l.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const F=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,l as CustomBackgroundColor,s as CustomFontColor,r as Secondary,o as Tertiary,F as __namedExportsOrder,$ as default};
//# sourceMappingURL=MyLabel.stories-912ff5ef.js.map
