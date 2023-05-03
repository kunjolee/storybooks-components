import{j as x}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const l=({allCaps:t=!1,color:S="primary",label:n="No label ",size:q="normal",fontColor:M=""})=>x("span",{className:`label ${q} text-${S}`,style:{color:M},children:t?n.toUpperCase():n});try{l.displayName="MyLabel",l.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Message will appear in the tag",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"This is the default label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize label",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Set the color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:{value:""},description:"Set font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const j={title:"UI/MyLabel",component:l,tags:["autodocs"],argTypes:{label:{control:"text"},size:{control:{type:"radio",options:["normal","h1","h2","h3"]}},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Agregando valor por defecto",size:"h1",allCaps:!1}},a={args:{label:"por ejemplo aca que estas haciendo",size:"normal",allCaps:!0}},r={args:{size:"normal",color:"secondary"}},o={args:{size:"normal",color:"tertiary"}},s={args:{fontColor:"#fc0789",size:"h1"}};var c,i,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Agregando valor por defecto',
    size: 'h1',
    allCaps: false //true: capitalizar toda la palabra
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'por ejemplo aca que estas haciendo',
    size: 'normal',
    allCaps: true
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,f,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'secondary' //primary | secondary | tertiary
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,h,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'tertiary'
  }
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,z,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fontColor: '#fc0789',
    size: 'h1'
  }
}`,...(_=(z=s.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const A=["Basic","AllCaps","Secondary","Tertiary","customFontColor"];export{a as AllCaps,e as Basic,r as Secondary,o as Tertiary,A as __namedExportsOrder,s as customFontColor,j as default};
//# sourceMappingURL=MyLabel.stories-bd627238.js.map
